export type ChallengeType = 'multiple-choice' | 'true-false' | 'info' | 'fill-in-blank' | 'word-choice' | 'matching';

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
}

export interface AccessibilitySettings {
  highContrast: boolean;
  fontSize: number;
  isReading: boolean;
}
