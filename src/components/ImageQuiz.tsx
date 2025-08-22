import React, { useState, useEffect, useRef } from 'react';
import CountdownTimer from './CountdownTimer';
import { ImageQuestion } from '../data/imageQuestions';

interface ImageQuizProps {
  questions: ImageQuestion[];
  onComplete: (answers: Array<{ id: number; pickedIsReliable: boolean | null }>) => void;
  soundEnabled: boolean;
  onPlayAgain: () => void;
  onBack: () => void;
}

const ImageQuiz: React.FC<ImageQuizProps> = ({ questions, onComplete, soundEnabled, onPlayAgain, onBack }) => {
  const [selectedOption, setSelectedOption] = useState<'left' | 'right' | null>(null);
  const [isCorrect, setIsCorrect] = useState<boolean | null>(null);
  const [shuffledOptions, setShuffledOptions] = useState<{ left: string; right: string; leftIsReliable: boolean }>({ left: '', right: '', leftIsReliable: false });
  const [shakeClass, setShakeClass] = useState<string>('');
  const [showFeedback, setShowFeedback] = useState<boolean>(false);
  
  // Get a random question for this round
  const currentQuestion = React.useMemo(() => {
    const randomIndex = Math.floor(Math.random() * questions.length);
    return questions[randomIndex];
  }, [questions]);
  
  // Add audio refs
  const correctSoundRef = useRef<HTMLAudioElement | null>(null);
  const incorrectSoundRef = useRef<HTMLAudioElement | null>(null);

  // Initialize audio elements
  useEffect(() => {
    correctSoundRef.current = document.getElementById('correct-sound') as HTMLAudioElement;
    incorrectSoundRef.current = document.getElementById('incorrect-sound') as HTMLAudioElement;
  }, []);



  // Cleanup effect to stop all sounds when component unmounts
  useEffect(() => {
    return () => {
      stopAllSounds();
    };
  }, []);

  // Stop all sounds
  const stopAllSounds = () => {
    if (correctSoundRef.current) {
      correctSoundRef.current.pause();
      correctSoundRef.current.currentTime = 0;
    }
    if (incorrectSoundRef.current) {
      incorrectSoundRef.current.pause();
      incorrectSoundRef.current.currentTime = 0;
    }
  };

  // Shuffle options when component mounts
  useEffect(() => {
    const options = [
      { image: currentQuestion.reliableImage, isReliable: true },
      { image: currentQuestion.unreliableImage, isReliable: false }
    ];
    
    // Randomly decide which option goes left/right
    const shuffled = Math.random() < 0.5;
    setShuffledOptions({
      left: shuffled ? options[0].image : options[1].image,
      right: shuffled ? options[1].image : options[0].image,
      leftIsReliable: shuffled ? options[0].isReliable : options[1].isReliable
    });
  }, [currentQuestion]);
  
  const handleOptionSelect = (isLeft: boolean) => {
    if (showFeedback) return;
    
    setSelectedOption(isLeft ? 'left' : 'right');
    
    const userSelectedReliable = isLeft ? shuffledOptions.leftIsReliable : !shuffledOptions.leftIsReliable;
    const correct = userSelectedReliable === true; // Reliable is always correct
    
    setIsCorrect(correct);
    setShakeClass(correct ? 'shake-green' : 'shake-red');
    
    // Play appropriate sound if enabled
    if (soundEnabled) {
      const sound = correct ? correctSoundRef.current : incorrectSoundRef.current;
      if (sound) {
        sound.currentTime = 0;
        sound.play().catch(error => {
          console.warn('Could not play answer sound:', error);
        });
      }
    }
    
    setShowFeedback(true);
  };
  

  
  const handlePlayAgain = () => {
    // Stop all sounds before starting new round
    stopAllSounds();
    onPlayAgain();
  };

  return (
    <div className="min-h-screen flex flex-col p-4 bg-gradient-to-br from-blue-100 via-purple-100 to-pink-100 bg-cover bg-center">
      <div className="w-full max-w-5xl mx-auto flex-1 flex flex-col justify-center items-center">
        {/* Back Button */}
        <div className="mb-4 self-start">
          <button
            onClick={onBack}
            className="px-6 py-3 bg-gray-600 text-white rounded-full font-semibold hover:bg-gray-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
          >
            ← Back to Main Menu
          </button>
        </div>
        <div className="bg-white/90 backdrop-blur-lg rounded-3xl p-10 shadow-2xl border border-gray-100 relative overflow-hidden mb-8">
          <h1 className="text-5xl font-extrabold text-center text-gray-800 mb-10 relative drop-shadow-lg">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">
              Which Image Is Reliable?
            </span>
          </h1>

          <div className="mb-8 relative">
            <h2 className="text-2xl font-semibold text-gray-700 mb-2 text-center tracking-wide">
              Image Quiz
            </h2>
          </div>

          <div className="flex flex-col md:flex-row gap-8 mb-8 h-96 justify-center items-center">
            <div 
              onClick={() => handleOptionSelect(true)}
              className={`fact-myth-card flex-1 max-w-md cursor-pointer transition-all duration-300 transform hover:scale-105 rounded-2xl border-4 overflow-hidden shadow-xl group relative bg-gradient-to-br from-blue-50 to-purple-50 ${
                selectedOption === 'left'
                  ? isCorrect 
                    ? 'border-green-400 ring-4 ring-green-200' 
                    : 'border-red-400 ring-4 ring-red-200'
                  : 'border-gray-200 hover:border-blue-300'
              } ${selectedOption === 'left' ? shakeClass : ''}`}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-blue-100/40 to-purple-100/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="relative z-10 w-full h-full flex items-center justify-center p-4">
                <img 
                  src={shuffledOptions.left} 
                  alt="Left option" 
                  className="w-full h-80 object-contain rounded-xl shadow-lg border-2 border-white"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.src = '/images/placeholder.jpg';
                  }}
                />
              </div>
            </div>
            <div 
              onClick={() => handleOptionSelect(false)}
              className={`fact-myth-card flex-1 max-w-md cursor-pointer transition-all duration-300 transform hover:scale-105 rounded-2xl border-4 overflow-hidden shadow-xl group relative bg-gradient-to-br from-green-50 to-teal-50 ${
                selectedOption === 'right'
                  ? isCorrect 
                    ? 'border-green-400 ring-4 ring-green-200' 
                    : 'border-red-400 ring-4 ring-red-200'
                  : 'border-gray-200 hover:border-green-300'
              } ${selectedOption === 'right' ? shakeClass : ''}`}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-green-100/40 to-teal-100/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="relative z-10 w-full h-full flex items-center justify-center p-4">
                <img 
                  src={shuffledOptions.right} 
                  alt="Right option" 
                  className="w-full h-80 object-contain rounded-xl shadow-lg border-2 border-white"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.src = '/images/placeholder.jpg';
                  }}
                />
              </div>
            </div>
          </div>

          {/* Feedback below images */}
          {showFeedback && (
            <div className={`p-6 rounded-2xl flex items-center justify-between gap-6 mt-4 shadow-lg border-2 text-lg font-semibold transition-all duration-300 ${
              isCorrect 
                ? 'bg-green-50 border-green-300 text-green-800' 
                : 'bg-red-50 border-red-300 text-red-800'
            }`}>
              <div className="flex items-center gap-4">
                <span className="text-3xl">
                  {isCorrect ? '✅' : '❌'}
                </span>
                <span>
                  {isCorrect ? 'The image you selected is correct.' : 'The image you selected is incorrect.'}
                </span>
              </div>
              <button 
                onClick={handlePlayAgain}
                className="px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full font-bold text-base hover:from-blue-700 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
              >
                Play Again
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ImageQuiz; 