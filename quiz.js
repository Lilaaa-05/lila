// Questions use the handbook and facts supplied by Lila's owner.
const quizQuestions = [
    ['Lila 是什么犬种？', ['约克夏', '博美', '马尔济斯', '吉娃娃'], 0, 'Lila 是一只约克夏。'],
    ['Lila 的生日是哪一天？', ['2022 年 5 月 25 日', '2022 年 6 月 25 日', '2023 年 5 月 25 日', '2022 年 5 月 5 日'], 0, 'Lila 出生于 2022 年 5 月 25 日。'],
    ['Lila 的星座是？', ['双子座', '金牛座', '狮子座', '白羊座'], 0, '5 月 25 日出生的 Lila 是双子座。'],
    ['Lila 的 MBTI 是？', ['ISFP-A', 'ENTJ-A', 'INTP-T', 'ESFJ-T'], 0, '她的小狗身份卡上写着 ISFP-A。'],
    ['Lila 出生在哪里？', ['神奈川県茅ヶ崎市', '东京都目黑区', '大阪府大阪市', '京都府京都市'], 0, 'Lila 在湘南的神奈川県茅ヶ崎市出生。'],
    ['家族里获得犬舍比赛冠军的是谁？', ['曾外祖父 Keisuke', 'Lila 自己', 'Lila 的姐姐', 'Lila 的妈妈'], 0, '曾外祖父 Keisuke 曾获得犬舍比赛冠军。'],
    ['和 Lila 沟通，主要使用哪种语言的口令？', ['英语', '日语', '法语', '西班牙语'], 0, '她主要听英语口令，例如 Sit、Down、Wait 和 Shake。'],
    ['下面哪组中文最容易让 Lila 有反应？', ['“喂”和“1，2，3”', '“坐下”和“趴下”', '“回来”和“出发”', '“吃饭”和“睡觉”'], 0, '她习惯听中文，但对“喂”和“1，2，3”以外的中文口令通常没有反应。'],
    ['听到哪句日语，Lila 会猜到终于有人有空陪她了？', ['ありがとうございます', 'おはようございます', 'おやすみなさい', 'いただきます'], 0, '主人常在会议结束时说「ありがとうございます」，她就把这句话和互动时间联系起来。'],
    ['对 Lila 来说，House 现在指哪里？', ['放饭碗的地方', '玄关门口', '沙发靠垫上', '外出背包里'], 0, '以前她在笼子里吃饭，所以现在放碗的地方就是 house。'],
    ['哪一项符合 Lila 的性格？', ['喜欢人类，不喜欢狗狗', '喜欢狗狗，不喜欢人类', '喜欢所有狗狗', '完全不喜欢和人互动'], 0, '她喜欢人类，但胆小，也不喜欢狗狗。'],
    ['下面哪一项是 Lila 的优点？', ['不乱叫、不抢东西吃', '最爱和陌生狗社交', '总是主动要求出门', '玩游戏从来不着急'], 0, '指南里的优点包括长得漂亮、喜欢人类、不乱叫、不抢东西吃。'],
    ['Lila 最喜欢哪种游戏组合？', ['扔玩具和拔河', '接飞盘和游泳', '钻隧道和跳高', '捉迷藏和滑板'], 0, '她最爱把玩具捡回来让人继续扔，也喜欢拔河。'],
    ['游戏时间怎么安排更容易让 Lila 理解？', ['尽量固定时间', '每次她盯着人就马上玩', '每天完全随机', '一直玩到深夜'], 0, '尽量固定玩耍时间，玩完放饭或给小零食，让她知道游戏结束。'],
    ['游戏之后，什么安排能帮助 Lila 知道“这轮结束啦”？', ['放饭或给小零食', '马上再开启一轮游戏', '一直拿玩具逗她', '把所有玩具都扔出去'], 0, '固定玩耍时间，结束后放饭或给小零食，是指南中的相处小秘诀。'],
    ['典型的一天里，Lila 大约几点醒来？', ['早上 7 点', '上午 11 点', '下午 2 点', '晚上 9 点'], 0, '大约早上 7 点醒来，她会先安静地观察还在睡觉的主人。'],
    ['早上 8 点左右，她会怎样试着叫主人起床？', ['盯着主人，试图用意念唤醒', '自己出门散步', '把饭碗藏起来', '一直在门口等快递'], 0, '她会盯着主人，偶尔觉得意念不成功还会叹气。'],
    ['早上 8:30 的闹钟响起时，Lila 通常会做什么？', ['冲到主人旁边催起床', '立刻进入深度睡眠', '安静躲进背包', '去窗边看风景'], 0, '闹钟响起后，她会冲到主人身边，催主人快点起床。'],
    ['早餐前，典型的玩耍时间有多久？', ['约 20 分钟', '约 2 分钟', '约 2 小时', '约 5 分钟'], 0, '早上 8:30–8:50 通常先玩 20 分钟，然后吃饭。'],
    ['中午第二次玩耍大约安排在哪个时间段？', ['12:00–12:20', '10:00–10:20', '14:00–14:20', '16:00–16:20'], 0, '中午 12:00–12:20 玩扔玩具、拔河，之后给零食。'],
    ['下午大约几点之后，Lila 会开始大睡特睡？', ['14 点后', '12 点整', '16 点后', '18 点后'], 0, '典型日程里，14 点前浅睡，14 点后进入大睡特睡模式。'],
    ['晚上的第三次玩耍通常持续多久？', ['约 30 分钟', '约 5 分钟', '约 90 分钟', '约 2 小时'], 0, '21:00–21:30 通常玩 30 分钟扔玩具、拔河，之后放饭。'],
    ['Lila 一天通常吃几顿正餐？', ['两顿', '一顿', '三顿', '四顿'], 0, '指南的一日两餐分为早餐和晚餐。'],
    ['指南里，正餐通常安排在什么时间？', ['早上 9 点和晚上 9 点', '早上 7 点和中午 12 点', '中午 12 点和下午 3 点', '下午 3 点和晚上 6 点'], 0, '通常早上 9 点和晚上 9 点放饭，也会根据照护者的时间调整。'],
    ['给零食的日常规则是什么？', ['尽量定时、定量', '只要盯着人就给', '每次路过都给', '完全不需要规律'], 0, '指南强调零食尽量定时定量，例如中午玩完后给。'],
    ['哪一组食物都在 Lila 的三星喜好名单里？', ['煮熟鸡肉和鸡蛋黄', '苹果和蓝莓', '草莓和红薯', '西兰花和苹果'], 0, '煮熟鸡胸肉、鸡腿肉和少量鸡蛋黄都标注为三星喜好。'],
    ['在 Lila 的食物喜好名单里，苹果是几星？', ['一星', '两星', '三星', '没有出现在名单里'], 0, '苹果和蓝莓标为一星，草莓等标为两星。'],
    ['走近熟悉的家附近，Lila 通常会有什么反应？', ['加速往家走', '立刻原地睡觉', '躲进咖啡厅', '一直往相反方向走'], 0, '接近住处时，她会加速拽着人回家，想快点结束散步。'],
    ['Lila 在外面很害怕哪类声音和物体？', ['没熄火的汽车和摩托车', '安静的公园长椅', '没有声音的路牌', '地上的落叶'], 0, '她很怕没熄火的汽车、摩托车，尤其是搬货时的动静。'],
    ['指南提到，Lila 经常去的宠物酒店叫什么？', ['POOCHIES', 'HAPPY PAWS', 'LITTLE HOUSE', 'DOG GARDEN'], 0, '照护备忘里提到她常去的酒店是 POOCHIES。'],
    ['Lila 最喜欢的玩具是哪一个？', ['zeze 熊', '橡胶小鸭', '网球', '绳结玩具'], 0, 'Lila 最喜欢的玩具是 zeze 熊。'],
    ['摸摸 Lila 时，她不喜欢被弄哪个部位？', ['颧骨', '背部', '头顶', '下巴'], 0, '她通常哪里都可以摸，但不喜欢被弄颧骨。'],
    ['哪组地方都是 Lila 喜欢睡觉的位置？', ['自己的小窝和沙发', '玄关地板和浴室', '阳台和门口', '餐桌下面和楼梯'], 0, 'Lila 喜欢在自己的小窝里睡觉，也喜欢睡在沙发上。'],
    ['除了汽车、摩托车和狗狗，Lila 还害怕什么？', ['吸尘器和吹风机', '安静的小窝和沙发', 'zeze 熊和绳结玩具', '饭碗和零食袋'], 0, 'Lila 还害怕吸尘器和吹风机。'],
    ['Lila 做错事被发现时，通常有什么反应？', ['躲起来，避免对视', '主动叼玩具邀请游戏', '跑去饭碗旁讨饭', '兴奋地围着主人转圈'], 0, '做错事被发现时，Lila 通常会躲起来，避免和主人对视。'],
    ['主人回家时，哪组行为符合 Lila 的迎接方式？', ['冲过来迎接，也会叼玩具找主人', '躲起来，一直不肯出来', '躺着等主人过去，从不主动迎接', '只去饭碗旁等着，不和主人互动'], 0, '主人回家时，Lila 会冲过来迎接，也会叼玩具找主人。'],
    ['哪组行为都是 Lila 常用的撒娇方式？', ['用爪子扒拉人、一直盯着人', '叼走拖鞋、躲到门后', '不停转圈、追自己的尾巴', '趴在远处、避免和人对视'], 0, 'Lila 会用爪子扒拉你，也会一直盯着你撒娇。'],
    ['对于响纸玩具、吱吱叫玩具和无声毛绒玩具，Lila 的喜好是？', ['三种都喜欢', '只喜欢有响纸的玩具', '只喜欢按压会吱吱叫的玩具', '只喜欢无声毛绒玩具'], 0, '有响纸、按压会吱吱叫，以及没有声音的毛绒玩具，Lila 都喜欢。'],
    ['哪组姿势都是 Lila 常用的睡姿？', ['蜷成一团、侧躺伸直脚脚', '肚皮朝天、趴在水碗边', '坐着打盹、靠门站着睡', '只会肚皮朝天睡觉'], 0, 'Lila 常蜷成一团睡觉，也会侧躺、伸直脚脚。'],
    ['看到主人拿出外出包，Lila 通常会怎样？', ['主动钻进去', '躲起来，不肯靠近', '只在旁边观察，不进去', '叼着包到处跑'], 0, '看到主人拿出外出包，Lila 通常会主动钻进去。'],
    ['主人吃东西时，Lila 默默看着，通常是在等什么？', ['等主人陪她玩', '等主人分一口食物', '等着抢走桌上的食物', '等主人带她洗澡'], 0, '她会默默看着，但并不想吃，只是在等主人陪她玩。'],
    ['玩具掉到沙发底下时，Lila 通常会怎样？', ['先自己努力扒，拿不到会哼叫', '直接放弃，换个玩具', '从不自己扒，只安静等着', '跑去饭碗旁讨零食'], 0, 'Lila 会先自己努力扒玩具，拿不到时会哼叫。'],
    ['在家被抱起来时，Lila 通常有什么反应？', ['会挣扎', '马上放松睡着', '安静地待着，完全不动', '一直舔主人的脸'], 0, '在家被抱起来时，Lila 通常会挣扎。这里说的是在家时的反应。'],
    ['家里来了陌生客人，Lila 通常会怎样？', ['主动靠近，热情迎接', '一直躲起来，不愿接触', '从远处观察，始终不靠近', '毫不在意，继续睡觉'], 0, '家里来了陌生客人时，Lila 会主动靠近，热情迎接。'],
    ['看到镜子里的自己，Lila 通常会怎样？', ['没什么反应', '凑近看或闻', '对着镜子叫', '躲到主人身后'], 0, 'Lila 看到镜子里的自己，通常没什么反应。'],
    ['梳毛时，Lila 通常是什么反应？', ['不太喜欢，但会配合', '非常享受，主动要求一直梳', '躲开或挣扎，完全不配合', '兴奋地叼来玩具'], 0, 'Lila 不太喜欢梳毛，但会配合。'],
    ['玩到一半，主人突然停下来时，Lila 通常会怎样？', ['哼叫或扒拉主人', '安静地自己玩，不催主人', '立刻去睡觉', '去饭碗旁等吃饭'], 0, '玩到一半突然停下来时，Lila 会哼叫或扒拉主人。'],
    ['坐车时待在包里的 Lila，通常是什么状态？', ['紧张', '放松地睡着', '兴奋地玩玩具', '专心吃零食'], 0, '坐车时，Lila 待在包里会紧张。'],
    ['回家擦脚时，Lila 通常会怎样？', ['配合，让人擦', '一直躲脚，不让碰', '叼着湿巾跑开', '立刻躲进外出包'], 0, '回家擦脚时，Lila 会配合，让人帮她擦脚。'],
    ['收到新玩具时，Lila 通常会先做什么？', ['自己闻闻、咬咬，研究一下', '马上叼给主人，完全不研究', '一直远远躲着，不肯碰', '直接藏起来，再也不玩'], 0, '收到新玩具时，Lila 通常先自己闻闻、咬咬，研究一下。'],
    ['玩拔河时，Lila 通常是什么风格？', ['拼命拽，一定要赢', '经常主动松口，让主人拿走', '不感兴趣，从来不参与', '只在旁边看着玩具'], 0, 'Lila 玩拔河时会拼命拽，一定要赢。'],
    ['主人准备独自出门时，哪组表现符合 Lila 的习惯？', ['回窝或沙发休息，也会躲起来不想出门', '总是跟到门口，坚持要一起走', '主动叼来牵引绳，催主人带她出门', '一直扒门，完全不愿留在家里'], 0, '主人独自出门时，Lila 会回到窝里或沙发上休息，也会躲起来，不想出门。'],
    ['给 Lila 穿衣服时，她通常会怎样？', ['配合，让主人穿', '躲开或挣扎', '穿好后僵住，不想动', '叼着衣服跑开'], 0, '给 Lila 穿衣服时，她通常会配合。'],
    ['主人在家里走来走去时，Lila 通常会怎样？', ['看看主人，但不一定跟着', '每一步都紧紧跟着', '完全不看主人，也不理会', '一直叼玩具拦住去路'], 0, '主人在家里走动时，Lila 会看看，但不一定跟着。'],
    ['听到零食袋的声音，Lila 通常会怎样？', ['马上跑过来', '只在原地盯着，等人拿过去', '没什么反应', '躲起来，不想靠近'], 0, '听到零食袋的声音，Lila 会马上跑过来。'],
    ['听到有人打喷嚏，Lila 通常会怎样？', ['抬头看看，确认发生了什么', '吓一跳，躲开', '完全没反应', '兴奋地叼来玩具'], 0, '听到有人打喷嚏时，Lila 会抬头看看，确认发生了什么。'],
    ['主人打电话或开视频会议时，Lila 通常有什么反应？', ['没什么反应', '凑过来，想参与一下', '拿玩具、哼叫，催主人陪玩', '紧张地躲到门后'], 0, '主人打电话或开视频会议时，Lila 通常没什么反应。'],
    ['Lila 对小毯子通常是什么态度？', ['喜欢趴在上面，但不爱被盖住', '喜欢钻进去，把自己藏起来', '完全不感兴趣，从不靠近', '只喜欢叼着毯子玩拔河'], 0, 'Lila 喜欢趴在小毯子上，但不爱被毯子盖住。']
].map(([question, options, answer, explanation], id) => ({id, question, options, answer, explanation}));

