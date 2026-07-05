export interface Project {
  id: string;
  title: string;
  titleKatakana?: string;
  description: string;
  category: string;
  tags: string[];
  images: string[];
  thumbnail?: string;
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
  challenges?: string[];
  process?: string[];
  improvements?: string[];
  tags: string[];
  image?: string;
  images?: string[];
  createdAt: string;
}

const STORAGE_KEY = 'portfolio_projects_v23';
const EXP_STORAGE_KEY = 'portfolio_experiences_v28';
const LEGACY_IMPROVEMENT_LEADS: Record<string, string> = {
  'exp-1': '端末別のタスク完了率や操作時間を計測し',
  'exp-2': '現場担当者、管理者、経営層ごとに表示情報を最適化し',
  'exp-3': '在庫過多や欠品リスクを例外表示として強調し',
  'exp-4': '色だけに依存しないラベルやアイコンを追加し',
  'exp-5': '通信切断、測定失敗、端末権限不足などの異常系を網羅し',
};

const defaultProjects: Project[] = [
  {
    id: 'stock-scout-hub',
    title: '株Navi',
    titleKatakana: 'カブナビ',
    description: '日本株の市況、スクリーニング、銘柄チャート、ランキング、決算・IPO、ニュースを横断して確認できる株式投資の総合情報サイトです。',
    category: 'Finance / Stock Market',
    tags: ['React', 'TypeScript', 'Vite', 'Stock Data', 'Dashboard'],
    images: ['/thumbnails/stock-scout-hub_scroll.png'],
    thumbnail: '/thumbnails/stock-scout-hub_top.jpg',
    link: 'https://stock-scout-hub-public.vercel.app/',
    highlights: [
      '主要指数・市況ダッシュボード',
      'トレンド・需給シグナル表示',
      'おすすめ銘柄の比較カード',
      '銘柄チャート・ランキング確認',
      '決算・IPO情報の整理',
      '株式ニュースの集約',
    ],
    createdAt: '2026-07-02T00:00:00.000Z',
  },
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
      'マインドマップ生成で思考を可視化',
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
  const storedProjects: Project[] = JSON.parse(stored);
  const normalizedProjects = storedProjects.map(project => {
    const defaultProject = defaultProjects.find(item => item.id === project.id);
    return defaultProject
      ? {
          ...defaultProject,
          ...project,
          images: project.id === 'stock-scout-hub' ? defaultProject.images : project.images,
          thumbnail: project.id === 'stock-scout-hub' ? defaultProject.thumbnail : project.thumbnail ?? defaultProject.thumbnail,
          link: project.id === 'stock-scout-hub' ? defaultProject.link : project.link,
        }
      : project;
  });
  const missingDefaultProjects = defaultProjects.filter(
    defaultProject => !normalizedProjects.some(project => project.id === defaultProject.id)
  );

  if (missingDefaultProjects.length > 0) {
    const mergedProjects = [...missingDefaultProjects, ...normalizedProjects];
    localStorage.setItem(STORAGE_KEY, JSON.stringify(mergedProjects));
    return mergedProjects;
  }

  localStorage.setItem(STORAGE_KEY, JSON.stringify(normalizedProjects));
  return normalizedProjects;
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
    description: '覆面調査ダッシュボードの改修・新規機能追加・レスポンシブ化を担当。既存のPC向けダッシュボードを分析し、モバイル利用時の課題を整理。情報の階層構造をモバイル向けに再定義し、思考を妨げない直感的なインターフェースを実現。拡張性を担保するデザインシステムを構築し、高精度なプロトタイプでUXの最適解を提示。',
    overview: '既存システムの課題分析からレスポンシブUIへの刷新、一元管理を可能にするデザインシステムの構築。',
    team: '役員:2名、開発リーダー:1名、営業:1名、プログラマー:1名、デザイナー:1名(私)',
    challenges: [
      'PC利用を前提とした情報量と画面構成のため、スマートフォンでは確認や操作がしづらい',
      '機能追加を重ねたことで情報の優先順位が曖昧になり、目的の操作へ到達しにくい',
      '画面ごとにUI表現が異なり、新規機能を追加する際の設計と実装にばらつきが生じている',
    ],
    process: [
      '既存PC画面と利用シーンを棚卸しし、モバイル利用時に優先すべき情報と操作を整理',
      '情報階層と主要導線を再設計し、画面幅ごとのワイヤーフレームを作成',
      'コンポーネント、余白、文字、状態表現を定義してデザインシステムへ統合',
      '高精度プロトタイプで主要タスクを検証し、開発メンバーと仕様を調整',
    ],
    improvements: [
      'PCとモバイルで情報の優先順位を切り替え、どの端末でも主要タスクを完了しやすい構成に改善',
      '調査員の利用状況を踏まえ、移動中や限られた画面幅でも迷いにくい操作導線を設計',
      'デザインルールと共通コンポーネントを整備し、画面追加時にも品質を保てる構成を実現',
    ],
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
    role: 'UI/UX設計、Web/スマホアプリデザイン、プロトタイプ作成、デザインシステム構築',
    period: '2024年6月 - 2025年7月 (約1年2ヵ月)',
    description: '建設業界向け業務システムダッシュボードの全面改修、新規機能制作。ユーザーの行動心理を見える化して課題を洗い出し、学習コストを最小限に抑え、目的達成までのスムーズな導線設計とインタラクションを心がけました。',
    overview: '複雑な情報の可視化による意思決定の迅速化と、導線設計による習熟コストの最小化を両立。',
    team: 'PM:1名、チームリーダー:1名、デザイナー:2名',
    challenges: [
      '扱う情報や業務フローが複雑で、必要な情報を見つけるまでに時間がかかる',
      '現場担当者と管理者で利用目的が異なる一方、同じ画面に多くの機能が集約されている',
      'ITツールに不慣れなユーザーにとって、操作方法や次に行うべき作業が分かりにくい',
    ],
    process: [
      '業務フローと利用者の行動を整理し、判断に時間がかかる箇所や重複操作を特定',
      '重要指標の優先順位を定義し、ダッシュボードの情報設計と導線を再構成',
      'ワイヤーフレームとプロトタイプを用いて、主要業務の操作手順を関係者と確認',
      'ユーザビリティテストの結果を反映し、共通部品をデザインシステムとして整備',
    ],
    improvements: [
      '現場担当者や管理者など、利用目的の違いを整理して重要情報へ素早く到達できる構成に改善',
      '複雑な操作を段階化し、初めて利用するユーザーでも理解しやすいラベルと導線を設計',
      '屋外やタブレットでの利用を考慮し、視認性の高い配色と十分なタップ領域を確保',
    ],
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
    challenges: [
      '在庫、売上、店舗、商品など大量のデータが並び、重要な変化や異常を把握しにくい',
      '画面ごとに色、文字、レイアウトのルールが異なり、操作時の認知負荷が高い',
      '複数条件での比較や絞り込みに手間がかかり、日常的な分析業務を効率化できていない',
    ],
    process: [
      '在庫管理と売上分析の業務を分解し、頻繁に参照する指標と操作を抽出',
      '色、フォント、余白、表やグラフの表現ルールを統一し、視線移動を抑える画面を設計',
      'Figmaで画面遷移と状態変化を確認し、実装可能性をプログラマーと擦り合わせ',
      'QuasarとVue.jsの既存構成に合わせて一部を実装し、表示と操作感を調整',
    ],
    improvements: [
      '在庫過多や欠品リスクを色と表示の強弱で明確にし、優先して確認すべき情報を把握しやすく改善',
      '店舗、商品カテゴリ、期間を横断して比較できる絞り込み導線を整理し、分析操作を効率化',
      '大量の数値を一覧しても視線が迷わないよう、表の余白、列構成、強調ルールを統一',
    ],
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
    challenges: [
      '一般ユーザー、テナント管理者、システム管理者で必要な情報と操作権限が大きく異なる',
      '複数の管理画面で現在の権限や操作対象を把握しにくく、誤操作につながる可能性がある',
      '翻訳結果や管理情報の文字量が言語によって変化し、画面の可読性を保ちにくい',
    ],
    process: [
      '一般ユーザー、テナント管理者、システム管理者の権限と主要タスクを整理',
      '権限ごとの情報量と操作範囲を定義し、誤操作を防ぐナビゲーションを設計',
      '役割を識別できるカラーと共通コンポーネントを設計し、画面間の一貫性を確保',
      'プロトタイプで主要フローを確認し、権限制御と画面状態を開発側と調整',
    ],
    improvements: [
      '色だけに依存せずラベルやアイコンでも役割を判別できるようにし、アクセシビリティを向上',
      '権限変更や削除など影響の大きい操作には確認ステップを設け、誤操作を防止',
      '多言語表示で文字量が変化しても崩れにくいレイアウトとコンポーネント設計を採用',
    ],
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
    challenges: [
      '乗車から測定、判定、エンジン始動までを短時間かつ確実に完了させる必要がある',
      'IoT機器の接続や通信状態が見えにくく、待機中や失敗時にユーザーが状況を判断しづらい',
      '車内の明暗差や片手操作など、通常のスマートフォン利用とは異なる環境への配慮が必要',
    ],
    process: [
      '乗車から検知、判定、エンジン始動までの時系列フローと例外ケースを整理',
      '短時間でも状態を判断できるよう、画面ごとの情報量と操作数を最小化',
      'IoT機器の接続中、測定中、成功、失敗を明確に伝える状態表示を設計',
      'プロトタイプで一連の操作を確認し、通信待ちや再試行時の挙動を開発側と調整',
    ],
    improvements: [
      '通信切断、測定失敗、端末権限不足などの状態ごとに、原因と復帰手順を分かりやすく表示',
      '車内での明暗差や片手操作を考慮し、短時間で認識できる文字サイズと操作領域を設計',
      '接続中や測定中の進行状態を可視化し、待機中の不安を軽減するフィードバックを追加',
    ],
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
  const experiences = JSON.parse(stored) as Experience[];
  const hydrated = experiences.map((experience) => {
    const defaults = defaultExperiences.find((item) => item.id === experience.id);
    if (!defaults) return experience;
    const legacyLead = LEGACY_IMPROVEMENT_LEADS[experience.id];
    const hasGeneratedLegacyCopy = legacyLead
      ? experience.improvements?.[0]?.startsWith(legacyLead)
      : false;
    const description = experience.id === 'exp-1'
      ? experience.description.replace(
          '覆面調査ダッシュボードの全面改修・新規機能追加・レスポンシブ化を担当。',
          '覆面調査ダッシュボードの改修・新規機能追加・レスポンシブ化を担当。',
        )
      : experience.description;
    return {
      ...experience,
      description,
      challenges: experience.challenges ?? defaults.challenges,
      process: experience.process ?? defaults.process,
      improvements: !experience.improvements || hasGeneratedLegacyCopy
        ? defaults.improvements
        : experience.improvements,
    };
  });
  localStorage.setItem(EXP_STORAGE_KEY, JSON.stringify(hydrated));
  return hydrated;
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
