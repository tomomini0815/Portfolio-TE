export interface Project {
  id: string;
  title: string;
  description: string;
  category: string;
  tags: string[];
  images: string[]; // base64 or data URLs
  link?: string;
  createdAt: string;
}

export interface Experience {
  id: string;
  company: string;
  role: string;
  period: string;
  description: string;
  tags: string[];
  image?: string; // base64 or data URL
  createdAt: string;
}

const STORAGE_KEY = 'portfolio_projects';
const EXP_STORAGE_KEY = 'portfolio_experiences';

const defaultProjects: Project[] = [
  {
    id: '1',
    title: 'Taskflow',
    description: '直感的なタスク管理アプリ。ドラッグ&ドロップでタスクを整理し、チームの生産性を向上させます。',
    category: 'モバイルアプリ',
    tags: ['React Native', 'TypeScript', 'Firebase'],
    images: [],
    link: '#',
    createdAt: new Date().toISOString(),
  },
  {
    id: '2',
    title: 'Palette',
    description: 'デザイナー向けカラーパレット生成ツール。AIがブランドに最適な配色を提案します。',
    category: 'Webアプリ',
    tags: ['Next.js', 'AI', 'Tailwind CSS'],
    images: [],
    link: '#',
    createdAt: new Date().toISOString(),
  },
  {
    id: '3',
    title: 'Memowise',
    description: 'スマートなメモアプリ。Markdown対応、タグ管理、全文検索で素早くアクセス。',
    category: 'モバイルアプリ',
    tags: ['Flutter', 'Dart', 'SQLite'],
    images: [],
    link: '#',
    createdAt: new Date().toISOString(),
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
  const newProject: Project = {
    ...project,
    id: crypto.randomUUID(),
    createdAt: new Date().toISOString(),
  };
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

// --- Experience CRUD ---

const defaultExperiences: Experience[] = [
  {
    id: 'exp-1',
    company: 'テックスタートアップ A社',
    role: 'UI/UXデザイナー',
    period: '2022年4月 - 現在',
    description: 'モバイルアプリのUI/UXデザインを担当。ユーザーリサーチからプロトタイピング、デザインシステムの構築まで一貫して対応。',
    tags: ['Figma', 'ユーザーリサーチ', 'デザインシステム'],
    image: '',
    createdAt: new Date().toISOString(),
  },
  {
    id: 'exp-2',
    company: 'Web制作会社 B社',
    role: 'フロントエンドエンジニア',
    period: '2020年1月 - 2022年3月',
    description: 'React/Next.jsを用いたWebアプリケーション開発。パフォーマンス改善やアクセシビリティ対応にも注力。',
    tags: ['React', 'Next.js', 'TypeScript'],
    image: '',
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
  const newExp: Experience = {
    ...exp,
    id: crypto.randomUUID(),
    createdAt: new Date().toISOString(),
  };
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
