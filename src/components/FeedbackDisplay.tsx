import { motion } from 'motion/react';
import { CheckCircle2, XCircle, ChevronRight, RotateCcw } from 'lucide-react';

interface Props {
  isCorrect: boolean;
  message: string;
  onNext: () => void;
  onRetry: () => void;
  highContrast: boolean;
  isInfo?: boolean;
  reTeachContent?: string;
}

export const FeedbackDisplay = ({ isCorrect, message, onNext, onRetry, highContrast, isInfo, reTeachContent }: Props) => {
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
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className={`mt-6 p-6 rounded-xl border-2 shadow-lg ${highContrast ? 'border-yellow-400 bg-zinc-900 text-white' : 'border-amber-200 bg-amber-50 text-amber-900'}`}
          >
            <div className="flex items-center gap-2 mb-3">
              <RotateCcw className={`w-5 h-5 ${highContrast ? 'text-yellow-400' : 'text-amber-600'}`} />
              <p className="text-sm font-black uppercase tracking-widest">Reforço Necessário:</p>
            </div>
            <p className="text-lg italic font-medium leading-relaxed mb-4">{reTeachContent}</p>
            <p className="text-sm font-bold opacity-80">Revise a dica acima e tente novamente para fixar o conhecimento!</p>
          </motion.div>
        )}

        <div className="mt-8 flex flex-wrap gap-4">
          {(isCorrect || isInfo) ? (
            <button 
              onClick={onNext}
              className="flex items-center gap-2 text-sm font-black uppercase tracking-widest hover:underline focus:ring-2 focus:ring-current p-2 rounded"
            >
              Próximo Passo <ChevronRight className="w-5 h-5" />
            </button>
          ) : (
            <>
              <button 
                onClick={onRetry}
                className={`flex items-center gap-2 px-4 py-2 rounded-lg font-bold uppercase tracking-widest text-xs transition-all ${
                  highContrast ? 'bg-white text-black hover:bg-yellow-400' : 'bg-stone-900 text-white hover:bg-stone-800'
                }`}
              >
                <RotateCcw className="w-4 h-4" /> Tentar Novamente
              </button>
              <button 
                onClick={onNext}
                className="flex items-center gap-2 text-sm font-bold uppercase tracking-widest hover:underline opacity-70 hover:opacity-100"
              >
                Pular Desafio <ChevronRight className="w-5 h-5" />
              </button>
            </>
          )}
        </div>
      </div>
    </motion.div>
  );
};
