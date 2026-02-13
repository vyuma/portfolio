export interface Product {
  name: string;
  description: string;
  tags: string[];
  awards: string[];
  githubUrl?: string;
  demoUrl?: string;
}

export const products: Product[] = [
  {
    name: 'SUDO',
    description: 'ゲーミフィケーションを最大限に導入した学習プラットフォーム。JPHACKSとサポーターズ技育博で多数受賞。',
    tags: ['AI', 'Education', 'Gamification'],
    awards: ['JPHACKS Award Day 審査員特別賞', 'JPHACKS innovator認定', 'CyberAgent賞', 'ハウテレビジョン賞', 'JPHACKs パソナ賞', '技育博 WIngArc1st賞', '技育博 CARTA賞'],
  },
  {
    name: 'Physiquest',
    description: 'テキストから物理シミュレーションアニメーションを自動生成するAI教育ツール。物理学の直感的理解を支援する。',
    tags: ['AI', 'Animation', 'Physics', 'Education'],
    awards: ['LINE Yahoo 最優秀賞', 'Happy Hacking賞', '100program Social Impact賞', 'Tongali優秀賞', '海外チャレンジ賞', '野村證券賞', 'Hack with AI 優秀賞', '技育博 DeNA賞', '技育博 CARTA賞'],
    githubUrl: 'https://github.com/vyuma/physiquest_animation_generator',
  },
  {
    name: 'ハッカソン支援エージェント',
    description: 'ハッカソン参加者を支援するAIエージェント。アイデア出しからプロジェクト管理、技術選定までをサポート。',
    tags: ['AI', 'Agent', 'Hackathon'],
    awards: ['100program 優秀AI賞'],
  },
  {
    name: 'MRSTUDY / WebStudy',
    description: 'AIポンコツ受験生に教えて育てる学習アプリケーション。「ラーニング・バイ・ティーチング」を実現。',
    tags: ['AI', 'Education', 'Web'],
    awards: ['Hack1 日テレ賞', '技育博 WIngArc1st賞', '技育博 サイバーエージェント賞'],
  },
  {
    name: 'ねむりチャット',
    description: '睡眠の質を向上させるためのAIチャットアプリケーション。就寝前のリラックスした会話を通じて入眠をサポート。v1, v2を開発。',
    tags: ['AI', 'Healthcare', 'Chat'],
    awards: [],
  },
  {
    name: 'Anima Link / planty',
    description: '植物とコミュニケーションするIoT×AIプロダクト。センサーデータをAIが解釈し、植物の状態を言語化して伝える。メーテレハッカソン二連覇。',
    tags: ['IoT', 'AI', 'Nature', 'SF Prototyping'],
    awards: ['SFプロトタイプハッカソン2024 優勝', 'プログラミング賞', 'SFプロトタイプハッカソン2025 デザイン賞'],
  },
  {
    name: 'Carm Engineer',
    description: 'ITエンジニアの働きすぎをAIで感知し、健康管理を支援するアプリケーション。JPHacks 2023にて開発。',
    tags: ['AI', 'HealthTech', 'Web'],
    awards: ['JPHacks BFTスポンサー賞'],
    githubUrl: 'https://github.com/jphacks/NG_2309',
  },
];
