import { Accessibility, Volume2, Book, Settings, Gauge, Music, X } from 'lucide-react';
import { useState } from 'react';
import { AccessibilitySettings } from '../types';
import { motion, AnimatePresence } from 'motion/react';

interface Props {
  settings: AccessibilitySettings;
  onToggleContrast: () => void;
  onFontSizeChange: (delta: number) => void;
  onReadAloud: () => void;
  onOpenGlossary: () => void;
  onUpdateSettings: (settings: Partial<AccessibilitySettings>) => void;
}

export const AccessibilityToolbar = ({ 
  settings, 
  onToggleContrast, 
  onFontSizeChange, 
  onReadAloud, 
  onOpenGlossary,
  onUpdateSettings
}: Props) => {
  const [isSettingsOpen, setIsSettingsOpen] = useState(false);

  return (
    <div className="fixed top-4 right-4 flex flex-col items-end gap-2 z-50">
      <div className={`flex items-center gap-2 p-2 rounded-2xl border ${settings.highContrast ? 'bg-zinc-900 border-yellow-400' : 'bg-white border-stone-200'} shadow-lg`}>
        <button 
          onClick={() => setIsSettingsOpen(!isSettingsOpen)}
          className={`p-2 rounded-lg transition-colors ${isSettingsOpen ? 'bg-stone-900 text-white' : 'bg-stone-100 text-stone-600 hover:bg-stone-200'}`}
          title="Configurações de Áudio e Acessibilidade"
        >
          <Settings className="w-5 h-5" />
        </button>
        
        <div className="w-px h-6 bg-stone-200" />

        <button 
          onClick={onOpenGlossary}
          className={`p-2 rounded-lg bg-stone-100 text-stone-600 hover:bg-stone-200`}
          title="Abrir Glossário"
          aria-label="Abrir glossário de termos"
        >
          <Book className="w-5 h-5" />
        </button>
        <button 
          onClick={onToggleContrast} 
          className={`p-2 rounded-lg transition-colors ${settings.highContrast ? 'bg-yellow-400 text-black' : 'bg-stone-100 text-stone-600 hover:bg-stone-200'}`}
          title="Alternar Alto Contraste"
          aria-label="Alternar modo de alto contraste"
        >
          <Accessibility className="w-5 h-5" />
        </button>
        <button 
          onClick={() => onFontSizeChange(-0.1)} 
          className="p-2 rounded-lg bg-stone-100 text-stone-600 hover:bg-stone-200 font-bold"
          aria-label="Diminuir fonte"
        >
          A-
        </button>
        <button 
          onClick={() => onFontSizeChange(0.1)} 
          className="p-2 rounded-lg bg-stone-100 text-stone-600 hover:bg-stone-200 font-bold"
          aria-label="Aumentar fonte"
        >
          A+
        </button>
        <button 
          onClick={onReadAloud} 
          className={`p-2 rounded-lg transition-all ${settings.isReading ? 'bg-emerald-500 text-white animate-pulse' : 'bg-stone-100 text-stone-600 hover:bg-stone-200'}`}
          aria-label="Ler conteúdo em voz alta"
        >
          <Volume2 className="w-5 h-5" />
        </button>
      </div>

      <AnimatePresence>
        {isSettingsOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.95 }}
            className={`p-6 rounded-2xl border shadow-2xl w-72 ${settings.highContrast ? 'bg-zinc-900 border-yellow-400 text-white' : 'bg-white border-stone-200 text-stone-900'}`}
          >
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-sm font-black uppercase tracking-widest">Controles de Som</h3>
              <button onClick={() => setIsSettingsOpen(false)} className="opacity-50 hover:opacity-100">
                <X className="w-4 h-4" />
              </button>
            </div>

            <div className="space-y-6">
              {/* Volume */}
              <div className="space-y-2">
                <div className="flex justify-between items-center text-xs font-bold opacity-60 uppercase tracking-tighter">
                  <div className="flex items-center gap-2">
                    <Volume2 className="w-3 h-3" /> Volume
                  </div>
                  <span>{Math.round(settings.volume * 100)}%</span>
                </div>
                <input 
                  type="range" 
                  min="0" 
                  max="1" 
                  step="0.1" 
                  value={settings.volume}
                  onChange={(e) => onUpdateSettings({ volume: parseFloat(e.target.value) })}
                  className="w-full accent-emerald-500"
                />
              </div>

              {/* Speed */}
              <div className="space-y-2">
                <div className="flex justify-between items-center text-xs font-bold opacity-60 uppercase tracking-tighter">
                  <div className="flex items-center gap-2">
                    <Gauge className="w-3 h-3" /> Velocidade
                  </div>
                  <span>{settings.readingSpeed}x</span>
                </div>
                <input 
                  type="range" 
                  min="0.5" 
                  max="2" 
                  step="0.25" 
                  value={settings.readingSpeed}
                  onChange={(e) => onUpdateSettings({ readingSpeed: parseFloat(e.target.value) })}
                  className="w-full accent-blue-500"
                />
              </div>

              {/* Sound Effects Toggle */}
              <button 
                onClick={() => onUpdateSettings({ soundEffects: !settings.soundEffects })}
                className={`w-full flex items-center justify-between p-3 rounded-xl border-2 transition-all ${
                  settings.soundEffects 
                    ? 'border-emerald-500 bg-emerald-50 text-emerald-900' 
                    : 'border-stone-100 bg-stone-50 text-stone-400'
                }`}
              >
                <div className="flex items-center gap-2 font-bold text-sm">
                  <Music className="w-4 h-4" /> Efeitos Sonoros
                </div>
                <div className={`w-10 h-5 rounded-full relative transition-colors ${settings.soundEffects ? 'bg-emerald-500' : 'bg-stone-300'}`}>
                  <div className={`absolute top-1 w-3 h-3 bg-white rounded-full transition-all ${settings.soundEffects ? 'left-6' : 'left-1'}`} />
                </div>
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
