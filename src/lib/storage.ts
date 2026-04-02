export interface Project {
  id: string;
  title: string;
  titleKatakana?: string;
  description: string;
  category: string;
  tags: string[];
  images: string[];
  link?: string;
  demoVideo?: string;
  highlights?: string[];
  createdAt: string;
}

export interface Experience {
  id: string;
  company: string;
  role: string;
  period: string;
  description: string;
  overview?: string;
  team?: string;
  tags: string[];
  image?: string;
  images?: string[];
  createdAt: string;
}

const STORAGE_KEY = 'portfolio_projects_v22';
const EXP_STORAGE_KEY = 'portfolio_experiences_v26';

const defaultProjects: Project[] = [
  {
    id: 'ainance',
    title: 'Ainance',
    titleKatakana: 'アイナンス',
    description: 'AI搭載の次世代経理プラットフォーム。レシートのAI読み取りから請求書作成、経営分析まで、すべての経理業務を効率化します。',
    category: 'SaaS / Fintech',
    tags: ['React', 'TypeScript', 'Supabase', 'Gemini AI', 'Vite'],
    images: ['/thumbnails/ainance_full_scroll.png'],
    link: 'https://ainance.jp',
    demoVideo: '/videos/ainance-demo.webp',
    highlights: [
      'レシートAI自動読み取り（OCR）',
      'AI請求書・見積書作成',
      '収支・経営分析ダッシュボード',
      '確定申告サポート（青色/白色）',
      '助成金マッチングAI',
      '音声・チャット経理入力',
    ],
    createdAt: '2025-06-01T00:00:00.000Z',
  },
  {
    id: 'journify',
    title: 'Journify',
    titleKatakana: 'ジャーニファイ',
    description: '書く瞑想と音声ジャーナルを融合したパーソナル成長プラットフォーム。AIがあなたの感情パターンを分析し、思考を成長の糧に変えます。',
    category: 'Wellness / Productivity',
    tags: ['React', 'TypeScript', 'Supabase', 'Gemini AI', 'Speech API'],
    images: ['/thumbnails/journify_full_scroll.png'],
    link: 'https://myjournifyapp.com',
    demoVideo: '/videos/journify-demo.webp',
    highlights: [
      'リッチテキスト & 音声ジャーナル',
      'AI感情パターン分析',
      'マインドマップ自動生成',
      '目標・タスク・プロジェクト管理',
      'ガントチャート風タイムラインビュー',
      'ビジョンボード & 未来への手紙',
    ],
    createdAt: '2025-04-01T00:00:00.000Z',
  },
  {
    id: 'lifebridge',
    title: 'LifeBridge',
    titleKatakana: 'ライフブリッジ',
    description: '結婚、出産、転職、引越し…人生の大きな変化に必要な手続きをAIが最適な順序でナビゲート。給付金を逃さず、スムーズに新生活をスタート。',
    category: 'Life Support / AI',
    tags: ['React', 'TypeScript', 'Supabase', 'Gemini AI', 'Three.js'],
    images: ['/thumbnails/lifebridge_full_dashboard.png'],
    link: 'https://lifebridgeapp.jp',
    demoVideo: '/videos/lifebridge-demo.webp',
    highlights: [
      'ライフイベント手続きロードマップ',
      '給付金シミュレーション',
      '手続きリマインダー通知',
      'AIコンシェルジュ（24/365チャット）',
      '11カテゴリ対応（結婚・出産・転職等）',
      '行政手続きの最適順序提案',
    ],
    createdAt: '2025-08-01T00:00:00.000Z',
  },
  {
    id: 'melodymuse',
    title: 'Melody Muse',
    titleKatakana: 'メロディミューズ',
    description: 'AIが歌詞とスタイルプロンプトを生成する音楽クリエイター向けツール。バズり予測スコアで市場性を分析し、Suno/Udoへの最適なプロンプトを出力。',
    category: 'Creative / Music AI',
    tags: ['React', 'TypeScript', 'Turso', 'Gemini AI', 'Web Audio API', 'Suno'],
    images: ['/thumbnails/melodymuse.png?v=4', '/thumbnails/melodymuse_2.png?v=4', '/thumbnails/melodymuse_3.png?v=4', '/thumbnails/melodymuse_4.png?v=4'],
    link: 'https://melody-muse-neon.vercel.app/',
    demoVideo: '/videos/melodymuse-demo.webp',
    highlights: [
      '24+ジャンル対応プロンプト生成',
      'バズり予測スコア算出',
      'アーティストスタイルプリセット',
      'Audio Analysis Studio搭載',
      'Suno/Udio/Mureka連携',
      'テンポ・ムード・テーマカスタマイズ',
    ],
    createdAt: '2025-10-01T00:00:00.000Z',
  },
];

