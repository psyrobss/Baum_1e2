import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { CheckCircle2, XCircle } from 'lucide-react';
import { CategorizationItem } from '../types';

interface Props {
  items: CategorizationItem[];
  categories: string[];
  onCorrect: () => void;
  onWrong: (message: string) => void;
  highContrast: boolean;
  disabled: boolean;
}

export const CategorizationChallenge = ({ items, categories, onCorrect, onWrong, highContrast, disabled }: Props) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [results, setResults] = useState<Record<string, boolean>>({});
  const [isFinished, setIsFinished] = useState(false);

  useEffect(() => {
    if (!disabled) {
      setCurrentIndex(0);
      setResults({});
      setIsFinished(false);
    }
  }, [items, disabled]);

  const handleCategorySelect = (category: string) => {
    if (disabled || isFinished) return;

    const currentItem = items[currentIndex];
    const isCorrect = currentItem.category === category;
    
    setResults(prev => ({ ...prev, [currentItem.id]: isCorrect }));

    if (isCorrect) {
      if (currentIndex < items.length - 1) {
        setCurrentIndex(prev => prev + 1);
      } else {
        setIsFinished(true);
        onCorrect();
      }
    } else {
      onWrong(`Incorreto. O conceito "${currentItem.text}" pertence à categoria "${currentItem.category}".`);
    }
  };

  const currentItem = items[currentIndex];

  return (
    <div className="mt-6 space-y-6">
      <div className="flex justify-between items-center mb-4">
        <p className="text-xs uppercase tracking-widest text-stone-400 font-bold">Identifique o Conceito:</p>
        <p className="text-xs font-mono font-bold text-stone-500">{currentIndex + 1} / {items.length}</p>
      </div>

      <AnimatePresence mode="wait">
        {!isFinished && (
          <motion.div
            key={currentItem.id}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            className={`p-8 rounded-2xl border-2 text-center shadow-lg transition-all ${
              highContrast 
                ? 'bg-zinc-900 border-yellow-400 text-white' 
                : 'bg-white border-stone-100 text-stone-900'
            }`}
          >
            <h4 className="text-2xl font-display font-bold mb-2">{currentItem.text}</h4>
            <p className="text-sm opacity-60 italic">A qual categoria este conceito pertence?</p>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-8">
        {categories.map((category) => (
          <button
            key={category}
            disabled={disabled || isFinished}
            onClick={() => handleCategorySelect(category)}
            className={`p-4 rounded-xl border-2 font-bold transition-all transform active:scale-95 ${
              highContrast
                ? 'border-white text-white hover:bg-yellow-400 hover:text-black disabled:opacity-50'
                : 'border-stone-100 bg-stone-50 text-stone-700 hover:border-stone-900 hover:bg-stone-900 hover:text-white disabled:opacity-50'
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      {isFinished && (
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="flex flex-col items-center justify-center gap-2 text-emerald-600 font-bold mt-8 p-6 bg-emerald-50 rounded-2xl border-2 border-emerald-100"
        >
          <CheckCircle2 className="w-10 h-10 mb-2" />
          <p className="text-xl">Todos os conceitos identificados!</p>
        </motion.div>
      )}
    </div>
  );
};
