import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Check, X } from 'lucide-react';
import { MatchingPair } from '../types';

interface Props {
  pairs: MatchingPair[];
  onCorrect: () => void;
  onWrong: (message: string) => void;
  highContrast: boolean;
  disabled: boolean;
}

export const MatchingChallenge = ({ pairs, onCorrect, onWrong, highContrast, disabled }: Props) => {
  const [leftItems, setLeftItems] = useState<string[]>([]);
  const [rightItems, setRightItems] = useState<string[]>([]);
  const [selectedLeft, setSelectedLeft] = useState<string | null>(null);
  const [matches, setMatches] = useState<Record<string, string>>({});
  const [incorrectMatch, setIncorrectMatch] = useState<[string, string] | null>(null);

  useEffect(() => {
    if (!disabled) {
      setLeftItems(pairs.map(p => p.left).sort(() => Math.random() - 0.5));
      setRightItems(pairs.map(p => p.right).sort(() => Math.random() - 0.5));
      setMatches({});
      setSelectedLeft(null);
    }
  }, [pairs, disabled]);

  const handleLeftClick = (item: string) => {
    if (disabled || matches[item]) return;
    setSelectedLeft(item === selectedLeft ? null : item);
  };

  const handleRightClick = (rightItem: string) => {
    if (disabled || !selectedLeft) return;

    const pair = pairs.find(p => p.left === selectedLeft);
    const isCorrect = pair?.right === rightItem;

    if (isCorrect) {
      const newMatches = { ...matches, [selectedLeft]: rightItem };
      setMatches(newMatches);
      setSelectedLeft(null);
      
      if (Object.keys(newMatches).length === pairs.length) {
        onCorrect();
      }
    } else {
      setIncorrectMatch([selectedLeft, rightItem]);
      setTimeout(() => setIncorrectMatch(null), 1000);
      onWrong(`Associação incorreta.`);
    }
  };

  return (
    <div className="mt-6 grid grid-cols-2 gap-8">
      <div className="space-y-3">
        <p className="text-xs uppercase tracking-widest text-stone-400 font-bold mb-2">Conceito</p>
        {leftItems.map((item) => (
          <button
            key={item}
            disabled={disabled || !!matches[item]}
            onClick={() => handleLeftClick(item)}
            className={`w-full p-4 rounded-xl border-2 text-left transition-all ${
              matches[item]
                ? 'bg-emerald-500/10 border-emerald-500 text-emerald-700 opacity-50'
                : selectedLeft === item
                  ? 'border-stone-900 bg-stone-900 text-white scale-[1.02]'
                  : highContrast
                    ? 'border-white text-white hover:bg-zinc-800'
                    : 'border-stone-100 bg-stone-50 hover:border-stone-300'
            } ${incorrectMatch?.[0] === item ? 'border-red-500 animate-shake' : ''}`}
          >
            {item}
          </button>
        ))}
      </div>

      <div className="space-y-3">
        <p className="text-xs uppercase tracking-widest text-stone-400 font-bold mb-2">Definição</p>
        {rightItems.map((item) => {
          const matchedLeft = Object.keys(matches).find(key => matches[key] === item);
          return (
            <button
              key={item}
              disabled={disabled || !!matchedLeft}
              onClick={() => handleRightClick(item)}
              className={`w-full p-4 rounded-xl border-2 text-left transition-all ${
                matchedLeft
                  ? 'bg-emerald-500/10 border-emerald-500 text-emerald-700 opacity-50'
                  : highContrast
                    ? 'border-white text-white hover:bg-zinc-800'
                    : 'border-stone-100 bg-stone-50 hover:border-stone-300'
              } ${incorrectMatch?.[1] === item ? 'border-red-500 animate-shake' : ''}`}
            >
              {item}
            </button>
          );
        })}
      </div>
    </div>
  );
};
