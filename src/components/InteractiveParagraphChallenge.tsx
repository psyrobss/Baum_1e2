import { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { InteractivePart, LearningFrame } from '../types';

interface Props {
  frame: LearningFrame;
  onComplete: (correct: boolean, feedback: string) => void;
  disabled: boolean;
  highContrast: boolean;
}

export const InteractiveParagraphChallenge = ({ frame, onComplete, disabled, highContrast }: Props) => {
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    if (!disabled) {
      setAnswers({});
      setSubmitted(false);
    }
  }, [disabled]);

  const handleInputChange = (id: string, value: string) => {
    setAnswers(prev => ({ ...prev, [id]: value }));
  };

  const handleSubmit = () => {
    if (!frame.parts) return;

    let allCorrect = true;
    frame.parts.forEach(part => {
      if (part.type === 'choice') {
        const userAnswer = answers[part.id]?.trim();
        const correctAnswer = part.answer?.trim();
        if (userAnswer !== correctAnswer) {
          allCorrect = false;
        }
      }
    });

    setSubmitted(true);
    onComplete(allCorrect, allCorrect ? (frame.correctFeedback || 'Excelente! Você completou o parágrafo corretamente.') : (frame.wrongFeedback || 'Algumas escolhas não foram corretas. Tente novamente!'));
  };

  if (!frame.parts) return null;

  return (
    <div className="space-y-6">
      <div className={`leading-relaxed text-lg p-6 rounded-2xl border-2 ${highContrast ? 'border-white bg-black' : 'border-stone-100 bg-stone-50/50'}`}>
        {frame.parts.map((part, index) => {
          if (part.type === 'text') {
            return <span key={part.id}>{part.content}</span>;
          } else if (part.type === 'choice') {
            return (
              <select
                key={part.id}
                disabled={disabled || submitted}
                value={answers[part.id] || ''}
                onChange={(e) => handleInputChange(part.id, e.target.value)}
                className={`mx-1 px-2 py-0.5 rounded border-b-2 transition-all outline-none inline-block
                  ${highContrast 
                    ? 'bg-zinc-900 border-yellow-400 text-white focus:border-white' 
                    : 'bg-white border-stone-300 text-stone-900 focus:border-stone-900'
                  }
                  ${submitted && answers[part.id] === part.answer ? 'border-emerald-500 bg-emerald-50/20' : ''}
                  ${submitted && answers[part.id] !== part.answer ? 'border-red-500 bg-red-50/20' : ''}
                `}
              >
                <option value="">...</option>
                {part.options?.map(opt => (
                  <option key={opt} value={opt}>{opt}</option>
                ))}
              </select>
            );
          }
          return null;
        })}
      </div>

      {!submitted && (
        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          onClick={handleSubmit}
          disabled={disabled}
          className={`w-full py-4 rounded-xl font-bold uppercase tracking-widest transition-all
            ${highContrast ? 'bg-yellow-400 text-black' : 'bg-stone-900 text-white shadow-xl shadow-stone-200'}
          `}
        >
          Verificar Parágrafo
        </motion.button>
      )}
    </div>
  );
};
