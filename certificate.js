/* A4 landscape certificate. Everything stays on the visitor's device. */
function certificateDate(date = new Date()) {
    const parts = new Intl.DateTimeFormat('en-CA', {
        timeZone: 'Asia/Tokyo', year: 'numeric', month: '2-digit', day: '2-digit'
    }).formatToParts(date);
    const get = type => parts.find(part => part.type === type).value;
    return `${get('year')}-${get('month')}-${get('day')}`;
}

function createCertificateDetails(score, date = new Date()) {
    if (!Number.isInteger(score) || score < 8 || score > 10) throw new Error('只有考试合格后才能领取证书。');
    const issuedOn = certificateDate(date);
    const random = globalThis.crypto?.randomUUID?.().slice(0, 8).toUpperCase()
        || Math.random().toString(36).slice(2, 10).toUpperCase();
    return {score, issuedOn, id: `LILA-${issuedOn.replaceAll('-', '')}-${random}`};
}

function drawCertificate(canvas, details, recipient = '') {
    if (!Number.isInteger(details.score) || details.score < 8 || details.score > 10) throw new Error('未达到合格分数。');
    const width = 842, height = 595, scale = 3;
    canvas.width = width * scale;
    canvas.height = height * scale;
    const ctx = canvas.getContext('2d');
    if (!ctx) throw new Error('当前浏览器无法生成证书，请换一个浏览器试试。');
    ctx.scale(scale, scale);
    const ink = '#303f6b', pink = '#d983a5', blue = '#688ec4';
    const ui = '"PingFang SC", "Microsoft YaHei", sans-serif';
    function text(value, x, y, size, color = ink, align = 'center', font = ui, weight = '400') {
        ctx.fillStyle = color; ctx.font = `${weight} ${size}px ${font}`; ctx.textAlign = align;
        ctx.fillText(value, x, y);
    }
    function line(x1, y1, x2, y2, color = '#c9d3e6', width = 1) {
        ctx.beginPath(); ctx.strokeStyle = color; ctx.lineWidth = width;
        ctx.moveTo(x1, y1); ctx.lineTo(x2, y2); ctx.stroke();
    }
    function paw(x, y, size, color) {
        ctx.save(); ctx.translate(x, y); ctx.rotate(-.18); ctx.scale(size, size); ctx.fillStyle = color;
        [[-.65,-.35,.23,.32,-.5],[-.24,-.72,.22,.32,-.15],[.24,-.72,.22,.32,.15],[.65,-.35,.23,.32,.5]].forEach(([a,b,rx,ry,r]) => {
            ctx.beginPath(); ctx.ellipse(a,b,rx,ry,r,0,Math.PI*2); ctx.fill();
        });
        ctx.beginPath(); ctx.moveTo(0,-.17); ctx.bezierCurveTo(-.24,-.17,-.4,.05,-.5,.25);
        ctx.bezierCurveTo(-.73,.7,-.24,.76,0,.61); ctx.bezierCurveTo(.24,.76,.73,.7,.5,.25);
        ctx.bezierCurveTo(.4,.05,.24,-.17,0,-.17); ctx.fill(); ctx.restore();
    }
    function star(x, y, radius, color) {
        ctx.save(); ctx.translate(x,y); ctx.fillStyle=color; ctx.beginPath();
        for(let i=0;i<8;i++) { const r=i%2?radius*.24:radius; const a=i*Math.PI/4; const px=Math.cos(a)*r,py=Math.sin(a)*r; if(i===0)ctx.moveTo(px,py);else ctx.lineTo(px,py); }
        ctx.closePath();ctx.fill();ctx.restore();
    }
    ctx.fillStyle = '#fff9f6'; ctx.fillRect(0,0,width,height);
    for(let x=0;x<width;x+=22) line(x,0,x,height,'#eee8ee',.35);
    for(let y=0;y<height;y+=22) line(0,y,width,y,'#eee8ee',.35);
    ctx.fillStyle = '#fffdfb'; ctx.fillRect(27,27,788,541);
    ctx.strokeStyle=ink;ctx.lineWidth=1.5;ctx.strokeRect(22,22,798,551);
    ctx.strokeStyle='#c9d6ee';ctx.lineWidth=.8;ctx.strokeRect(31,31,780,533);
    star(76,85,21,pink);star(766,85,21,blue);
    paw(86,508,17,'#e7a9c1'); paw(759,508,17,'#b5c9e8');
    text('THE LITTLE LILA CLUB',421,75,10,blue,'center',ui,'600');
    text('Lila 认定考试 · 合格证书',421,128,34,ink,'center',ui,'700');
    ctx.fillStyle='#eaf1ff';ctx.fillRect(284,147,274,27);
    text('CERTIFICATE OF FRIENDSHIP',421,165,10,blue,'center',ui,'600');
    text('兹 认 定',421,205,12,'#8b8497');
    const name = String(recipient).trim().slice(0, 48) || 'Lila 的好朋友';
    let nameSize=32;
    while(nameSize>14) {ctx.font=`600 ${nameSize}px ${ui}`;if(ctx.measureText(name).width<=610)break;nameSize--;}
    text(name,421,248,nameSize,ink,'center',ui,'600');
    line(190,262,652,262,'#e6c1d1');
    text('已通过 Lila 认定考试，正式成为',421,297,14,'#7d8095');
    text('Lila 认证亲友',421,337,27,pink,'center',ui,'600');
    text(`考试成绩 ${details.score} / 10 分   ·   合格标准 8 / 10 分`,421,366,12,'#7d8095');
    text('颁发日期 / DATE',98,437,9,blue,'left',ui,'600');
    const [year,month,day]=details.issuedOn.split('-');
    text(`${year} 年 ${month} 月 ${day} 日`,98,463,15,ink,'left',ui,'500');
    text('Asia / Tokyo',98,483,8,'#9997aa','left');
    ctx.fillStyle='#ffe9f1';ctx.beginPath();ctx.arc(421,453,48,0,Math.PI*2);ctx.fill();
    ctx.save();ctx.setLineDash([2,3]);ctx.strokeStyle='#d39bb6';ctx.lineWidth=1;ctx.beginPath();ctx.arc(421,453,42,0,Math.PI*2);ctx.stroke();ctx.restore();
    text('LILA APPROVED',421,438,8,'#a76588','center',ui,'600');
    paw(421,459,14,'#c980a1');
    text('BEST FRIEND',421,483,8,'#a76588','center',ui,'600');
    // Handwritten-style Lila signature with its own pawprint and underline.
    text('Lila',635,466,48,ink,'center','"Snell Roundhand", "Apple Chancery", "URW Chancery L", cursive','italic');
    ctx.strokeStyle=ink;ctx.lineWidth=1.3;ctx.beginPath();ctx.moveTo(588,475);ctx.bezierCurveTo(615,480,657,467,681,473);ctx.stroke();
    paw(712,451,19,pink);
    line(574,492,742,492,'#c9d3e6');
    text('Lila · 亲爪认证',658,512,10,'#8a8297');
    text(details.id,421,536,7,'#9997aa');
    text('愿你的每一天，都有毛茸茸的快乐。',421,552,9,'#8b8497');
    return canvas;
}

