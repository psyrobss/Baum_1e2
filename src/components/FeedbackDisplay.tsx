import { motion } from 'motion/react';
import { CheckCircle2, XCircle, ChevronRight } from 'lucide-react';

interface Props {
  isCorrect: boolean;
  message: string;
  onNext: () => void;
  highContrast: boolean;
  isInfo?: boolean;
  reTeachContent?: string;
}

export const FeedbackDisplay = ({ isCorrect, message, onNext, highContrast, isInfo, reTeachContent }: Props) => {
  const bgColor = isInfo || isCorrect 
    ? (highContrast ? 'bg-zinc-900 border-emerald-400 text-emerald-400' : 'bg-emerald-50 border-emerald-100 text-emerald-800')
    : (highContrast ? 'bg-zinc-900 border-red-400 text-red-400' : 'bg-red-50 border-red-100 text-red-800');

  return (
    <motion.div 
      initial={{ opacity: 0, height: 0 }}
      animate={{ opacity: 1, height: 'auto' }}
      className={`p-6 rounded-xl flex items-start gap-4 border-2 mt-6 ${bgColor}`}
      role="alert"
      aria-live="polite"
    >
      {isInfo || isCorrect ? (
        <CheckCircle2 className="w-6 h-6 mt-0.5 shrink-0" />
      ) : (
        <XCircle className="w-6 h-6 mt-0.5 shrink-0" />
      )}
      
      <div className="flex-1">
        <p className="font-bold text-lg mb-1">
          {isInfo ? 'Entendido!' : isCorrect ? 'Excelente!' : 'Atenção:'}
        </p>
        <p className="font-medium leading-relaxed">{message}</p>
        
        {!isCorrect && reTeachContent && (
          <div className={`mt-4 p-4 rounded-lg border ${highContrast ? 'border-yellow-400 bg-black text-white' : 'border-red-200 bg-white text-stone-800'}`}>
            <p className="text-xs font-bold uppercase tracking-widest mb-1 opacity-70">Dica de Reforço:</p>
            <p className="text-sm italic">{reTeachContent}</p>
          </div>
        )}

        {(isCorrect || isInfo) && (
          <button 
            onClick={onNext}
            className="mt-6 flex items-center gap-2 text-sm font-black uppercase tracking-widest hover:underline focus:ring-2 focus:ring-current p-2 rounded"
          >
            Próximo Passo <ChevronRight className="w-5 h-5" />
          </button>
        )}
      </div>
    </motion.div>
  );
};
