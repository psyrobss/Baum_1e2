export type ChallengeType = 'multiple-choice' | 'true-false' | 'info' | 'fill-in-blank' | 'word-choice' | 'matching' | 'sorting' | 'categorization' | 'interactive-paragraph';

export interface InteractivePart {
  type: 'text' | 'blank' | 'choice';
  content?: string; // For text
  answer?: string; // For blank/choice
  options?: string[]; // For choice
  id: string;
}

export interface Option {
  id: string;
  text: string;
  feedback: string;
  isCorrect: boolean;
}

export interface GlossaryTerm {
  term: string;
  definition: string;
}

export interface MatchingPair {
  id: string;
  left: string;
  right: string;
}

export interface SortingItem {
  id: string;
  text: string;
  order: number;
}

export interface CategorizationItem {
  id: string;
  text: string;
  category: string;
}

export interface LearningFrame {
  id: number;
  title: string;
  chapter: number;
  content: string;
  type: ChallengeType;
  question?: string;
  options?: Option[];
  correctAnswer?: boolean;
  correctFeedback?: string;
  wrongFeedback?: string;
  reTeachContent?: string;
  // For fill-in-blank and word-choice
  blankAnswer?: string;
  textWithBlanks?: string; 
  choices?: string[];
  correctChoice?: string;
  // For matching
  matchingPairs?: MatchingPair[];
  // For sorting
  sortingItems?: SortingItem[];
  // For categorization
  categorizationItems?: CategorizationItem[];
  categories?: string[];
  // For interactive-paragraph
  parts?: InteractivePart[];
}

export interface AccessibilitySettings {
  highContrast: boolean;
  fontSize: number;
  isReading: boolean;
  volume: number;
  readingSpeed: number;
  soundEffects: boolean;
}
