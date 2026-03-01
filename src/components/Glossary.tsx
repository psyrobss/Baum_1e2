import { motion, AnimatePresence } from 'motion/react';
import { X, Book } from 'lucide-react';
import { GlossaryTerm } from '../types';

interface Props {
  isOpen: boolean;
  onClose: () => void;
  terms: GlossaryTerm[];
  highContrast: boolean;
}

export const Glossary = ({ isOpen, onClose, terms, highContrast }: Props) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/40 backdrop-blur-sm z-[60]"
          />
          <motion.div 
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            className={`fixed right-0 top-0 h-full w-full max-w-md z-[70] shadow-2xl p-8 overflow-y-auto ${highContrast ? 'bg-black border-l-4 border-yellow-400 text-white' : 'bg-white text-stone-900'}`}
          >
            <div className="flex items-center justify-between mb-8">
              <div className="flex items-center gap-3">
                <Book className={`w-6 h-6 ${highContrast ? 'text-yellow-400' : 'text-stone-900'}`} />
                <h2 className="text-2xl font-display font-bold">Glossário</h2>
              </div>
              <button 
                onClick={onClose}
                className={`p-2 rounded-full hover:bg-stone-100 transition-colors ${highContrast ? 'hover:bg-zinc-800' : ''}`}
                aria-label="Fechar glossário"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            <div className="space-y-8">
              {terms.map((item) => (
                <div key={item.term} className="group">
                  <h3 className={`text-lg font-bold mb-2 uppercase tracking-wider ${highContrast ? 'text-yellow-400' : 'text-stone-500'}`}>
                    {item.term}
                  </h3>
                  <p className="leading-relaxed text-lg">
                    {item.definition}
                  </p>
                  <div className={`h-px w-full mt-6 ${highContrast ? 'bg-zinc-800' : 'bg-stone-100'}`} />
                </div>
              ))}
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};
