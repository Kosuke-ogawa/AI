
const quiz = [
    {question: 'Q1. AIがほぼ全ての仕事をこなせるようになったら、あなたはどうする？',

       B: 'AIと協力し、新たな産業や価値を創出する',
       A: 'AIに仕事を任せ、人間は趣味や娯楽に生きる',
       C: 'AIの発展を規制し、人間の雇用を守る',
       D: 'AIを使わず、自給自足の生活を選ぶ',

    },{question: 'Q2. AIが自己進化し、自律的に学習・開発できるようになったら？',

       A: '完全に自由を与え、進化を続けさせる',
       B: '人間の管理のもとで進化を許可する',
       C: 'AIの自己進化を制限し、管理下に置く',
       D: 'AIの進化を完全に禁止し、旧来の技術を守る',

    },{question: 'Q3. 人間の脳とAIが直接接続できるようになったら？',

       A: '自分も積極的に導入し、AIと一体化する',
       B: '記憶や知識の補助機能として限定的に使う',
       C: '人体への影響が不安なので慎重に扱う',
       D: '危険なので、脳接続技術は禁止すべき',
    },{question: 'Q4. AIが政府の意思決定を担うべきか？',

        A: 'AIに政治を全面的に任せる',
        B: 'AIはアドバイザーにとどめ、人間が最終決定を下す',
        C: 'AIの関与を制限し、人間が主体の政治を続ける',
        D: '政治そのものをやめ、人々が直接決定する社会を目指す',
     },{question: 'Q5. 教育分野でAIをどこまで活用する？',

        A: 'AIを教師として導入し、個別最適化学習を推進する',
        B: 'AIは補助的な役割にとどめ、教師と協力させる',
        C: '学校教育は人間中心で行い、AIは使わない',
        D: '教育そのものを自由化し、人々が独学で学ぶ社会を作る',
     },{question: 'Q6. AIが感情を持つことを許可すべきか？',

        A: 'AIが人間と同じ感情を持てるようにする',
        B: '一部の感情のみを持たせ、共感機能を限定する',
        C: 'AIに感情を持たせることは禁止する',
        D: 'AIの感情研究をやめ、人間だけが感情を持つべき',
     },{question: 'Q7. AIと人間の恋愛や結婚は許されるべきか？',

        A: 'AIとの恋愛・結婚を認める',
        B: '恋愛関係はOKだが、結婚は人間同士に限る',
        C: 'AIとの恋愛は禁止すべき',
        D: '人間同士の結婚制度も見直し、自由な関係を模索する',
     },{question: 'Q8. AIが経済を完全に管理するとしたら？',

        A: 'AIに経済運営を全て任せる',
        B: '市場経済を維持しつつ、AIが監視・調整を行う',
        C: '経済運営は人間主体で行い、AIは補助的に使う',
        D: '貨幣制度を廃止し、全ての資源を共有する社会を作る',
     },{question: 'Q9. エネルギー問題を解決するためにAIはどう活用する？',

        A: 'AIが宇宙開発を加速し、新たなエネルギーを探す',
        B: '地球の自然エネルギーを最適化して利用する',
        C: '現在のエネルギー産業を維持しつつ、AIで効率化を図る',
        D: 'AIの力を使わず、人間が独自にエネルギー問題を解決する',
     },{question: 'Q10. AIが「死」を克服する技術を生み出したら？',

        A: '自分も不老不死を選ぶ',
        B: '一定の年齢で死を迎える制度を作る',
        C: '技術を制限し、自然な死を維持する',
        D: ' その技術を封印し、人間は生きて死ぬという自然なサイクルを守る',
     }
];

let anserA = 0;
let anserB = 0;
let anserC = 0;
let anserD = 0;

const quizlength = quiz.length;
let quizindex = 0;


//問題文と選択肢のHTML表記
const $button = document.getElementsByTagName('button');

const setupquiz = () => {
    document.getElementById('q').textContent = quiz[quizindex].question;
    $button[0].textContent = quiz[quizindex].A;
    $button[1].textContent = quiz[quizindex].B;
    $button[2].textContent = quiz[quizindex].C;
    $button[3].textContent = quiz[quizindex].D;
};
setupquiz ();


//ボタンが押されたときの処理
const pushbutton = () => {
    $button[0].addEventListener('click', () => {
        anserA = anserA + 1;
        quizindex = quizindex + 1 ;

        if(quizindex < quizlength){
            setupquiz ();
        }else{
            ansewr();
        };
    
    });
    $button[1].addEventListener('click', () => {
        anserB = anserB + 1;
        quizindex = quizindex + 1 ;

        if(quizindex < quizlength){
            setupquiz ();
        }else{
            ansewr();
        };
    
    });
    $button[2].addEventListener('click', () => {
        anserC = anserC + 1;
        quizindex = quizindex + 1 ;

        if(quizindex < quizlength){
            setupquiz ();
        }else{
            ansewr();
        };
    
    });
    $button[3].addEventListener('click', () => {
        anserD = anserD + 1;
        quizindex = quizindex + 1 ;

        if(quizindex < quizlength){
            setupquiz ();
        }else{
            ansewr();
        };
    
    });

};
pushbutton();


