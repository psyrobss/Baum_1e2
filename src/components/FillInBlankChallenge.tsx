import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';

interface Props {
  question: string;
  correctAnswer: string;
  choices: string[];
  onCorrect: () => void;
  onWrong: (message: string) => void;
  highContrast: boolean;
  disabled: boolean;
}

export const FillInBlankChallenge = ({ question, correctAnswer, choices, onCorrect, onWrong, highContrast, disabled }: Props) => {
  const [selected, setSelected] = useState<string | null>(null);
  const [availableChoices, setAvailableChoices] = useState<string[]>(choices);

  useEffect(() => {
    setAvailableChoices(choices);
    setSelected(null);
  }, [choices]);

  const handleChoice = (choice: string) => {
    if (disabled) return;
    
    setSelected(choice);
    const isCorrect = choice.toLowerCase() === correctAnswer.toLowerCase();
    
    if (isCorrect) {
      // Hide other choices
      setAvailableChoices([choice]);
      onCorrect();
    } else {
      onWrong(`Incorreto. A palavra correta era "${correctAnswer}".`);
    }
  };

  return (
    <div className="mt-6">
      <p className="text-lg font-medium mb-6 leading-relaxed">
        {question.replace('______', '__________')}
      </p>
      
      <div className="flex flex-wrap gap-3 justify-center">
        <AnimatePresence>
          {availableChoices.map((choice) => (
            <motion.button
              key={choice}
              initial={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              disabled={disabled}
              onClick={() => handleChoice(choice)}
              className={`px-6 py-3 rounded-xl border-2 font-bold transition-all transform active:scale-95 ${
                selected === choice
                  ? choice.toLowerCase() === correctAnswer.toLowerCase()
                    ? 'bg-emerald-500 border-emerald-600 text-white'
                    : 'bg-red-500 border-red-600 text-white'
                  : highContrast
                    ? 'border-white text-white hover:bg-yellow-400 hover:text-black'
                    : 'border-stone-200 text-stone-700 hover:border-stone-900 hover:bg-stone-900 hover:text-white'
              }`}
            >
              {choice}
            </motion.button>
          ))}
        </AnimatePresence>
      </div>
    </div>
  );
};
