import React, { useState, useEffect, useRef } from 'react';
import { ScenarioQuestion } from '../data/scenarioQuestions';

interface ScenarioQuizProps {
  questions: ScenarioQuestion[];
  onComplete: (answers: Array<{ id: number; selectedOption: number | null }>) => void;
  soundEnabled: boolean;
  onBack: () => void;
}

const ScenarioQuiz: React.FC<ScenarioQuizProps> = ({ questions, onComplete, soundEnabled, onBack }) => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [answers, setAnswers] = useState<Array<{ id: number; selectedOption: number | null }>>(
    questions.map(q => ({ id: q.id, selectedOption: null }))
  );
  const [showExplanation, setShowExplanation] = useState<boolean>(false);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [isCorrect, setIsCorrect] = useState<boolean | null>(null);
  const [shakeClass, setShakeClass] = useState<string>('');
  
  const currentQuestion = questions[currentIndex];
  

  
  const handleOptionSelect = (optionIndex: number) => {
    if (showExplanation) return;
    
    setSelectedOption(optionIndex);
    
    const correct = optionIndex === currentQuestion.correctOption;
    setIsCorrect(correct);
    setShakeClass(correct ? 'shake-green' : 'shake-red');
    
    const newAnswers = [...answers];
    newAnswers[currentIndex] = {
      id: currentQuestion.id,
      selectedOption: optionIndex
    };
    setAnswers(newAnswers);
    
    setShowExplanation(true);
  };
  
  const handleNext = () => {
    if (!showExplanation) return;
    
    if (currentIndex < 4) {
      setCurrentIndex(currentIndex + 1);
      setShowExplanation(false);
      setSelectedOption(null);
      setIsCorrect(null);
      setShakeClass('');
    } else {
      onComplete(answers);
    }
  };

  return (
    <div className="min-h-screen flex flex-col p-4 bg-gradient-to-br from-purple-100 via-pink-100 to-orange-100 bg-cover bg-center">
      <div className="w-full max-w-4xl mx-auto flex-1 flex flex-col justify-center">
        {/* Back Button */}
        <div className="mb-4">
          <button
            onClick={onBack}
            className="px-6 py-3 bg-gray-600 text-white rounded-full font-semibold hover:bg-gray-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
          >
            ← Back to Main Menu
          </button>
        </div>
        <div className="bg-white/90 backdrop-blur-lg rounded-3xl p-10 shadow-2xl border border-gray-100 relative overflow-hidden mb-8">
          <h1 className="text-5xl font-extrabold text-center text-gray-800 mb-10 relative drop-shadow-lg">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-pink-600">
              How Would You Respond?
            </span>
          </h1>

          <div className="mb-8 relative">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-semibold text-gray-700">
                Scenario {currentIndex + 1} of 5
              </h2>
              <div className="w-32 bg-gray-200 rounded-full h-2">
                <div 
                  className="h-2 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 transition-all duration-500"
                  style={{ width: `${((currentIndex + 1) / 5) * 100}%` }}
                ></div>
              </div>
            </div>
          </div>

          {/* Scenario Description */}
          <div className="mb-6 p-6 bg-gray-50 rounded-xl border-l-4 border-purple-400">
            <p className="text-lg text-gray-700 leading-relaxed">
              {currentQuestion.scenario}
            </p>
          </div>

          {/* Message - Only show if not empty */}
          {currentQuestion.message && (
            <div className="mb-8 p-6 bg-gray-100 rounded-xl border-2 border-gray-300">
              <p className="text-lg text-gray-800 leading-relaxed font-medium">
                "{currentQuestion.message}"
              </p>
            </div>
          )}

          {/* Image (if available) */}
          {currentQuestion.image && (
            <div className="mb-8 flex justify-center">
              <img 
                src={currentQuestion.image} 
                alt="Scenario context" 
                className="max-w-full h-64 object-contain rounded-xl shadow-lg border-2 border-gray-200"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.style.display = 'none';
                }}
              />
            </div>
          )}

          {/* Question */}
          <div className="mb-8">
            <h3 className="text-2xl font-bold text-gray-800 mb-6 text-center">
              What do you do?
            </h3>
          </div>

          {/* Options - Only show if no option selected */}
          {!showExplanation && (
            <div className="space-y-4 mb-8">
              {currentQuestion.options.map((option, index) => (
                <div 
                  key={index}
                  onClick={() => handleOptionSelect(index)}
                  className="p-6 rounded-xl cursor-pointer transition-all duration-300 transform hover:scale-105 border-2 shadow-lg group bg-white hover:bg-gray-50 border-gray-200 hover:border-purple-300"
                >
                  <div className="flex items-center gap-4">
                    <div className="w-8 h-8 rounded-full flex items-center justify-center font-bold text-lg bg-gray-200 text-gray-600 group-hover:bg-purple-200 group-hover:text-purple-700">
                      {String.fromCharCode(65 + index)} {/* A, B, C, etc. */}
                    </div>
                    <p className="text-lg text-gray-800 leading-relaxed">
                      {option}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Feedback - Show only after option selected */}
          {showExplanation && (
            <div className="p-6 rounded-2xl mb-8 transition-all duration-300 bg-white border-2 border-gray-200">
              <p className="text-lg leading-relaxed mb-4 whitespace-pre-line text-gray-800">
                {currentQuestion.feedback[selectedOption!]}
              </p>
            </div>
          )}

          {/* Dynamic Button */}
          {showExplanation && (
            <div className="flex justify-center">
              <button 
                onClick={handleNext} 
                className="px-10 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-full font-semibold text-xl hover:from-purple-700 hover:to-pink-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
              >
                {currentIndex < 4 ? 
                  (currentIndex === 3 && selectedOption === 0 ? 'Go Home' : 
                   currentIndex === 3 && selectedOption === 1 ? 'Go rest' : 
                   'Continue Your Day') : 
                  'See Results'}
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ScenarioQuiz;
