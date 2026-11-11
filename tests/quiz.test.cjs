const {test} = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const vm = require('node:vm');
const source = fs.readFileSync(require('node:path').join(__dirname, '../quiz.js'), 'utf8').split('const quizRoot =')[0];
const quiz = vm.runInNewContext(source + '\n({quizQuestions, drawQuizQuestions, gradeQuiz})');

test('expanded bank has at least 58 unique questions with valid options and answers', () => {
    assert.ok(quiz.quizQuestions.length >= 58);
    assert.equal(new Set(quiz.quizQuestions.map(q => q.question)).size, quiz.quizQuestions.length);
    for (const q of quiz.quizQuestions) {
        assert.equal(q.options.length, 4);
        assert.equal(new Set(q.options).size, 4);
        assert.ok(Number.isInteger(q.answer) && q.answer >= 0 && q.answer < 4);
        assert.ok(q.explanation.length > 0);
    }
});

test('draws 10 different questions, shuffles options without changing the correct text, and preserves the bank', () => {
    const original = JSON.stringify(quiz.quizQuestions);
    const seen = new Set();
    for (let draw = 0; draw < 50; draw++) {
        const questions = quiz.drawQuizQuestions();
        assert.equal(questions.length, 10);
        assert.equal(new Set(questions.map(q => q.id)).size, 10);
        seen.add(questions.map(q => q.id).join(','));
        questions.forEach(q => {
            const bankQuestion = quiz.quizQuestions[q.id];
            assert.equal(q.options[q.answer], bankQuestion.options[bankQuestion.answer]);
            assert.deepEqual([...q.options].sort(), [...bankQuestion.options].sort());
        });
    }
    assert.ok(seen.size > 1);
    assert.equal(JSON.stringify(quiz.quizQuestions), original);
});

test('each question is worth 1 point and exactly 8 is the passing boundary', () => {
    const questions = quiz.drawQuizQuestions();
    for (const expected of [0, 7, 8, 10]) {
        const answers = questions.map((q, i) => i < expected ? q.answer : (q.answer + 1) % 4);
        const result = quiz.gradeQuiz(questions, answers);
        assert.equal(result.score, expected);
        assert.equal(result.passed, expected >= 8);
    }
    assert.equal(quiz.gradeQuiz(questions, Array(10).fill(null)).score, 0);
});

test('0–3 is angry, 4–7 is encouraging, and 8+ is passed', () => {
    const feedback = vm.runInNewContext(source + '\ngetQuizFeedback');
    for(const score of [0,1,2,3]) {
        assert.equal(feedback(score).className,'angry');
        assert.match(feedback(score).title,/Lila 生气/);
    }
    for(const score of [4,5,6,7]) assert.equal(feedback(score).className,'try-again');
    for(const score of [8,9,10]) assert.equal(feedback(score).className,'passed');
});
