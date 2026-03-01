import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';

interface Props {
  textWithBlanks: string;
  choices: string[];
  correctChoice: string;
  onCorrect: () => void;
  onWrong: (message: string) => void;
  highContrast: boolean;
  disabled: boolean;
}

export const WordChoiceChallenge = ({ textWithBlanks, choices, correctChoice, onCorrect, onWrong, highContrast, disabled }: Props) => {
  const [selected, setSelected] = useState<string | null>(null);
  const [availableChoices, setAvailableChoices] = useState<string[]>(choices);
  const parts = textWithBlanks.split('[CHOICE]');

  useEffect(() => {
    setAvailableChoices(choices);
    setSelected(null);
  }, [choices]);

  const handleChoice = (choice: string) => {
    if (disabled) return;
    
    setSelected(choice);
    if (choice === correctChoice) {
      setAvailableChoices([choice]);
      onCorrect();
    } else {
      onWrong(`Incorreto. A palavra correta era "${correctChoice}". Você escolheu "${choice}".`);
    }
  };

  return (
    <div className={`mt-6 p-6 rounded-2xl border-2 border-dashed ${highContrast ? 'border-yellow-400 bg-zinc-900' : 'border-stone-300 bg-stone-50/50'}`}>
      <div className="text-xl leading-relaxed text-center md:text-left">
        {parts[0]}
        <div className="inline-flex flex-wrap gap-2 mx-2 my-2 align-middle">
          <AnimatePresence>
            {availableChoices.map((choice) => (
              <motion.button
                key={choice}
                initial={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                disabled={disabled}
                onClick={() => handleChoice(choice)}
                className={`px-4 py-2 rounded-xl border-2 text-base font-bold transition-all transform active:scale-95 ${
                  selected === choice
                    ? choice === correctChoice
                      ? 'bg-emerald-500 border-emerald-600 text-white'
                      : 'bg-red-500 border-red-600 text-white'
                    : highContrast
                      ? 'border-white text-white hover:bg-yellow-400 hover:text-black disabled:opacity-50'
                      : 'border-stone-200 text-stone-700 hover:border-stone-900 hover:bg-stone-900 hover:text-white disabled:opacity-50'
                }`}
              >
                {choice}
              </motion.button>
            ))}
          </AnimatePresence>
        </div>
        {parts[1]}
      </div>
    </div>
  );
};
