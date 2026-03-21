import { useState, useRef } from "react";
import { motion } from "framer-motion";
import { Plus, Trash2, Upload, X, Briefcase } from "lucide-react";
import { getExperiences, addExperience, updateExperience, deleteExperience, fileToBase64, type Experience } from "@/lib/storage";
import ImageLightbox from "@/components/ImageLightbox";

const ExperienceManager = () => {
  const [experiences, setExperiences] = useState<Experience[]>(getExperiences);
  const [editing, setEditing] = useState<Experience | null>(null);
  const [isNew, setIsNew] = useState(false);
  const [lightbox, setLightbox] = useState<{ images: string[]; index: number } | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const refresh = () => setExperiences(getExperiences());

  const handleNew = () => {
    setEditing({
      id: '', company: '', role: '', period: '', description: '', overview: '', team: '', tags: [], image: '', createdAt: '',
    });
    setIsNew(true);
  };

  const handleSave = () => {
    if (!editing) return;
    if (isNew) {
      addExperience({
        company: editing.company, role: editing.role, period: editing.period,
        description: editing.description, overview: editing.overview, team: editing.team, tags: editing.tags, image: editing.image,
      });
    } else {
      updateExperience(editing.id, editing);
    }
    setEditing(null);
    setIsNew(false);
    refresh();
  };

  const handleDelete = (id: string) => {
    if (confirm('この経歴を削除しますか？')) {
      deleteExperience(id);
      refresh();
    }
  };

  const handleImageUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files || !editing) return;
    const file = e.target.files[0];
    const base64 = await fileToBase64(file);
    setEditing({ ...editing, image: base64 });
    if (fileInputRef.current) fileInputRef.current.value = '';
  };

  const handleTagInput = (value: string) => {
    if (!editing) return;
    setEditing({ ...editing, tags: value.split(',').map(t => t.trim()).filter(Boolean) });
  };

  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <h2 className="font-display text-xl font-bold">経歴管理</h2>
        <button
          onClick={handleNew}
          className="flex items-center gap-2 bg-primary text-primary-foreground px-5 py-2.5 rounded-lg font-display text-sm font-medium hover:opacity-90 transition-opacity"
        >
          <Plus size={16} /> 新規追加
        </button>
      </div>

      {editing && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="surface-elevated rounded-2xl p-6 mb-8"
        >
          <h3 className="font-display font-semibold text-lg mb-6">
            {isNew ? '新規経歴' : '経歴編集'}
          </h3>
          <div className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="text-sm font-display text-muted-foreground mb-1.5 block">会社名・クライアント名</label>
                <input
                  value={editing.company}
                  onChange={e => setEditing({ ...editing, company: e.target.value })}
                  className="w-full bg-secondary rounded-lg px-4 py-2.5 text-sm font-body focus:outline-none focus:ring-2 focus:ring-primary"
                  placeholder="株式会社〇〇"
                />
              </div>
              <div>
                <label className="text-sm font-display text-muted-foreground mb-1.5 block">役職・ポジション</label>
                <input
                  value={editing.role}
                  onChange={e => setEditing({ ...editing, role: e.target.value })}
                  className="w-full bg-secondary rounded-lg px-4 py-2.5 text-sm font-body focus:outline-none focus:ring-2 focus:ring-primary"
                  placeholder="UI/UXデザイナー"
                />
              </div>
            </div>

            <div>
              <label className="text-sm font-display text-muted-foreground mb-1.5 block">期間</label>
              <input
                value={editing.period}
                onChange={e => setEditing({ ...editing, period: e.target.value })}
                className="w-full bg-secondary rounded-lg px-4 py-2.5 text-sm font-body focus:outline-none focus:ring-2 focus:ring-primary"
                placeholder="2022年4月 - 2024年3月"
              />
            </div>

            <div>
              <label className="text-sm font-display text-muted-foreground mb-1.5 block">説明</label>
              <textarea
                value={editing.description}
                onChange={e => setEditing({ ...editing, description: e.target.value })}
                rows={3}
                className="w-full bg-secondary rounded-lg px-4 py-2.5 text-sm font-body focus:outline-none focus:ring-2 focus:ring-primary resize-none mb-4"
                placeholder="担当した業務やプロジェクトの説明"
              />
              
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="text-sm font-display text-muted-foreground mb-1.5 block">プロジェクト概要 (PDF用)</label>
                  <textarea
                    value={editing.overview || ''}
                    onChange={e => setEditing({ ...editing, overview: e.target.value })}
                    rows={2}
                    className="w-full bg-secondary rounded-lg px-4 py-2.5 text-sm font-body focus:outline-none focus:ring-2 focus:ring-primary resize-none"
                    placeholder="プロジェクトの概要"
                  />
                </div>
                <div>
                  <label className="text-sm font-display text-muted-foreground mb-1.5 block">制作体制 (PDF用)</label>
                  <textarea
                    value={editing.team || ''}
                    onChange={e => setEditing({ ...editing, team: e.target.value })}
                    rows={2}
                    className="w-full bg-secondary rounded-lg px-4 py-2.5 text-sm font-body focus:outline-none focus:ring-2 focus:ring-primary resize-none"
                    placeholder="制作体制（PDM:1名など）"
                  />
                </div>
              </div>
            </div>

            <div>
              <label className="text-sm font-display text-muted-foreground mb-1.5 block">タグ（カンマ区切り）</label>
              <input
                value={editing.tags.join(', ')}
                onChange={e => handleTagInput(e.target.value)}
                className="w-full bg-secondary rounded-lg px-4 py-2.5 text-sm font-body focus:outline-none focus:ring-2 focus:ring-primary"
                placeholder="Figma, React, ユーザーリサーチ"
              />
            </div>

            <div>
              <label className="text-sm font-display text-muted-foreground mb-1.5 block">画像</label>
              <div className="flex items-center gap-3">
                {editing.image && (
                  <div className="relative group w-24 h-24 rounded-lg overflow-hidden">
                    <img
                      src={editing.image}
                      alt=""
                      className="w-full h-full object-cover cursor-pointer"
                      onClick={() => setLightbox({ images: [editing.image!], index: 0 })}
                    />
                    <button
                      onClick={() => setEditing({ ...editing, image: '' })}
                      className="absolute top-1 right-1 p-1 rounded-full bg-destructive text-destructive-foreground opacity-0 group-hover:opacity-100 transition-opacity"
                    >
                      <X size={12} />
                    </button>
                  </div>
                )}
                <button
                  onClick={() => fileInputRef.current?.click()}
                  className="w-24 h-24 rounded-lg border-2 border-dashed border-border hover:border-primary/50 flex flex-col items-center justify-center gap-1 transition-colors"
                >
                  <Upload size={18} className="text-muted-foreground" />
                  <span className="text-xs text-muted-foreground">{editing.image ? '変更' : '追加'}</span>
                </button>
              </div>
              <input
                ref={fileInputRef}
                type="file"
                accept="image/*"
                onChange={handleImageUpload}
                className="hidden"
              />
            </div>
          </div>

          <div className="flex gap-3 mt-6">
            <button
              onClick={handleSave}
              disabled={!editing.company}
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

      <div className="space-y-3">
        {experiences.map((exp) => (
          <motion.div
            key={exp.id}
            layout
            className="surface-elevated rounded-xl p-5 flex items-center justify-between group"
          >
            <div className="flex items-center gap-4 flex-1 min-w-0">
              <div className="w-12 h-12 rounded-lg bg-secondary flex items-center justify-center flex-shrink-0 overflow-hidden">
                {exp.image ? (
                  <img src={exp.image} alt="" className="w-full h-full object-cover" />
                ) : (
                  <Briefcase size={20} className="text-muted-foreground" />
                )}
              </div>
              <div className="min-w-0">
                <h3 className="font-display font-semibold text-sm truncate">{exp.company}</h3>
                <p className="text-xs text-muted-foreground truncate">{exp.role} · {exp.period}</p>
              </div>
            </div>
            <div className="flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
              <button
                onClick={() => { setEditing(exp); setIsNew(false); }}
                className="px-3 py-1.5 text-xs font-display rounded-lg bg-secondary hover:bg-surface-hover transition-colors"
              >
                編集
              </button>
              <button
                onClick={() => handleDelete(exp.id)}
                className="p-1.5 rounded-lg text-destructive hover:bg-destructive/10 transition-colors"
              >
                <Trash2 size={14} />
              </button>
            </div>
          </motion.div>
        ))}
        {experiences.length === 0 && (
          <div className="text-center py-12 text-muted-foreground text-sm font-body">
            経歴がまだありません。「新規追加」から追加してください。
          </div>
        )}
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

export default ExperienceManager;
