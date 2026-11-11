const {test} = require('node:test');
const assert = require('node:assert/strict');
const {certificateDate, createCertificateDetails, buildCertificatePdf} = require('../certificate.js');

test('certificate dates use Tokyo, including the midnight boundary', () => {
    assert.equal(certificateDate(new Date('2026-11-10T14:59:59Z')), '2026-11-10');
    assert.equal(certificateDate(new Date('2026-11-10T15:00:00Z')), '2026-11-11');
});

test('only passing integer scores can receive a certificate', () => {
    for (const score of [-1,0,3,4,7,7.9,11,NaN]) assert.throws(() => createCertificateDetails(score));
    for (const score of [8,9,10]) {
        const details = createCertificateDetails(score, new Date('2026-11-10T15:00:00Z'));
        assert.equal(details.score,score);
        assert.equal(details.issuedOn,'2026-11-11');
        assert.match(details.id,/^LILA-20261111-[A-Z0-9]+$/);
    }
});

test('PDF has one A4 landscape page and correct byte offsets around binary data', () => {
    const jpeg = Uint8Array.from([255,216,0,128,10,255,217]);
    const bytes = buildCertificatePdf(jpeg,2526,1785);
    const pdf = Buffer.from(bytes).toString('latin1');
    assert.ok(pdf.startsWith('%PDF-1.4'));
    assert.match(pdf,/\/MediaBox \[0 0 841.89 595.28\]/);
    assert.match(pdf,/\/Count 1/);
    const start = Number(pdf.match(/startxref\n(\d+)/)[1]);
    assert.equal(pdf.slice(start,start+4),'xref');
    const xref = pdf.slice(start).split('\n');
    for(let id=1;id<=5;id++) {
        const offset = Number(xref[id+2].slice(0,10));
        assert.ok(pdf.slice(offset).startsWith(`${id} 0 obj`));
    }
    assert.throws(()=>buildCertificatePdf(new Uint8Array([0,1,2,3]),2526,1785));
});
