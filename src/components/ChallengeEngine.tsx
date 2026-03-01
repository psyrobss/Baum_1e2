import { Lightbulb } from 'lucide-react';
import { LearningFrame, Option } from '../types';
import { FillInBlankChallenge } from './FillInBlankChallenge';
import { WordChoiceChallenge } from './WordChoiceChallenge';
import { MatchingChallenge } from './MatchingChallenge';

interface Props {
  frame: LearningFrame;
  highContrast: boolean;
  showFeedback: boolean;
  selectedOptionId: string | null;
  onOptionSelect: (option: Option) => void;
  onTrueFalseSelect: (val: boolean) => void;
  onTextSubmit: (isCorrect: boolean, feedback: string) => void;
}

export const ChallengeEngine = ({ 
  frame, 
  highContrast, 
  showFeedback, 
  selectedOptionId, 
  onOptionSelect, 
  onTrueFalseSelect,
  onTextSubmit
}: Props) => {
  if (frame.type === 'info') return null;

  return (
    <div className="space-y-6 mt-8">
      {frame.type !== 'fill-in-blank' && frame.type !== 'word-choice' && frame.type !== 'matching' && (
        <h3 className="text-xl font-semibold flex items-start gap-3">
          <Lightbulb className={`w-6 h-6 mt-1 shrink-0 ${highContrast ? 'text-yellow-400' : 'text-yellow-600'}`} />
          {frame.question}
        </h3>
      )}

      {frame.type === 'multiple-choice' && (
        <div className="grid gap-3" role="radiogroup" aria-label={frame.question}>
          {frame.options?.map((option) => (
            <button
              key={option.id}
              onClick={() => onOptionSelect(option)}
              disabled={showFeedback && option.isCorrect}
              className={`text-left p-5 rounded-xl border-2 transition-all focus:ring-4 focus:ring-yellow-400 outline-none ${
                selectedOptionId === option.id
                  ? option.isCorrect 
                    ? 'bg-emerald-50 border-emerald-500 text-emerald-900'
                    : 'bg-red-50 border-red-500 text-red-900'
                  : highContrast 
                    ? 'border-zinc-800 hover:border-white bg-zinc-900 text-white'
                    : 'border-stone-100 hover:border-stone-300 bg-stone-50'
              } ${showFeedback && option.isCorrect ? 'border-emerald-500 ring-2 ring-emerald-500' : ''}`}
              aria-pressed={selectedOptionId === option.id}
            >
              {option.text}
            </button>
          ))}
        </div>
      )}

      {frame.type === 'true-false' && (
        <div className="flex gap-4">
          {[true, false].map((val) => (
            <button
              key={String(val)}
              onClick={() => onTrueFalseSelect(val)}
              disabled={showFeedback && (val === frame.correctAnswer)}
              className={`flex-1 p-6 rounded-xl border-2 font-bold transition-all focus:ring-4 focus:ring-yellow-400 outline-none ${
                showFeedback && val === frame.correctAnswer
                  ? 'bg-emerald-50 border-emerald-500 text-emerald-900' 
                  : highContrast ? 'bg-zinc-900 border-white text-white' : 'border-stone-100 bg-stone-50'
              }`}
            >
              {val ? 'VERDADEIRO' : 'FALSO'}
            </button>
          ))}
        </div>
      )}

      {frame.type === 'fill-in-blank' && (
        <FillInBlankChallenge 
          question={frame.question || ''}
          correctAnswer={frame.blankAnswer || ''}
          choices={frame.choices || []}
          onCorrect={() => onTextSubmit(true, frame.correctFeedback || 'Excelente!')}
          onWrong={(msg) => onTextSubmit(false, frame.wrongFeedback || msg)}
          highContrast={highContrast}
          disabled={showFeedback}
        />
      )}

      {frame.type === 'word-choice' && (
        <WordChoiceChallenge 
          textWithBlanks={frame.textWithBlanks || ''}
          choices={frame.choices || []}
          correctChoice={frame.correctChoice || ''}
          onCorrect={() => onTextSubmit(true, frame.correctFeedback || 'Correto!')}
          onWrong={(msg) => onTextSubmit(false, frame.wrongFeedback || msg)}
          highContrast={highContrast}
          disabled={showFeedback}
        />
      )}

      {frame.type === 'matching' && (
        <MatchingChallenge 
          pairs={frame.matchingPairs || []}
          onCorrect={() => onTextSubmit(true, frame.correctFeedback || 'Associações perfeitas!')}
          onWrong={(msg) => onTextSubmit(false, frame.wrongFeedback || msg)}
          highContrast={highContrast}
          disabled={showFeedback}
        />
      )}
    </div>
  );
};
