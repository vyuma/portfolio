interface TimeLine {
    id: number;
    date: Date;
    title: string;
    description: string;
    urlDescription: string[];
    url: string[] ;
    tags: string[];
    results: string;
}
// 参加プログラムなど
export const timeLines: TimeLine[] = [
    // {
    //    id: 1,
    //   date: new Date(2023, 7),
    //    title: 'jackアイデアソン',
    //    description: '曲のサビが次々流れてくるWebアプリケーションを作成しました。',
    //    urlDescription:['url1_name', 'url2_name', 'url3_name'],
    //    url: ['url1', 'url2', 'url3'],
    //    tags: ['project', 'web', ],
    //    results: ''
    // }


    {
        id: 1,
        date: new Date(2023, 7),
        title: ' jackアイデアソン',
        description: '曲のサビが次々流れてくるWebアプリケーションを作成しました。',
        urlDescription:[],
        url: [],
        tags: ['project', 'web', ],
        results: ''
    },
    {
        id: 2,
        date: new Date(2023, 10),
        title: 'JPHacks',
        description: 'タスクに追われがちなITエンジニアのために、ITエンジニアの働きすぎを感知して、働きすぎ度をAIによる判定を行うエージェントを独自実装したアプリケーションを作成しました。',
        urlDescription:["github"],
        url: ["https://github.com/jphacks/NG_2309"],
        tags: ['project', 'web', 'AI'],
        results: 'HackDay BFTスポンサー賞をいただきました。'
    },
    {
        id: 3,
        date: new Date(2024,2),
        title: '100program(第6期)',
        description: '100人で100時間100個のアイデアとプロダクトを作成するプログラムに参加しました。',
        urlDescription:["プロジェクト詳細"],
        url: ['https://100program.jp/'],
        tags: ['project', 'web'],
        results: "「学習アプリ〜教えて育てるポンコツAI受験生〜」と「習慣化促進のための時間記録デバイスと視覚化アプリケーション」を作成し最終発表でファイナリストに選出されました。"
    },
    {
        id:4,
        date: new Date(2024, 5),
        title:"jack Hack",
        description:"詐欺詐欺パニックというヌメロンとタイピングゲームを組み合わせた中毒性の高いシンプルなゲームを作りました",
        urlDescription:["ゲーム"],
        url:["https://jack-app.github.io/jackHack2024_C/public/"],
        tags:["project","web"],
        results:""
    },
    {
        id:5,
        date: new Date(2024,6),
        title:"jack 名大祭アイディアソン",
        description:"名大祭のために神経衰弱のアプリケーションを作成しました",
        urlDescription:["ゲーム","Github"],
        url:["https://vyuma.github.io/sinken_suijyaku_js/","https://github.com/vyuma/sinken_suijyaku_js"],
        tags:["project","web"],
        results:""
    },
    {
        id:6,
        date: new Date(2024,7),
        title:"学生アイディアファクトリー",
        description:"学習のための心理学とAIと教育を合わせたアプリケーションを作成しました。",
        urlDescription:["プロジェクト","発表ポスター"],
        url:["https://si-fa.net/report/report2024/","https://si-fa.net/report-elements/report2024/20240025.pdf"],
        tags:["project","web"],
        results:"サイエンスアゴラにてポスター発表と1分ピッチを行いました。"
    },
    {
        id:7,
        date: new Date(2024,7),
        title:"idea stoa の実験プロジェクトに採択",
        description:"idea stoaにAIと作る勉強法についてのアプリケーションのアイディアで実験に登録しました。",
        urlDescription:["プロジェクト"],
        url:["https://ideastoa.aip.nagoya-u.ac.jp/jikken/project/project-4598/"],
        tags:["project","web"],
        results:""
    },
    {
        id:8,
        date: new Date(2024,7),
        title:"松尾研究室深層学習基礎講座を修了しました",
        description:"松尾研GCI（受講）と深層学習・Deep Learning基礎講座（修了）を同時受講しました",
        urlDescription:["プロジェクト"],
        url:["https://deeplearning.jp/en/lectures/dlb2024/"],
        tags:["project","AI"],
        results:"修了しました"
    },
    {
        id:9,
        date: new Date(2024,8),
        title:"100program 第6期に参加しました",
        description:"100人で100時間100個のアイデアとプロダクトを作成するプログラムに参加しました。",
        urlDescription:["プロジェクト詳細"],
        url: ['https://100program.jp/'],
        tags: ['project', 'web'],
        results: "「学習を支援する心理学アプリケーションの実装を行いました」",
    },
    {
        id:10,
        date:new Date(2024,8),
        title:"全国自主ゼミ合宿の企画・運営・ホスト代表を行いました。",
        description:"全国の自主ゼミの代表者が集まり、合宿を行いました。",
        urlDescription:[],
        url: [],
        tags: ['project', 'web'],
        results: "",
    },
    {
        id:11,
        date: new Date(2024,8),
        title:"技育キャンプに出場しました。",
        description:"技育キャンプで「コミット数で戦うgithub Community」を作成しました。",
        urlDescription:["GitHub"],
        url:["https://github.com/GitHub-Battle-Community/github-battle"],
        tags: ["project","web"],
        results: ""
    },
    {
        id:12,
        date: new Date(2024,9),
        title:"Electric Sheep 全国学生対抗SFプロトタイピング ハッカソン2024 ",
        description:"全国の学生があつまりSFプロトタイピングを行いました。チームワークとマネジメントの重要性を痛感しました。",
        urlDescription:["ハッカソン概要","GitHub"],
        url:["https://www.nagoyatv.com/hackathon-electricsheep/","https://github.com/Shakenokirimi12/mobility-adventure"],
        tags:["hackson","web"],
        results:"優勝・プログラミング賞同時受賞 SFプロトタイピング日本一の称号をいただきました！"
    },
    {
        id:13,
        date:new Date(2024,9),
        title:"メルカリLLM/AIハッカソン(2024)に参加",
        description:"メルカリLLM/AIハッカソン(2024)に参加し、LLMの可能性とエンジニアの未来について考える機会になりました。",
        urlDescription:["プロジェクト","GitHub front","GitHub back"],
        url:["https://careers.mercari.com/mercan/articles/46255/","https://github.com/vyuma/mercari-llm-hack-front","https://github.com/vyuma/mercari-llm-hack-back"],
        tags:["hackson","web"],
        results:""
    },
    {
        id:14,
        date: new Date(2024,9),
        title:"松尾研深層生成モデル講座",
        description:"松尾研深層生成について理解することが出来ました。",
        urlDescription:["講座"],
        url:["https://weblab.t.u-tokyo.ac.jp/lecture/course-list/deep-generative-model/"],
        tags: ["learning","AI"],
        results:"修了しました"
    },
    {
        id:15,
        date: new Date(2024,10),
        title:"Pop up Ideathon",
        description:"ハグをすることにより情報交換するデバイスのアイディアを出しました。",
        urlDescription:["イベント"],
        url: ["https://garage-nagoya.or.jp/event/p20101/"],
        tags: ["project","ideason"],
        results: "ガレージ賞をいただきました"
    },
    {
        id:16,
        date: new Date(2024,12),
        title:"NAGOYA HACK",
        description:"名古屋イノベーターズガレージで行ったハッカソンに出場し人に話しかけやすくなるデバイスを作りました",
        urlDescription:["イベント"],
        url: ["https://garage-challengers-platform.my.canva.site/hack-the-nagoya-hp"],
        tags: ["hackson","web"],
        results: "準優勝しました"
    },
    {
        id:17,
        date:new Date(2024,1),
        title:"Tech GALAアイデアソン/ハッカソンに採択されました",
        description:"自分の財布を他人と共有できるアプリケーションを作りました。",
        urlDescription:["イベント"],
        url:["https://techgala.jp/hackathon/"],
        tags:["hackson"],
        results:""
    },
    {
        id:18,
        date: new Date(2024,2),
        title:"「LINE Yahoo 主催 open hack U」に出場しました",
        description:"Physiquest Animation Generatorというアニメーション生成AIを作成しました。",
        urlDescription:["イベント","GitHub"],
        url:["https://hacku.yahoo.co.jp/hacku2025_nagoya/","https://github.com/vyuma/physiquest_animation_generator"],
        tags: ["hackson","web"],
        results: "最優秀賞・happyhacking賞をいただきました"
    },
    {
        id:19,
        date: new Date(2024,2),
        title:"全国自主ゼミ合宿に参加",
        description:"東北仙台にて全国の自主ゼミの代表者が集まった合宿を行いました。",
        urlDescription:[],
        url: [],
        tags: ["project"],
        results: ""
    },
    {
        id:20,
        date: new Date(2024,2),
        title:"広島にて理論生物学春の学校に参加しました",
        description:"理論生物学とAIの関係モデルの関係について考えるきっかけになりました。",
        urlDescription:["プロジェクト"],
        url:["https://sites.google.com/view/sstb2025"],
        tags: ["project","web"],
        results: ""
    },
    {
        id:21,
        date: new Date(2024,2),
        title:"AVILEN一週間のインターンに参加しました",
        description:"AVILENのインターンに参加し、AIとビジネスについて学びました。一週間のコンサルタントとしての仕事経験からAIとビジネスやサービスの社会実装について考えるきっかけになりました。",
        urlDescription:["会社概要"],
        url:["https://avilen.jp/"],
        tags: ["インターン"],
        results: "個人賞をいただきました"
    }
]