// Embed the high-resolution certificate image in a real, single-page PDF.
// Byte offsets are computed from encoded bytes, including the binary JPEG stream.
function buildCertificatePdf(jpeg, imageWidth, imageHeight) {
    if (!(jpeg instanceof Uint8Array) || jpeg.length < 4 || jpeg[0] !== 255 || jpeg[1] !== 216) throw new Error('证书图像生成失败。');
    if (![imageWidth,imageHeight].every(n=>Number.isInteger(n)&&n>0)) throw new Error('无效的证书尺寸。');
    const encode = text => new TextEncoder().encode(text);
    const parts=[], offsets=[0]; let length=0;
    const append = bytes => { parts.push(bytes); length+=bytes.length; };
    const object=(id,content)=>{offsets[id]=length;append(encode(`${id} 0 obj\n${content}\nendobj\n`));};
    append(encode('%PDF-1.4\n'));
    object(1,'<< /Type /Catalog /Pages 2 0 R >>');
    object(2,'<< /Type /Pages /Kids [3 0 R] /Count 1 >>');
    object(3,'<< /Type /Page /Parent 2 0 R /MediaBox [0 0 841.89 595.28] /Resources << /XObject << /Certificate 4 0 R >> >> /Contents 5 0 R >>');
    offsets[4]=length;
    append(encode(`4 0 obj\n<< /Type /XObject /Subtype /Image /Width ${imageWidth} /Height ${imageHeight} /ColorSpace /DeviceRGB /BitsPerComponent 8 /Filter /DCTDecode /Length ${jpeg.length} >>\nstream\n`));
    append(jpeg); append(encode('\nendstream\nendobj\n'));
    const commands='q\n841.89 0 0 595.28 0 0 cm\n/Certificate Do\nQ\n';
    object(5,`<< /Length ${encode(commands).length} >>\nstream\n${commands}endstream`);
    const xref=length;
    append(encode(`xref\n0 6\n0000000000 65535 f \n${offsets.slice(1).map(offset=>`${String(offset).padStart(10,'0')} 00000 n \n`).join('')}trailer\n<< /Size 6 /Root 1 0 R >>\nstartxref\n${xref}\n%%EOF\n`));
    const output=new Uint8Array(length);let cursor=0;
    parts.forEach(part=>{output.set(part,cursor);cursor+=part.length;});
    return output;
}

function downloadCertificate(canvas, details) {
    const data=canvas.toDataURL('image/jpeg',.96).split(',')[1];
    const jpeg=Uint8Array.from(atob(data),char=>char.charCodeAt(0));
    const bytes=buildCertificatePdf(jpeg,canvas.width,canvas.height);
    const url=URL.createObjectURL(new Blob([bytes],{type:'application/pdf'}));
    const link=document.createElement('a');link.href=url;link.download=`Lila-certificate-${details.issuedOn}.pdf`;
    document.body.appendChild(link);link.click();link.remove();
    setTimeout(()=>URL.revokeObjectURL(url),60000);
}

const certificateApi={certificateDate,createCertificateDetails,drawCertificate,buildCertificatePdf,downloadCertificate};
if (typeof window !== 'undefined') window.LilaCertificate=Object.freeze(certificateApi);
if (typeof module !== 'undefined' && module.exports) module.exports=certificateApi;
