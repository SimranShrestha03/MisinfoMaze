import React from 'react';
import { CheckCircle, XCircle, ArrowLeft } from 'lucide-react';
import { ScenarioQuestion } from '../data/scenarioQuestions';

interface ScenarioReviewProps {
  questions: ScenarioQuestion[];
  answers: Array<{ id: number; selectedOption: number | null }>;
  onBack: () => void;
}

const ScenarioReview: React.FC<ScenarioReviewProps> = ({ questions, answers, onBack }) => {
  // Match questions with answers
  const reviewItems = questions.map(question => {
    const answer = answers.find(a => a.id === question.id);
    
    // Determine if answer was correct
    let isCorrect = null;
    if (answer?.selectedOption !== null) {
      isCorrect = answer?.selectedOption === question.correctOption;
    }
    
    return {
      ...question,
      userAnswer: answer?.selectedOption,
      isCorrect
    };
  });

  return (
    <div className="min-h-screen py-8 bg-gradient-to-br from-purple-100 via-pink-100 to-orange-100">
      <div className="max-w-4xl mx-auto bg-white/90 backdrop-blur-sm rounded-xl shadow-xl p-6">
        <div className="mb-6 flex items-center">
          <button 
            onClick={onBack}
            className="mr-4 p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors"
          >
            <ArrowLeft size={20} />
          </button>
          <h1 className="text-2xl font-bold text-gray-800">Review Your Responses</h1>
        </div>
        
        <div className="space-y-8">
          {reviewItems.map((item, index) => (
            <div key={item.id} className="bg-white rounded-lg p-6 shadow-md border border-gray-200">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-xl font-semibold text-gray-800">
                  Scenario {index + 1}
                </h2>
                <div className="flex items-center gap-2">
                  {item.isCorrect === true ? (
                    <CheckCircle size={24} className="text-green-500" />
                  ) : item.isCorrect === false ? (
                    <XCircle size={24} className="text-red-500" />
                  ) : (
                    <div className="w-6 h-6 bg-gray-300 rounded-full"></div>
                  )}
                </div>
              </div>
              
              {/* Scenario */}
              <div className="mb-4 p-4 bg-gray-50 rounded-lg">
                <p className="text-gray-700">{item.scenario}</p>
              </div>
              
              {/* Message */}
              <div className="mb-4 p-4 bg-gray-100 rounded-lg border-l-4 border-gray-400">
                <p className="text-gray-800 font-medium">"{item.message}"</p>
              </div>

              {/* Image (if available) */}
              {item.image && (
                <div className="mb-4 flex justify-center">
                  <img 
                    src={item.image} 
                    alt="Scenario context" 
                    className="max-w-full h-48 object-contain rounded-lg shadow-md border border-gray-200"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.style.display = 'none';
                    }}
                  />
                </div>
              )}
              
              {/* Options */}
              <div className="mb-4">
                <h3 className="font-semibold text-gray-700 mb-2">Your options were:</h3>
                <div className="space-y-2">
                  {item.options.map((option, optionIndex) => (
                    <div 
                      key={optionIndex}
                      className={`p-3 rounded-lg border-2 ${
                        item.userAnswer === optionIndex
                          ? item.isCorrect 
                            ? 'bg-green-50 border-green-200' 
                            : 'bg-red-50 border-red-200'
                          : optionIndex === item.correctOption
                            ? 'bg-green-50 border-green-200'
                            : 'bg-gray-50 border-gray-200'
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <span className={`w-6 h-6 rounded-full flex items-center justify-center text-sm font-bold ${
                          item.userAnswer === optionIndex
                            ? item.isCorrect 
                              ? 'bg-green-500 text-white' 
                              : 'bg-red-500 text-white'
                            : optionIndex === item.correctOption
                              ? 'bg-green-500 text-white'
                              : 'bg-gray-300 text-gray-600'
                        }`}>
                          {String.fromCharCode(65 + optionIndex)}
                        </span>
                        <span className="text-gray-800">{option}</span>
                        {optionIndex === item.correctOption && (
                          <span className="text-green-600 font-semibold">✓ Correct</span>
                        )}
                        {item.userAnswer === optionIndex && !item.isCorrect && (
                          <span className="text-red-600 font-semibold">✗ Your choice</span>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              
              {/* Result */}
              <div className={`p-4 rounded-lg ${
                item.isCorrect === true 
                  ? 'bg-green-50 text-green-800 border border-green-200' 
                  : item.isCorrect === false 
                    ? 'bg-red-50 text-red-800 border border-red-200' 
                    : 'bg-gray-50 text-gray-700 border border-gray-200'
              }`}>
                <p className="text-sm mb-2">
                  <strong>Your choice:</strong> {item.userAnswer !== null ? String.fromCharCode(65 + item.userAnswer) : 'No answer'}
                </p>
                <p className="text-sm mb-2">
                  <strong>Correct answer:</strong> {String.fromCharCode(65 + item.correctOption)}
                </p>
                <p className="text-sm mb-2"><strong>Explanation:</strong> {item.explanation}</p>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-8 flex justify-center">
          <button
            onClick={onBack}
            className="px-8 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-full font-semibold hover:from-purple-700 hover:to-pink-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
          >
            Back to Results
          </button>
        </div>
      </div>
    </div>
  );
};

export default ScenarioReview;