function shuffleQuizItems(items, random = Math.random) {
    const result = [...items];
    for (let i = result.length - 1; i > 0; i--) {
        const j = Math.floor(random() * (i + 1));
        [result[i], result[j]] = [result[j], result[i]];
    }
    return result;
}

function drawQuizQuestions(random = Math.random) {
    return shuffleQuizItems(quizQuestions, random).slice(0, 10).map(question => {
        const options = shuffleQuizItems(question.options.map((text, index) => ({text, index})), random);
        return {...question, options: options.map(option => option.text), answer: options.findIndex(option => option.index === question.answer)};
    });
}

function gradeQuiz(questions, answers) {
    const score = questions.reduce((total, question, index) => total + (answers[index] === question.answer ? 1 : 0), 0);
    return {score, passed: score >= 8};
}

function getQuizFeedback(score) {
    if (score >= 8) return {title: '合格！Lila 认证亲友。', description: '恭喜通过认定考试！你已经很懂这位小朋友啦。', sticker: '✿', className: 'passed'};
    if (score < 4) return {title: 'Lila 生气啦！哼！', description: '你是不是还没认真认识我？小爪爪叉腰！再读读指南，回来哄好我吧。', sticker: '😤', className: 'angry'};
    return {title: '差一点点，再认识我一些。', description: '8 分即可合格。看看下面的解析，下次一定更了解 Lila。', sticker: '♡', className: 'try-again'};
}

