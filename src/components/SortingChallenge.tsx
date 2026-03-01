import React, { useState, useEffect } from 'react';
import { motion, Reorder } from 'motion/react';
import { GripVertical, CheckCircle2 } from 'lucide-react';
import { SortingItem } from '../types';

interface Props {
  items: SortingItem[];
  onCorrect: () => void;
  onWrong: (message: string) => void;
  highContrast: boolean;
  disabled: boolean;
}

export const SortingChallenge = ({ items, onCorrect, onWrong, highContrast, disabled }: Props) => {
  const [currentItems, setCurrentItems] = useState<SortingItem[]>([]);
  const [isCorrect, setIsCorrect] = useState(false);

  useEffect(() => {
    if (!disabled) {
      setCurrentItems([...items].sort(() => Math.random() - 0.5));
      setIsCorrect(false);
    }
  }, [items, disabled]);

  const checkOrder = () => {
    const isOrdered = currentItems.every((item, index) => item.order === index);
    if (isOrdered) {
      setIsCorrect(true);
      onCorrect();
    } else {
      onWrong("A ordem ainda não está correta. Tente reorganizar os eventos cronologicamente.");
    }
  };

  return (
    <div className="mt-6 space-y-4">
      <p className="text-sm font-bold uppercase tracking-widest text-stone-400 mb-4">Reordene os itens (Arraste para organizar):</p>
      
      <Reorder.Group 
        axis="y" 
        values={currentItems} 
        onReorder={setCurrentItems}
        className="space-y-2"
      >
        {currentItems.map((item) => (
          <Reorder.Item 
            key={item.id} 
            value={item}
            disabled={disabled || isCorrect}
            className={`p-4 rounded-xl border-2 flex items-center gap-4 cursor-grab active:cursor-grabbing transition-colors ${
              isCorrect 
                ? 'bg-emerald-50 border-emerald-500 text-emerald-900'
                : highContrast
                  ? 'bg-zinc-900 border-white text-white hover:border-yellow-400'
                  : 'bg-white border-stone-100 hover:border-stone-300 shadow-sm'
            }`}
          >
            <GripVertical className={`w-5 h-5 shrink-0 ${highContrast ? 'text-stone-500' : 'text-stone-300'}`} />
            <span className="font-medium">{item.text}</span>
          </Reorder.Item>
        ))}
      </Reorder.Group>

      {!disabled && !isCorrect && (
        <button
          onClick={checkOrder}
          className={`w-full py-4 rounded-xl font-bold uppercase tracking-widest mt-6 transition-all ${
            highContrast ? 'bg-yellow-400 text-black hover:bg-yellow-300' : 'bg-stone-900 text-white hover:bg-stone-800'
          }`}
        >
          Verificar Ordem
        </button>
      )}

      {isCorrect && (
        <motion.div 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex items-center justify-center gap-2 text-emerald-600 font-bold mt-4"
        >
          <CheckCircle2 className="w-5 h-5" /> Ordem Correta!
        </motion.div>
      )}
    </div>
  );
};
