import { BookOpen } from 'lucide-react';
import { LearningFrame } from '../types';

interface Props {
  frame: LearningFrame;
  highContrast: boolean;
}

export const FrameRenderer = ({ frame, highContrast }: Props) => {
  return (
    <div className="space-y-4">
      <div className={`flex items-center gap-2 mb-4 ${highContrast ? 'text-yellow-400' : 'text-stone-400'}`}>
        <BookOpen className="w-4 h-4" />
        <span className="text-sm font-medium uppercase tracking-widest">{frame.title}</span>
      </div>

      <p className="text-lg md:text-2xl leading-relaxed italic font-display">
        "{frame.content}"
      </p>
    </div>
  );
};