const quizRoot = document.querySelector('#quiz-stage');
document.querySelector('#quiz-bank-count').textContent = quizQuestions.length;
let examQuestions = [];
let examAnswers = [];
let examIndex = 0;
let examSubmitted = false;

function startQuiz() {
    examQuestions = drawQuizQuestions();
    examAnswers = Array(10).fill(null);
    examIndex = 0;
    examSubmitted = false;
    renderQuizQuestion();
}

function focusQuizHeading() {
    quizRoot.scrollIntoView({block: 'start', behavior: 'instant'});
    quizRoot.querySelector('[tabindex="-1"]').focus({preventScroll: true});
}

function renderQuizQuestion(message = '') {
    const question = examQuestions[examIndex];
    const answered = examAnswers.filter(answer => answer !== null).length;
    quizRoot.innerHTML = `
        <div class="exam-progress"><span>QUESTION ${String(examIndex + 1).padStart(2, '0')} / 10</span><span>已答 ${answered} / 10</span></div>
        <progress value="${answered}" max="10" aria-label="答题进度">${answered} / 10</progress>
        <nav class="question-jumps" aria-label="选择题目">${examQuestions.map((_, index) => `<button type="button" data-question="${index}" class="${index === examIndex ? 'current' : ''} ${examAnswers[index] !== null ? 'answered' : ''}" ${index === examIndex ? 'aria-current="step"' : ''} aria-label="第 ${index + 1} 题，${examAnswers[index] === null ? '未答' : '已答'}">${index + 1}</button>`).join('')}</nav>
        <form id="exam-form" novalidate>
            <fieldset><legend tabindex="-1">${question.question}</legend>
                <div class="exam-options">${question.options.map((option, index) => `<label class="exam-option"><input type="radio" name="exam-answer" value="${index}" ${examAnswers[examIndex] === index ? 'checked' : ''}><span class="option-letter">${'ABCD'[index]}</span><span>${option}</span></label>`).join('')}</div>
            </fieldset>
            <p class="exam-message" role="status">${message}</p>
            <div class="exam-controls"><button type="button" class="exam-secondary" id="exam-prev" ${examIndex === 0 ? 'disabled' : ''}>← 上一题</button><span>每题 1 分 · 8 分合格</span>${examIndex === 9 ? '<button type="submit" class="primary-btn">交卷，看看成绩 ↗</button>' : '<button type="button" class="primary-btn" id="exam-next">下一题 →</button>'}</div>
        </form>`;
    quizRoot.querySelectorAll('[data-question]').forEach(button => button.addEventListener('click', () => {
        examIndex = Number(button.dataset.question);
        renderQuizQuestion();
    }));
    quizRoot.querySelectorAll('input').forEach(input => input.addEventListener('change', () => {
        examAnswers[examIndex] = Number(input.value);
        // Update only progress so keyboard focus stays on the chosen radio.
        const answered = examAnswers.filter(answer => answer !== null).length;
        quizRoot.querySelector('progress').value = answered;
        quizRoot.querySelector('.exam-progress span:last-child').textContent = `已答 ${answered} / 10`;
        const jump = quizRoot.querySelector(`[data-question="${examIndex}"]`);
        jump.classList.add('answered');
        jump.setAttribute('aria-label', `第 ${examIndex + 1} 题，已答`);
        quizRoot.querySelector('.exam-message').textContent = '';
    }));
    quizRoot.querySelector('#exam-prev').addEventListener('click', () => { if (examIndex > 0) { examIndex--; renderQuizQuestion(); } });
    quizRoot.querySelector('#exam-next')?.addEventListener('click', () => { examIndex++; renderQuizQuestion(); });
    quizRoot.querySelector('form').addEventListener('submit', event => {
        event.preventDefault();
        if (examSubmitted) return;
        const unanswered = examAnswers.filter(answer => answer === null).length;
        if (unanswered) {
            examIndex = examAnswers.indexOf(null);
            renderQuizQuestion(`还有 ${unanswered} 题未作答，已跳转到第一道未答题。`);
            return;
        }
        examSubmitted = true;
        renderQuizResult();
    });
    focusQuizHeading();
}