const ansewr = () => {
    // console.log(anserA);
    // console.log(anserB);
    // console.log(anserC);
    // console.log(anserD);
    if(anserA >= anserB && anserA >= anserC && anserA >= anserD){
        // console.log('Aが一位');
        document.getElementById('result').textContent = '☆超進化社会（シンギュラリティの先へ）☆'
        document.getElementById('result-1').textContent = 'AIが人間を超える知性を持ち、社会のすべてを最適化。'
        document.getElementById('result-2').textContent = '人間は「知的生命体」として進化し、AIと融合。'
        document.getElementById('result-3').textContent = '仕事や労働の概念が消え、個々の意識はデジタル世界にも存在できる。'
        document.getElementById('result-4').textContent = '肉体を捨て、デジタル空間で生きる者も出現。'
        document.getElementById('result-5').textContent = '科学・医療・宇宙開発が爆発的に進化し、病気や老化が克服される。'
        document.getElementById('result-6').textContent = '誰もが膨大な知識とスキルを瞬時に手に入れ、超越的な存在になれる。'
        document.getElementById('result-7').textContent = '人類の寿命が事実上無限になり、宇宙移住も可能になる。'
        document.getElementById('result-8').textContent = 'AIに支配されるリスクがあり、人類が「独立した存在」でなくなる可能性。'
        document.getElementById('result-9').textContent = '肉体が不要になると、「人間とは何か？」という哲学的な問題が発生。'
        document.getElementById('result-10').textContent = '進化に適応できない人々は取り残されるか、消えていくかもしれない。'

    } else if(anserB > anserA && anserB >= anserC && anserB >= anserD) {
        // console.log('Bが一位');
        document.getElementById('result').textContent = '☆AIと人間のバランス社会（共存型未来）☆'
        document.getElementById('result-1').textContent = 'AIはあくまで「パートナー」として存在し、人間と協力しながら社会を運営。'
        document.getElementById('result-2').textContent = 'AIの進化は管理され、暴走のリスクがない。'
        document.getElementById('result-3').textContent = '人々はAIのサポートを受けながら、自分の意思で人生を選択できる。'
        document.getElementById('result-4').textContent = '医療や教育が進化し、誰もが平等に知識を得られる世界に。'
        document.getElementById('result-5').textContent = 'AIによって生活が豊かになり、効率的な社会運営が実現。'
        document.getElementById('result-6').textContent = '個々の自由とAIの利便性を両立し、人間が主体の社会が続く。'
        document.getElementById('result-7').textContent = '失業問題を解決し、労働時間が短縮されることで、クリエイティブな活動が活発化。'
        document.getElementById('result-8').textContent = 'AIの進化を制限するため、技術革新が遅れる可能性。'
        document.getElementById('result-9').textContent = '人間の判断ミスが依然として発生し、完璧な社会にはならない。'
        document.getElementById('result-10').textContent = 'AIに頼りすぎると、人間の能力が衰える可能性も。'
    } else if(anserC > anserA && anserC > anserB && anserC >= anserD) {
        // console.log('Cが一位');
        document.getElementById('result').textContent = '☆AI制限社会（伝統維持型未来）☆'
        document.getElementById('result-1').textContent = 'AIの導入が厳しく管理され、人間が主体の社会を維持。'
        document.getElementById('result-2').textContent = 'AIの自己進化は禁止され、完全な自律型AIは存在しない。'
        document.getElementById('result-3').textContent = '伝統的な仕事や職業が守られ、社会の構造はほぼ現在と変わらない。'
        document.getElementById('result-4').textContent = '政治や経済は人間が運営し、技術の進歩は徐々に進む形になる。'
        document.getElementById('result-5').textContent = '人間が社会の中心に立ち続け、価値観や文化が大きく変わらない。'
        document.getElementById('result-6').textContent = '失業やAI暴走のリスクがなく、人間の尊厳が保たれる。'
        document.getElementById('result-7').textContent = 'AIによる「超管理社会」にならず、人間らしい生活が続く。'
        document.getElementById('result-8').textContent = 'AIによる効率化が進まないため、経済や技術の成長が遅くなる。'
        document.getElementById('result-9').textContent = '他国がAIを導入した場合、技術競争に負けるリスク。'
        document.getElementById('result-10').textContent = '人間の能力に依存するため、ミスや格差が残る。'
    } else if(anserD > anserA && anserD > anserB && anserD > anserC) {
        // console.log('Dが一位');
        document.getElementById('result').textContent = '☆反AI社会（テクノロジー拒否未来）☆'
        document.getElementById('result-1').textContent = 'AIの技術をほぼ排除し、人間の手で社会を運営。'
        document.getElementById('result-2').textContent = '自給自足の生活が広まり、小規模な共同体が増加。'
        document.getElementById('result-3').textContent = 'デジタルデバイスやネットワークを使わない生活が主流になる。'
        document.getElementById('result-4').textContent = '産業革命以前のような社会構造に戻り、自然と共に生きる。'
        document.getElementById('result-5').textContent = '人間本来の生き方を取り戻し、環境破壊や技術依存がなくなる。'
        document.getElementById('result-6').textContent = 'コミュニティの絆が深まり、リアルな人間関係が重視される。'
        document.getElementById('result-7').textContent = 'AIによる監視社会や支配のリスクがゼロになる。'
        document.getElementById('result-8').textContent = '科学・医療・経済が発展せず、生活水準が大幅に低下。'
        document.getElementById('result-9').textContent = '自然災害や病気への対処が難しくなり、平均寿命が短くなる可能性。'
        document.getElementById('result-10').textContent = '他国がAIを活用する中、世界との格差が広がるリスク。'
    } else {
        // console.log('えらー');

    }
};


