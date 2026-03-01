import { Accessibility, Volume2, Book } from 'lucide-react';
import { AccessibilitySettings } from '../types';

interface Props {
  settings: AccessibilitySettings;
  onToggleContrast: () => void;
  onFontSizeChange: (delta: number) => void;
  onReadAloud: () => void;
  onOpenGlossary: () => void;
}

export const AccessibilityToolbar = ({ settings, onToggleContrast, onFontSizeChange, onReadAloud, onOpenGlossary }: Props) => {
  return (
    <div className="fixed top-4 right-4 flex gap-2 z-50">
      <div className={`flex items-center gap-2 p-2 rounded-2xl border ${settings.highContrast ? 'bg-zinc-900 border-yellow-400' : 'bg-white border-stone-200'} shadow-lg`}>
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
          disabled={settings.isReading}
          className={`p-2 rounded-lg transition-all ${settings.isReading ? 'bg-emerald-500 text-white animate-pulse' : 'bg-stone-100 text-stone-600 hover:bg-stone-200'}`}
          aria-label="Ler conteúdo em voz alta"
        >
          <Volume2 className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
};