function renderQuizResult() {
    const {score, passed} = gradeQuiz(examQuestions, examAnswers);
    const feedback = getQuizFeedback(score);
    quizRoot.innerHTML = `
        <div class="exam-result ${feedback.className}">
            <span class="card-label">LILA CERTIFICATION · RESULT</span><span class="result-sticker" aria-hidden="true">${feedback.sticker}</span>
            <h3 tabindex="-1">${feedback.title}</h3>
            <div class="exam-score">${score}<span> / 10 分</span></div>
            <p>${feedback.description}</p>
            <button type="button" class="primary-btn" id="exam-retry">重新随机抽 10 题 ↻</button>
        </div>
        ${passed ? `<section class="certificate-claim" aria-labelledby="certificate-title">
            <div class="certificate-heading"><span class="card-label">A LITTLE CERTIFICATE, SIGNED WITH LOVE</span><h3 id="certificate-title">领取你的亲友证书</h3><p>有 Lila 的签名、专属小爪印，还有今天的日期。</p></div>
            <form id="certificate-form"><label for="certificate-name">证书上的称呼 <span>（选填）</span></label><div class="certificate-input-row"><input id="certificate-name" type="text" maxlength="24" autocomplete="nickname" placeholder="例如：小民叔叔" aria-describedby="certificate-name-hint"><button type="submit" class="primary-btn" id="certificate-download">下载证书 PDF ↓</button></div><p id="certificate-name-hint">留空会写作「Lila 的好朋友」。证书直接下载到你的设备。</p><p id="certificate-status" role="status" aria-live="polite"></p></form>
            <div class="certificate-preview"><canvas id="certificate-preview" role="img" aria-label="合格证书预览，含成绩、日期、Lila 签名和爪印"></canvas></div>
        </section>` : ''}
        <div class="review-heading"><h3>答案与小解析</h3><span>答对 ${score} 题 · 答错 ${10 - score} 题</span></div>
        <div class="exam-review">${examQuestions.map((question, index) => {
            const correct = examAnswers[index] === question.answer;
            return `<details class="review-item ${correct ? 'correct' : 'incorrect'}" ${correct ? '' : 'open'}><summary><span class="review-mark">${correct ? '✓' : '×'}</span><span>${index + 1}. ${question.question}</span><small>${correct ? '答对啦' : '再记一下'}</small></summary><div class="review-answer"><p>你的答案：${question.options[examAnswers[index]]}</p><p><strong>正确答案：${question.options[question.answer]}</strong></p><p>${question.explanation}</p></div></details>`;
        }).join('')}</div>`;
    quizRoot.querySelector('#exam-retry').addEventListener('click', startQuiz);
    if (passed) setupCertificate(score);
    focusQuizHeading();
}

