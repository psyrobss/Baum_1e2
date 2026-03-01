import confetti from 'canvas-confetti';
import { GoogleGenAI, Modality } from "@google/genai";
import { AnimatePresence, motion } from 'motion/react';
import { History, Trophy, Zap } from 'lucide-react';
import { useState, useRef, useEffect } from 'react';

import { AccessibilityToolbar } from './components/AccessibilityToolbar';
import { ChallengeEngine } from './components/ChallengeEngine';
import { FeedbackDisplay } from './components/FeedbackDisplay';
import { FrameRenderer } from './components/FrameRenderer';
import { Glossary } from './components/Glossary';
import { getPersonalizedContent, glossary } from './data';
import { AccessibilitySettings, LearningFrame, Option } from './types';

export default function App() {
  const [frames, setFrames] = useState<LearningFrame[]>([]);
  const [currentFrameIndex, setCurrentFrameIndex] = useState(0);
  const [selectedOptionId, setSelectedOptionId] = useState<string | null>(null);
  const [showFeedback, setShowFeedback] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);
  const [feedbackMessage, setFeedbackMessage] = useState('');
  const [score, setScore] = useState(0);
  const [isFinished, setIsFinished] = useState(false);
  const [isGlossaryOpen, setIsGlossaryOpen] = useState(false);
  const [showReTeach, setShowReTeach] = useState(false);
  const [currentAudio, setCurrentAudio] = useState<HTMLAudioElement | null>(null);
  const isReadingRef = useRef(false);
  
  const [accSettings, setAccSettings] = useState<AccessibilitySettings>({
    highContrast: false,
    fontSize: 1,
    isReading: false,
    volume: 1,
    readingSpeed: 1,
    soundEffects: true
  });

  const setIsReading = (val: boolean) => {
    isReadingRef.current = val;
    setAccSettings(s => ({ ...s, isReading: val }));
  };

  useEffect(() => {
    // Initialize frames with a shuffle for personalization
    setFrames(getPersonalizedContent(true));
  }, []);

  const currentFrame = frames[currentFrameIndex];

  const playSoundEffect = (type: 'correct' | 'wrong') => {
    if (!accSettings.soundEffects) return;
    
    try {
      const audioCtx = new (window.AudioContext || (window as any).webkitAudioContext)();
      const oscillator = audioCtx.createOscillator();
      const gainNode = audioCtx.createGain();

      oscillator.connect(gainNode);
      gainNode.connect(audioCtx.destination);

      gainNode.gain.value = accSettings.volume * 0.05;

      if (type === 'correct') {
        oscillator.type = 'sine';
        oscillator.frequency.setValueAtTime(880, audioCtx.currentTime);
        oscillator.frequency.exponentialRampToValueAtTime(1320, audioCtx.currentTime + 0.1);
      } else {
        oscillator.type = 'square';
        oscillator.frequency.setValueAtTime(150, audioCtx.currentTime);
        oscillator.frequency.exponentialRampToValueAtTime(70, audioCtx.currentTime + 0.2);
      }

      oscillator.start();
      gainNode.gain.exponentialRampToValueAtTime(0.0001, audioCtx.currentTime + 0.3);
      oscillator.stop(audioCtx.currentTime + 0.3);
    } catch (e) {
      console.error("AudioContext error:", e);
    }
  };

  const handleOptionSelect = (option: Option) => {
    setSelectedOptionId(option.id);
    setIsCorrect(option.isCorrect);
    setFeedbackMessage(option.feedback);
    setShowFeedback(true);
    
    if (option.isCorrect) {
      setScore(s => s + 10);
      triggerConfetti();
      setShowReTeach(false);
      playSoundEffect('correct');
    } else {
      if (currentFrame.reTeachContent) setShowReTeach(true);
      playSoundEffect('wrong');
    }
  };

  const handleTrueFalseSelect = (val: boolean) => {
    const correct = val === currentFrame.correctAnswer;
    setIsCorrect(correct);
    setFeedbackMessage(correct ? (currentFrame.correctFeedback || '') : (currentFrame.wrongFeedback || ''));
    setShowFeedback(true);
    
    if (correct) {
      setScore(s => s + 10);
      triggerConfetti();
      setShowReTeach(false);
      playSoundEffect('correct');
    } else {
      if (currentFrame.reTeachContent) setShowReTeach(true);
      playSoundEffect('wrong');
    }
  };

  const handleTextSubmit = (correct: boolean, feedback: string) => {
    setIsCorrect(correct);
    setFeedbackMessage(feedback);
    setShowFeedback(true);
    
    if (correct) {
      setScore(s => s + 10);
      triggerConfetti();
      setShowReTeach(false);
      playSoundEffect('correct');
    } else {
      if (currentFrame.reTeachContent) setShowReTeach(true);
      playSoundEffect('wrong');
    }
  };

  const triggerConfetti = () => {
    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 },
      colors: accSettings.highContrast ? ['#000', '#fff', '#ffff00'] : ['#141414', '#f5f5f0', '#5A5A40']
    });
  };

  const handleRetry = () => {
    setShowFeedback(false);
    setSelectedOptionId(null);
    setIsCorrect(false);
    setFeedbackMessage('');
    setShowReTeach(false);
  };

  const nextFrame = () => {
    if (currentFrameIndex < frames.length - 1) {
      setCurrentFrameIndex(i => i + 1);
      setSelectedOptionId(null);
      setShowFeedback(false);
      setIsCorrect(false);
      setFeedbackMessage('');
    } else {
      setIsFinished(true);
    }
  };

  const readAloud = async () => {
    if (isReadingRef.current) {
      window.speechSynthesis.cancel();
      if (currentAudio) {
        currentAudio.pause();
        currentAudio.currentTime = 0;
      }
      setIsReading(false);
      return;
    }

    setIsReading(true);
    let textToRead = `${currentFrame.title}. ${currentFrame.content}. ${currentFrame.question || ''}`;
    
    if (showFeedback) {
      textToRead += `. Feedback: ${feedbackMessage}`;
      if (!isCorrect && currentFrame.reTeachContent) {
        textToRead += `. Dica de Reforço: ${currentFrame.reTeachContent}`;
      }
    }

    try {
      const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });
      const response = await ai.models.generateContent({
        model: "gemini-2.5-flash-preview-tts",
        contents: [{ parts: [{ text: `Leia com clareza e calma: ${textToRead}` }] }],
        config: {
          responseModalities: [Modality.AUDIO],
          speechConfig: {
            voiceConfig: {
              prebuiltVoiceConfig: { voiceName: 'Kore' },
            },
          },
        },
      });

      if (!isReadingRef.current) return;

      const base64Audio = response.candidates?.[0]?.content?.parts?.[0]?.inlineData?.data;
      
      if (base64Audio) {
        const byteCharacters = atob(base64Audio);
        const byteNumbers = new Array(byteCharacters.length);
        for (let i = 0; i < byteCharacters.length; i++) {
          byteNumbers[i] = byteCharacters.charCodeAt(i);
        }
        const byteArray = new Uint8Array(byteNumbers);
        const blob = new Blob([byteArray], { type: 'audio/mpeg' });
        const url = URL.createObjectURL(blob);
        const audio = new Audio(url);
        audio.volume = accSettings.volume;
        audio.playbackRate = accSettings.readingSpeed;
        setCurrentAudio(audio);
        
        audio.onended = () => {
          setIsReading(false);
          setCurrentAudio(null);
          URL.revokeObjectURL(url);
        };

        audio.onerror = () => {
          URL.revokeObjectURL(url);
          setCurrentAudio(null);
          useWebSpeechFallback(textToRead);
        };

        if (isReadingRef.current) {
          await audio.play();
        }
      } else {
        useWebSpeechFallback(textToRead);
      }
    } catch (error) {
      console.error("Gemini TTS failed:", error);
      useWebSpeechFallback(textToRead);
    }
  };

  const useWebSpeechFallback = (text: string) => {
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = 'pt-BR';
    utterance.volume = accSettings.volume;
    utterance.rate = accSettings.readingSpeed;
    utterance.onend = () => setIsReading(false);
    utterance.onerror = () => setIsReading(false);
    window.speechSynthesis.speak(utterance);
  };

  if (isFinished) {
    const accuracy = frames.length > 0 ? Math.round((score / frames.length) * 100) : 0;
    return (
      <main 
        className={`min-h-screen flex items-center justify-center p-4 transition-colors ${accSettings.highContrast ? 'bg-black text-white' : 'bg-stone-100 text-stone-900'}`}
        style={{ fontSize: `${accSettings.fontSize}rem` }}
      >
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className={`behavior-card max-w-md w-full text-center ${accSettings.highContrast ? 'border-4 border-yellow-400 bg-black text-white' : ''}`}
        >
          <Trophy className={`w-16 h-16 mx-auto mb-6 ${accSettings.highContrast ? 'text-yellow-400' : 'text-yellow-600'}`} />
          <h1 className="text-3xl font-display font-bold mb-2">Jornada Concluída!</h1>
          <p className={accSettings.highContrast ? 'text-white' : 'text-stone-600'}>Você dominou os fundamentos dos Capítulos 1 e 2 de Baum.</p>
          
          <div className="grid grid-cols-2 gap-4 mt-6 mb-8">
            <div className={`rounded-xl p-4 ${accSettings.highContrast ? 'bg-zinc-900 border-2 border-white' : 'bg-stone-50'}`}>
              <p className={`text-xs uppercase tracking-widest mb-1 ${accSettings.highContrast ? 'text-yellow-400' : 'text-stone-400'}`}>Pontuação</p>
              <p className="text-3xl font-mono font-bold">{score}</p>
            </div>
            <div className={`rounded-xl p-4 ${accSettings.highContrast ? 'bg-zinc-900 border-2 border-white' : 'bg-stone-50'}`}>
              <p className={`text-xs uppercase tracking-widest mb-1 ${accSettings.highContrast ? 'text-yellow-400' : 'text-stone-400'}`}>Precisão</p>
              <p className="text-3xl font-mono font-bold">{accuracy}%</p>
            </div>
          </div>

          <button 
            onClick={() => window.location.reload()}
            className={`w-full py-4 rounded-xl font-bold uppercase tracking-widest ${accSettings.highContrast ? 'bg-yellow-400 text-black hover:bg-yellow-300' : 'bg-stone-900 text-white hover:bg-stone-800'}`}
          >
            Reiniciar Quest
          </button>
        </motion.div>
      </main>
    );
  }

  if (!currentFrame) return null;

  return (
    <main 
      className={`min-h-screen flex flex-col items-center justify-center p-4 md:p-8 transition-colors duration-300 ${accSettings.highContrast ? 'bg-zinc-950 text-white' : 'bg-stone-100 text-stone-900'}`}
      style={{ fontSize: `${accSettings.fontSize}rem` }}
    >
      <AccessibilityToolbar 
        settings={accSettings}
        onToggleContrast={() => setAccSettings(s => ({ ...s, highContrast: !s.highContrast }))}
        onFontSizeChange={(delta) => setAccSettings(s => ({ ...s, fontSize: Math.min(Math.max(s.fontSize + delta, 0.8), 1.5) }))}
        onReadAloud={readAloud}
        onOpenGlossary={() => setIsGlossaryOpen(true)}
        onUpdateSettings={(newSettings) => setAccSettings(s => ({ ...s, ...newSettings }))}
      />

      <Glossary 
        isOpen={isGlossaryOpen}
        onClose={() => setIsGlossaryOpen(false)}
        terms={glossary}
        highContrast={accSettings.highContrast}
      />

      <header className="max-w-2xl w-full mb-8 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className={`${accSettings.highContrast ? 'bg-yellow-400' : 'bg-stone-900'} p-2 rounded-lg`}>
            <Zap className={`w-5 h-5 ${accSettings.highContrast ? 'text-black' : 'text-white'}`} />
          </div>
          <div>
            <h2 className="font-display font-bold text-xl">Behaviorist Quest</h2>
            <p className={`text-xs uppercase tracking-tighter ${accSettings.highContrast ? 'text-yellow-400' : 'text-stone-500'}`}>Capítulo {currentFrame.chapter}</p>
          </div>
        </div>
        <div className="text-right">
          <p className={`text-xs uppercase font-mono ${accSettings.highContrast ? 'text-stone-300' : 'text-stone-400'}`}>Progresso</p>
          <p className="font-mono font-bold">{currentFrameIndex + 1} / {frames.length}</p>
        </div>
      </header>

      <AnimatePresence mode="wait">
        <motion.section
          key={currentFrame.id}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className={`behavior-card max-w-2xl w-full ${accSettings.highContrast ? 'bg-black border-4 border-white text-white' : ''}`}
        >
          <FrameRenderer frame={currentFrame} highContrast={accSettings.highContrast} />
          
          <ChallengeEngine 
            frame={currentFrame}
            highContrast={accSettings.highContrast}
            showFeedback={showFeedback}
            selectedOptionId={selectedOptionId}
            onOptionSelect={handleOptionSelect}
            onTrueFalseSelect={handleTrueFalseSelect}
            onTextSubmit={handleTextSubmit}
          />

          {currentFrame.type === 'info' && !showFeedback && (
            <button 
              onClick={() => {
                setIsCorrect(true);
                setFeedbackMessage(currentFrame.correctFeedback || '');
                setShowFeedback(true);
              }} 
              className={`w-full py-4 rounded-xl font-bold uppercase tracking-widest mt-8 ${accSettings.highContrast ? 'bg-yellow-400 text-black' : 'bg-stone-900 text-white'}`}
            >
              Entendi e quero avançar
            </button>
          )}

          {showFeedback && (
            <FeedbackDisplay 
              isCorrect={isCorrect}
              message={feedbackMessage}
              onNext={nextFrame}
              onRetry={handleRetry}
              highContrast={accSettings.highContrast}
              isInfo={currentFrame.type === 'info'}
              reTeachContent={currentFrame.reTeachContent}
            />
          )}
        </motion.section>
      </AnimatePresence>

      <footer className="max-w-2xl w-full mt-8 grid grid-cols-2 gap-4">
        <div className={`rounded-xl p-4 border flex items-center gap-3 ${accSettings.highContrast ? 'bg-zinc-900 border-white' : 'bg-white/50 border-stone-200'}`}>
          <History className={`w-5 h-5 ${accSettings.highContrast ? 'text-yellow-400' : 'text-stone-400'}`} />
          <div>
            <p className="text-[10px] uppercase tracking-widest font-bold text-stone-400">Capítulos</p>
            <p className="text-sm font-bold">1 & 2</p>
          </div>
        </div>
        <div className={`rounded-xl p-4 border flex items-center gap-3 ${accSettings.highContrast ? 'bg-zinc-900 border-white' : 'bg-white/50 border-stone-200'}`}>
          <Trophy className={`w-5 h-5 ${accSettings.highContrast ? 'text-yellow-400' : 'text-yellow-600'}`} />
          <div>
            <p className="text-[10px] uppercase tracking-widest font-bold text-stone-400">Pontos</p>
            <p className="text-sm font-bold">{score}</p>
          </div>
        </div>
      </footer>
    </main>
  );
}