export function getProjects(): Project[] {
  const stored = localStorage.getItem(STORAGE_KEY);
  if (!stored) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(defaultProjects));
    return defaultProjects;
  }
  return JSON.parse(stored);
}

export function saveProjects(projects: Project[]): void {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(projects));
}

export function addProject(project: Omit<Project, 'id' | 'createdAt'>): Project {
  const projects = getProjects();
  const newProject: Project = { ...project, id: crypto.randomUUID(), createdAt: new Date().toISOString() };
  projects.unshift(newProject);
  saveProjects(projects);
  return newProject;
}

export function updateProject(id: string, updates: Partial<Project>): void {
  const projects = getProjects();
  const idx = projects.findIndex(p => p.id === id);
  if (idx !== -1) {
    projects[idx] = { ...projects[idx], ...updates };
    saveProjects(projects);
  }
}

export function deleteProject(id: string): void {
  const projects = getProjects().filter(p => p.id !== id);
  saveProjects(projects);
}

const defaultExperiences: Experience[] = [
  {
    id: 'exp-1',
    company: '覆面調査ダッシュボードのレスポンシブ化',
    role: 'UI/UX設計、Web/スマホアプリデザイン、デザインシステム構築、プロトタイプ作成',
    period: '2025年8月 - 2026年3月 (約8ヵ月)',
    description: '覆面調査ダッシュボードの全面改修・新規機能追加・レスポンシブ化を担当。既存のPC向けダッシュボードを分析し、モバイル利用時の課題を整理。ユーザーが直感的に操作できるよう、プライバシーや情報の優先度を考慮したUIプロトタイプとデザインシステムを構築。',
    overview: '既存システムの課題分析からレスポンシブUIへの刷新、一元管理を可能にするデザインシステムの構築。',
    team: '役員:2名、開発リーダー:1名、営業:1名、プログラマー:1名、デザイナー:1名(私)',
    tags: ['Figma', 'UI/UX設計', 'デザインシステム', 'プロトタイプ作成', 'レスポンシブ'],
    images: [
      '/experiences/projects/project1_1.png',
      '/experiences/projects/project1_2.png',
      '/experiences/projects/project1_3.png',
      '/experiences/projects/project1_4.png',
      '/experiences/projects/project1_5.png'
    ],
    createdAt: new Date().toISOString(),
  },
  {
    id: 'exp-2',
    company: '建設業界向け SaaS のダッシュボード',
    role: 'UI/UX設計、Web/スマホアプリデザイン、プロトタイプ作成',
    period: '2024年6月 - 2025年7月 (約1年2ヵ月)',
    description: '建設業界向け業務システムダッシュボードの全面改修、新規機能制作。ユーザーの行動心理を見える化して課題を洗い出し、学習コストを最小限に抑え、目的達成までのスムーズな導線設計とインタラクションを心がけました。',
    overview: '複雑な情報の可視化による意思決定の迅速化と、導線設計による習熟コストの最小化を両立。',
    team: 'PDM:1名、チームリーダー:1名、デザイナー:2名',
    tags: ['Figma', 'UXリサーチ', 'ユーザビリティテスト', 'Backlog', 'プロトタイプ作成', 'デザインシステム構築'],
    images: [
      '/experiences/projects/project2_4.png',
      '/experiences/projects/project2_1.png',
      '/experiences/projects/project2_2.png',
      '/experiences/projects/project2_3.png'
    ],
    createdAt: new Date().toISOString(),
  },
  {
    id: 'exp-3',
    company: 'アパレル企業のダッシュボード',
    role: 'UI/UX設計、WEBアプリデザイン、一部コーディング',
    period: '2021年 - 2024年 (約1年6ヵ月)',
    description: 'アパレル企業のダッシュボード改修と新規機能制作を担当。在庫管理や売上分析など情報量が多いため、色・フォント・レイアウトを統一し、無駄のないわかりやすい導線になるよう一貫性のあるシンプルなUIを設計しました。',
    overview: '膨大な在庫・売上データの整理と、直感的な分析をサポートするシンプルかつ一貫したUI設計。',
    team: '開発会社社長:1名、デザイナー:1名(私)、プログラマー:2名',
    tags: ['Figma', 'Quasar', 'Vue.js', 'UI設計'],
    images: [
      '/experiences/projects/project3_1.png',
      '/experiences/projects/project3_2.png'
    ],
    createdAt: new Date().toISOString(),
  },
  {
    id: 'exp-4',
    company: '翻訳アプリのユーザー・テナント・システムダッシュボード',
    role: 'UI/UX設計、デザイン、プロトタイプ作成',
    period: '2022年 - 2023年 (約1年)',
    description: '翻訳アプリの一般ユーザー向け新機能追加、テナント管理、システム管理ダッシュボードを制作。各権限と用途に合わせたカラー設計を導入し、視認性の高いUIと迷いなく操作できるUX設計にこだわりました。',
    overview: '3つの異なるユーザー権限に最適化した情報設計と、ミスを防ぐ明快なアクセシビリティ対応。',
    team: '開発会社社長:1名、デザイナー:1名(私)、プログラマー:2名',
    tags: ['Figma', 'デザインシステム', 'アクセシビリティ'],
    images: [
      '/experiences/projects/project4_1.png',
      '/experiences/projects/project4_2.png'
    ],
    createdAt: new Date().toISOString(),
  },
  {
    id: 'exp-5',
    company: '安全運転支援サービスのスマホアプリ・ダッシュボード',
    role: 'UI/UX設計、デザイン、プロトタイプ作成',
    period: '2021年 - (約3ヵ月)',
    description: '安全運転支援サービス（自動制御アプリ）のスマホ画面およびダッシュボードの新機能追加デザイン。アルコール検知器との連動で、限られた時間にスムーズにエンジンが掛けられるよう、IoTと連携した直感的なUI/UXを設計しました。',
    overview: 'IoTデバイスとスマホアプリのシームレスな体験設計。限られた時間で確実な操作を可能にする UX。',
    team: '開発会社社長:1名、デザイナー:1名(私)、プログラマー:2名',
    tags: ['Figma', 'スマホアプリUI', 'IoT連携'],
    images: [
      '/experiences/projects/project5_1.png',
      '/experiences/projects/project5_2.png'
    ],
    createdAt: new Date().toISOString(),
  },
];

