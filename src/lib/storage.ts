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

const STORAGE_KEY = 'portfolio_projects';

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

export function fileToBase64(file: File): Promise<string> {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => resolve(reader.result as string);
    reader.onerror = reject;
    reader.readAsDataURL(file);
  });
}
