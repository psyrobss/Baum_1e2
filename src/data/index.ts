import { LearningFrame } from '../types';
import { chapter1Content } from './chapter1';
import { chapter2Content } from './chapter2';
import { glossary } from './glossary';

export { glossary, chapter1Content, chapter2Content };

/**
 * Combines all content and optionally shuffles it for personalization.
 * This helps prevent students from simply copying a fixed sequence of answers.
 */
export const getPersonalizedContent = (shuffle: boolean = false): LearningFrame[] => {
  const allContent = [...chapter1Content, ...chapter2Content];
  
  if (shuffle) {
    // Fisher-Yates shuffle
    const shuffled = [...allContent];
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
  }
  
  return allContent;
};

// Default export for backward compatibility if needed
export const behaviorismContent = getPersonalizedContent();
