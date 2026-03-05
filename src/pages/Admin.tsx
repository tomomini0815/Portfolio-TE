import { useState, useRef } from "react";
import { motion } from "framer-motion";
import { Plus, Trash2, Upload, ArrowLeft, X, Image as ImageIcon } from "lucide-react";
import { Link } from "react-router-dom";
import { getProjects, addProject, updateProject, deleteProject, fileToBase64, type Project } from "@/lib/storage";
import ImageLightbox from "@/components/ImageLightbox";

const AdminPage = () => {
  const [projects, setProjects] = useState<Project[]>(getProjects);
  const [editing, setEditing] = useState<Project | null>(null);
  const [isNew, setIsNew] = useState(false);
  const [lightbox, setLightbox] = useState<{ images: string[]; index: number } | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const refresh = () => setProjects(getProjects());

  const handleNew = () => {
    setEditing({
      id: '',
      title: '',
      description: '',
      category: '',
      tags: [],
      images: [],
      link: '',
      createdAt: '',
    });
    setIsNew(true);
  };

  const handleSave = () => {
    if (!editing) return;
    if (isNew) {
      addProject({
        title: editing.title,
        description: editing.description,
        category: editing.category,
        tags: editing.tags,
        images: editing.images,
        link: editing.link,
      });
    } else {
      updateProject(editing.id, editing);
    }
    setEditing(null);
    setIsNew(false);
    refresh();
  };

  const handleDelete = (id: string) => {
    if (confirm('このプロジェクトを削除しますか？')) {
      deleteProject(id);
      refresh();
    }
  };

  const handleImageUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files || !editing) return;
    const files = Array.from(e.target.files);
    const base64Images = await Promise.all(files.map(fileToBase64));
    setEditing({
      ...editing,
      images: [...editing.images, ...base64Images],
    });
    if (fileInputRef.current) fileInputRef.current.value = '';
  };

  const removeImage = (idx: number) => {
    if (!editing) return;
    setEditing({
      ...editing,
      images: editing.images.filter((_, i) => i !== idx),
    });
  };

  const handleTagInput = (value: string) => {
    if (!editing) return;
    setEditing({
      ...editing,
      tags: value.split(',').map(t => t.trim()).filter(Boolean),
    });
  };

  return (
    <div className="min-h-screen bg-background">
      <div className="container py-8 max-w-4xl">
        <div className="flex items-center justify-between mb-10">
          <div className="flex items-center gap-4">
            <Link to="/" className="p-2 rounded-lg hover:bg-secondary transition-colors">
              <ArrowLeft size={20} />
            </Link>
            <h1 className="font-display text-2xl font-bold">プロジェクト管理</h1>
          </div>
          <button
            onClick={handleNew}
            className="flex items-center gap-2 bg-primary text-primary-foreground px-5 py-2.5 rounded-lg font-display text-sm font-medium hover:opacity-90 transition-opacity"
          >
            <Plus size={16} /> 新規追加
          </button>
        </div>

        {/* Edit Form */}
        {editing && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="surface-elevated rounded-2xl p-6 mb-8"
          >
            <h2 className="font-display font-semibold text-lg mb-6">
              {isNew ? '新規プロジェクト' : 'プロジェクト編集'}
            </h2>

            <div className="space-y-4">
              <div>
                <label className="text-sm font-display text-muted-foreground mb-1.5 block">タイトル</label>
                <input
                  value={editing.title}
                  onChange={e => setEditing({ ...editing, title: e.target.value })}
                  className="w-full bg-secondary rounded-lg px-4 py-2.5 text-sm font-body focus:outline-none focus:ring-2 focus:ring-primary"
                  placeholder="アプリ名"
                />
              </div>

              <div>
                <label className="text-sm font-display text-muted-foreground mb-1.5 block">説明</label>
                <textarea
                  value={editing.description}
                  onChange={e => setEditing({ ...editing, description: e.target.value })}
                  rows={3}
                  className="w-full bg-secondary rounded-lg px-4 py-2.5 text-sm font-body focus:outline-none focus:ring-2 focus:ring-primary resize-none"
                  placeholder="プロジェクトの説明"
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="text-sm font-display text-muted-foreground mb-1.5 block">カテゴリ</label>
                  <input
                    value={editing.category}
                    onChange={e => setEditing({ ...editing, category: e.target.value })}
                    className="w-full bg-secondary rounded-lg px-4 py-2.5 text-sm font-body focus:outline-none focus:ring-2 focus:ring-primary"
                    placeholder="モバイルアプリ"
                  />
                </div>
                <div>
                  <label className="text-sm font-display text-muted-foreground mb-1.5 block">リンク</label>
                  <input
                    value={editing.link || ''}
                    onChange={e => setEditing({ ...editing, link: e.target.value })}
                    className="w-full bg-secondary rounded-lg px-4 py-2.5 text-sm font-body focus:outline-none focus:ring-2 focus:ring-primary"
                    placeholder="https://..."
                  />
                </div>
              </div>

              <div>
                <label className="text-sm font-display text-muted-foreground mb-1.5 block">タグ（カンマ区切り）</label>
                <input
                  value={editing.tags.join(', ')}
                  onChange={e => handleTagInput(e.target.value)}
                  className="w-full bg-secondary rounded-lg px-4 py-2.5 text-sm font-body focus:outline-none focus:ring-2 focus:ring-primary"
                  placeholder="React, TypeScript, Firebase"
                />
              </div>

              {/* Image upload */}
              <div>
                <label className="text-sm font-display text-muted-foreground mb-1.5 block">画像</label>
                <div className="flex flex-wrap gap-3 mb-3">
                  {editing.images.map((img, i) => (
                    <div key={i} className="relative group w-24 h-24 rounded-lg overflow-hidden">
                      <img
                        src={img}
                        alt=""
                        className="w-full h-full object-cover cursor-pointer"
                        onClick={() => setLightbox({ images: editing.images, index: i })}
                      />
                      <button
                        onClick={() => removeImage(i)}
                        className="absolute top-1 right-1 p-1 rounded-full bg-destructive text-destructive-foreground opacity-0 group-hover:opacity-100 transition-opacity"
                      >
                        <X size={12} />
                      </button>
                    </div>
                  ))}

                  <button
                    onClick={() => fileInputRef.current?.click()}
                    className="w-24 h-24 rounded-lg border-2 border-dashed border-border hover:border-primary/50 flex flex-col items-center justify-center gap-1 transition-colors"
                  >
                    <Upload size={18} className="text-muted-foreground" />
                    <span className="text-xs text-muted-foreground">追加</span>
                  </button>
                </div>
                <input
                  ref={fileInputRef}
                  type="file"
                  accept="image/*"
                  multiple
                  onChange={handleImageUpload}
                  className="hidden"
                />
              </div>
            </div>

            <div className="flex gap-3 mt-6">
              <button
                onClick={handleSave}
                disabled={!editing.title}
                className="bg-primary text-primary-foreground px-6 py-2.5 rounded-lg font-display text-sm font-medium hover:opacity-90 transition-opacity disabled:opacity-40"
              >
                保存
              </button>
              <button
                onClick={() => { setEditing(null); setIsNew(false); }}
                className="bg-secondary text-secondary-foreground px-6 py-2.5 rounded-lg font-display text-sm font-medium hover:bg-surface-hover transition-colors"
              >
                キャンセル
              </button>
            </div>
          </motion.div>
        )}

        {/* Project list */}
        <div className="space-y-3">
          {projects.map((project) => (
            <motion.div
              key={project.id}
              layout
              className="surface-elevated rounded-xl p-5 flex items-center justify-between group"
            >
              <div className="flex items-center gap-4 flex-1 min-w-0">
                <div className="w-12 h-12 rounded-lg bg-secondary flex items-center justify-center flex-shrink-0 overflow-hidden">
                  {project.images[0] ? (
                    <img src={project.images[0]} alt="" className="w-full h-full object-cover" />
                  ) : (
                    <ImageIcon size={20} className="text-muted-foreground" />
                  )}
                </div>
                <div className="min-w-0">
                  <h3 className="font-display font-semibold text-sm truncate">{project.title}</h3>
                  <p className="text-xs text-muted-foreground truncate">{project.category} · {project.images.length}枚の画像</p>
                </div>
              </div>
              <div className="flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                <button
                  onClick={() => { setEditing(project); setIsNew(false); }}
                  className="px-3 py-1.5 text-xs font-display rounded-lg bg-secondary hover:bg-surface-hover transition-colors"
                >
                  編集
                </button>
                <button
                  onClick={() => handleDelete(project.id)}
                  className="p-1.5 rounded-lg text-destructive hover:bg-destructive/10 transition-colors"
                >
                  <Trash2 size={14} />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <ImageLightbox
        images={lightbox?.images ?? []}
        currentIndex={lightbox?.index ?? 0}
        isOpen={!!lightbox}
        onClose={() => setLightbox(null)}
      />
    </div>
  );
};

export default AdminPage;