function setupCertificate(score) {
    const canvas = quizRoot.querySelector('#certificate-preview');
    const input = quizRoot.querySelector('#certificate-name');
    const status = quizRoot.querySelector('#certificate-status');
    const downloadButton = quizRoot.querySelector('#certificate-download');
    let details = LilaCertificate.createCertificateDetails(score);
    function updatePreview() {
        // A fresh Tokyo date is used even if the result page stays open overnight.
        if (details.issuedOn !== LilaCertificate.certificateDate()) {
            details = LilaCertificate.createCertificateDetails(score);
        }
        LilaCertificate.drawCertificate(canvas, details, input.value);
    }
    try { updatePreview(); } catch (error) { status.textContent = error.message; }
    input.addEventListener('input', () => {
        status.textContent = '';
        try { updatePreview(); } catch (error) { status.textContent = error.message; }
    });
    quizRoot.querySelector('#certificate-form').addEventListener('submit', async event => {
        event.preventDefault();
        if (downloadButton.disabled) return;
        downloadButton.disabled = true;
        downloadButton.textContent = '正在制作证书…';
        status.textContent = '';
        try {
            await document.fonts.ready;
            updatePreview();
            LilaCertificate.downloadCertificate(canvas, details);
            status.textContent = '证书已准备好下载，请查看浏览器的下载列表。Lila 已经亲爪签好啦！';
        } catch (error) {
            status.textContent = '证书生成失败，请重试，或更换浏览器后再试。';
        } finally {
            downloadButton.disabled = false;
            downloadButton.textContent = '下载证书 PDF ↓';
        }
    });
}

document.querySelector('#exam-start').addEventListener('click', startQuiz);
