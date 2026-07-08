export interface CareerEntry {
  startDate: Date;
  endDate?: Date;
  title: string;
  organization: string;
  description?: string;
  category: 'education' | 'role' | 'intern' | 'award' | 'certification';
}

export const careers: CareerEntry[] = [
  // ===== Education =====
  {
    startDate: new Date(2022, 3),
    title: '名古屋大学 理学部物理学科 入学',
    organization: '名古屋大学',
    description: '理学部物理学科に入学。教職課程も同時に履修開始。',
    category: 'education',
  },
  {
    startDate: new Date(2025, 4),
    title: '教員実習',
    organization: '名古屋大学',
    description: '教育実習を実施',
    category: 'education',
  },
  {
    startDate: new Date(2025, 7),
    title: '名古屋大学 理学研究科博士前期課程 物理学領域 合格',
    organization: '名古屋大学',
    category: 'education',
  },
  {
    startDate: new Date(2025, 7),
    title: '名古屋大学 医学系研究科修士課程 医科学専攻 合格',
    organization: '名古屋大学',
    category: 'education',
  },
  {
    startDate: new Date(2026, 2),
    title: '総長顕彰 正課外活動への取り組み表彰',
    organization: '名古屋大学',
    description: '正課外活動での顕著な功績を認められ総長より表彰',
    category: 'award',
  },
  {
    startDate: new Date(2026, 3),
    title: '名古屋大学 医学系研究科 入学',
    organization: '名古屋大学',
    description: '医学系研究科修士課程に進学',
    category: 'education',
  },
  {
    startDate: new Date(2026, 4),
    title: 'CIBoG卓越大学院プログラム 採択',
    organization: '名古屋大学',
    description: '卓越大学院プログラムCIBoGに採択',
    category: 'education',
  },

  // ===== Roles & Organizations =====
  {
    startDate: new Date(2022, 5),
    endDate: new Date(2024, 5),
    title: '名大学術サーバー 創設 / 代表・副代表・システムマネージャー歴任',
    organization: '名大学術サーバー',
    description: '自主ゼミサークルを創設し、代表・副代表・システムマネージャーを歴任',
    category: 'role',
  },
  {
    startDate: new Date(2023, 4),
    title: 'Physiquest メンバー / 運営 / 代表',
    organization: 'Physiquest',
    description: '物理学教育Webサイトの運営・代表を務める',
    category: 'role',
  },
  {
    startDate: new Date(2024, 3),
    title: '全国自主ゼミサークル 創設 / 副代表・運営・顧問 歴任',
    organization: '全国自主ゼミサークルの会',
    description: '全国の自主ゼミサークルの代表者によるサークルを創設。副代表兼務。',
    category: 'role',
  },
  {
    startDate: new Date(2024, 3),
    title: 'jack アドバイス係',
    organization: 'jack',
    description: '名大アプリ開発団体jackのアドバイス係に就任',
    category: 'role',
  },
  {
    startDate: new Date(2024, 5),
    endDate: new Date(2024, 11),
    title: 'jack AI Competition for Koi-Koi (jACK) 運営委員長',
    organization: 'jack',
    description: 'AI花札コンペティションの運営委員長を務める',
    category: 'role',
  },
  {
    startDate: new Date(2025, 1),
    endDate: new Date(2025, 5),
    title: 'cAc Coyote-AI-Competition 総合運営委員長',
    organization: 'jack × C0de',
    description: 'コヨーテAIコンペティションの総合運営委員長としてjackとC0deで共催',
    category: 'role',
  },
  {
    startDate: new Date(2025, 3),
    title: '学生アイディアファクトリー 学生委員',
    organization: '学生アイディアファクトリー',
    category: 'role',
  },
  {
    startDate: new Date(2025, 7),
    title: '100program アラムナイメンター',
    organization: '100program',
    description: '100programの後輩をメンタリング',
    category: 'role',
  },
  {
    startDate: new Date(2025, 9),
    title: 'Google AI 公式学生アンバサダー 就任',
    organization: 'Google',
    description: 'Google AI学生アンバサダープログラムに採択。Weekly MVP・Campus MVPに選出',
    category: 'role',
  },
  {
    startDate: new Date(2026, 6),
    title: '学生アイディアファクトリー サマーキャンプ 実行委員',
    organization: '学生アイディアファクトリー',
    category: 'role',
  },

  // ===== Internships =====
  {
    startDate: new Date(2024, 4),
    title: 'アイクリスタル株式会社 長期インターン',
    organization: 'アイクリスタル株式会社',
    description: '機械学習分野での実務経験',
    category: 'intern',
  },
  {
    startDate: new Date(2024, 7),
    title: 'クイックとイノベーション ハッカソンインターン',
    organization: 'クイックとイノベーション',
    category: 'intern',
  },
  {
    startDate: new Date(2025, 2),
    title: 'AVILEN 1週間インターン 個人賞受賞',
    organization: 'AVILEN',
    description: 'AIコンサルタント業務を経験し個人賞を受賞',
    category: 'intern',
  },
  {
    startDate: new Date(2026, 5),
    title: 'GA Technology 1dayインターン',
    organization: 'GA Technology',
    category: 'intern',
  },

  // ===== Certifications =====
  {
    startDate: new Date(2024, 4),
    title: 'キーエンス財団 一時奨学金 採択',
    organization: 'キーエンス財団',
    category: 'certification',
  },
  {
    startDate: new Date(2024, 6),
    title: '松尾研究室 深層学習基礎講座 修了',
    organization: '東京大学 松尾研究室',
    description: 'GCI受講と深層学習基礎講座を同時に修了',
    category: 'certification',
  },
  {
    startDate: new Date(2024, 8),
    title: '松尾研究室 深層生成AI講座 修了',
    organization: '東京大学 松尾研究室',
    category: 'certification',
  },
  {
    startDate: new Date(2025, 2),
    title: '松尾研 GCI 修了',
    organization: '東京大学 松尾研究室',
    category: 'certification',
  },
  {
    startDate: new Date(2025, 6),
    title: 'Tongali Lean Launch Pad 採択・修了',
    organization: 'Tongali',
    category: 'certification',
  },
  {
    startDate: new Date(2025, 6),
    title: 'Glow Tech Nagoya 採択・修了',
    organization: 'Glow Tech Nagoya',
    category: 'certification',
  },
  {
    startDate: new Date(2025, 7),
    title: 'Aichi Startup Battle 2025 採択・修了',
    organization: 'Aichi Startup Battle',
    category: 'certification',
  },
  {
    startDate: new Date(2026, 2),
    title: '高等学校教諭一種免許状 取得',
    organization: '名古屋大学',
    description: '教職課程を修了し免許状を取得',
    category: 'certification',
  },
  {
    startDate: new Date(2026, 5),
    title: 'JStarX スタンフォードコース 国内プログラム採択',
    organization: 'JStarX',
    category: 'certification',
  },

  // ===== Major Awards =====
  {
    startDate: new Date(2024, 8),
    title: 'SFプロトタイプハッカソン2024 優勝・プログラミング賞',
    organization: 'Electric Sheep',
    description: '全国学生対抗ハッカソンで優勝・プログラミング賞を同時受賞',
    category: 'award',
  },
  {
    startDate: new Date(2025, 1),
    title: 'LINE Yahoo open hack U 最優秀賞・Happy Hacking賞',
    organization: 'LINE Yahoo',
    description: 'Physiquestで最優秀賞とHappy Hacking賞をW受賞',
    category: 'award',
  },
  {
    startDate: new Date(2025, 10),
    title: 'JPHACKS Award Day 審査員特別賞 / innovator認定 / CyberAgent賞 / ハウテレビジョン賞 4冠',
    organization: 'JPHACKS',
    description: 'SUDOでJPHACKS Award Dayにて4冠達成',
    category: 'award',
  },
  {
    startDate: new Date(2025, 10),
    title: 'Tongali アイディアピッチ2025 決勝 3冠',
    organization: 'Tongali',
    description: 'tongali優秀賞・海外チャレンジ賞・野村證券賞の3冠',
    category: 'award',
  },
  {
    startDate: new Date(2026, 4),
    title: 'Hack1グランプリ 最優秀賞・オーディエンス賞 2冠',
    organization: 'Hack1グランプリ',
    category: 'award',
  },
  {
    startDate: new Date(2026, 5),
    title: '未踏アドバンスト 採択',
    organization: 'IPA（情報処理推進機構）',
    description: '書面審査・二次面接を経て未踏アドバンスト事業に採択',
    category: 'award',
  },
  {
    startDate: new Date(2026, 6),
    title: 'IVS SPIKATHON 優勝',
    organization: 'IVS',
    description: 'IVS 2026にてSPIKATHON優勝',
    category: 'award',
  },
];