export function getExperiences(): Experience[] {
  const stored = localStorage.getItem(EXP_STORAGE_KEY);
  if (!stored) {
    localStorage.setItem(EXP_STORAGE_KEY, JSON.stringify(defaultExperiences));
    return defaultExperiences;
  }
  return JSON.parse(stored);
}

export function saveExperiences(experiences: Experience[]): void {
  localStorage.setItem(EXP_STORAGE_KEY, JSON.stringify(experiences));
}

export function addExperience(exp: Omit<Experience, 'id' | 'createdAt'>): Experience {
  const experiences = getExperiences();
  const newExp: Experience = { ...exp, id: crypto.randomUUID(), createdAt: new Date().toISOString() };
  experiences.unshift(newExp);
  saveExperiences(experiences);
  return newExp;
}

export function updateExperience(id: string, updates: Partial<Experience>): void {
  const experiences = getExperiences();
  const idx = experiences.findIndex(e => e.id === id);
  if (idx !== -1) {
    experiences[idx] = { ...experiences[idx], ...updates };
    saveExperiences(experiences);
  }
}

export function deleteExperience(id: string): void {
  const experiences = getExperiences().filter(e => e.id !== id);
  saveExperiences(experiences);
}

export function fileToBase64(file: File): Promise<string> {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => resolve(reader.result as string);
    reader.onerror = reject;
    reader.readAsDataURL(file);
  });
}
