import React, { useState, useEffect } from 'react';
import HomePage from './components/HomePage';
import Quiz from './components/Quiz';
import ImageQuiz from './components/ImageQuiz';
import ScenarioQuiz from './components/ScenarioQuiz';
import Result from './components/Result';
import Review from './components/Review';
import ImageReview from './components/ImageReview';
import ScenarioReview from './components/ScenarioReview';
import { questions, Question } from './data/questions';
import { imageQuestions, ImageQuestion } from './data/imageQuestions';
import { scenarioQuestions, ScenarioQuestion } from './data/scenarioQuestions';

interface Answer {
  id: number;
  pickedIsFact: boolean | null;
}

interface ImageAnswer {
  id: number;
  pickedIsReliable: boolean | null;
}

interface ScenarioAnswer {
  id: number;
  selectedOption: number | null;
}

type QuizType = 'facts' | 'images' | 'scenarios';

function App() {
  const [step, setStep] = useState<'home' | 'quiz' | 'result' | 'review'>('home');
  const [quizType, setQuizType] = useState<QuizType | null>(null);
  const [answers, setAnswers] = useState<Answer[]>([]);
  const [imageAnswers, setImageAnswers] = useState<ImageAnswer[]>([]);
  const [scenarioAnswers, setScenarioAnswers] = useState<ScenarioAnswer[]>([]);
  const [soundEnabled, setSoundEnabled] = useState<boolean>(true);

  // Get 10 random questions for facts quiz
  const quizQuestions = React.useMemo(() => {
    const allQuestions = [...questions];
    
    // Shuffle the array using Fisher-Yates algorithm
    for (let i = allQuestions.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [allQuestions[i], allQuestions[j]] = [allQuestions[j], allQuestions[i]];
    }
    
    return allQuestions.slice(0, 10);
  }, []);

  // Get 10 random questions for image quiz
  const imageQuizQuestions = React.useMemo(() => {
    const allImageQuestions = [...imageQuestions];
    
    // Shuffle the array using Fisher-Yates algorithm
    for (let i = allImageQuestions.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [allImageQuestions[i], allImageQuestions[j]] = [allImageQuestions[j], allImageQuestions[i]];
    }
    
    return allImageQuestions.slice(0, 10);
  }, []);

  // Get first 5 questions for scenario quiz in order (no shuffling)
  const scenarioQuizQuestions = React.useMemo(() => {
    return scenarioQuestions.slice(0, 5); // Return first 5 questions in order
  }, []);

  const handleSelectFacts = () => {
    setQuizType('facts');
    setStep('quiz');
  };

  const handleSelectImages = () => {
    setQuizType('images');
    setStep('quiz');
  };

  const handleSelectScenarios = () => {
    setQuizType('scenarios');
    setStep('quiz');
  };

  const handleQuizComplete = (quizAnswers: Answer[]) => {
    setAnswers(quizAnswers);
    setStep('result');
  };

  const handleImageQuizComplete = (quizAnswers: ImageAnswer[]) => {
    setImageAnswers(quizAnswers);
    setStep('result');
  };

  const handleScenarioQuizComplete = (quizAnswers: ScenarioAnswer[]) => {
    setScenarioAnswers(quizAnswers);
    setStep('result');
  };

  const handleImageQuizPlayAgain = () => {
    // Reset image quiz state and start a new round
    setImageAnswers([]);
    // The ImageQuiz component will automatically get a new random question
  };

  const handleReview = () => {
    setStep('review');
  };

  const handleRestart = () => {
    // Stop all audio before restarting
    const stopAllAudio = () => {
      const audioElements = document.querySelectorAll('audio');
      audioElements.forEach(audio => {
        audio.pause();
        audio.currentTime = 0;
      });
    };
    stopAllAudio();
    setStep('home');
    setQuizType(null);
    setAnswers([]);
    setImageAnswers([]);
    setScenarioAnswers([]);
  };

  const handleBackToHome = () => {
    // Stop all audio before going back
    const stopAllAudio = () => {
      const audioElements = document.querySelectorAll('audio');
      audioElements.forEach(audio => {
        audio.pause();
        audio.currentTime = 0;
      });
    };
    stopAllAudio();
    setStep('home');
    setQuizType(null);
    setAnswers([]);
    setImageAnswers([]);
    setScenarioAnswers([]);
  };

  const handleToggleSound = () => {
    setSoundEnabled(!soundEnabled);
  };

  const handleBackToResults = () => {
    // Stop all audio before navigating back to results
    const stopAllAudio = () => {
      const audioElements = document.querySelectorAll('audio');
      audioElements.forEach(audio => {
        audio.pause();
        audio.currentTime = 0;
      });
    };
    stopAllAudio();
    setStep('result');
  };

  const calculateScore = (answers: Answer[]): number => {
    return answers.filter(a => a.pickedIsFact === true).length;
  };

  const calculateImageScore = (answers: ImageAnswer[]): number => {
    return answers.filter(a => a.pickedIsReliable === true).length;
  };

  const calculateScenarioScore = (answers: ScenarioAnswer[]): number => {
    return answers.filter(a => a.selectedOption !== null && a.selectedOption === scenarioQuestions.find(q => q.id === a.id)?.correctOption).length;
  };

  // Cleanup effect to stop all audio when step changes
  useEffect(() => {
    return () => {
      const audioElements = document.querySelectorAll('audio');
      audioElements.forEach(audio => {
        audio.pause();
        audio.currentTime = 0;
      });
    };
  }, [step]);

  return (
    <div className="min-h-screen bg-gray-50">
      {step === 'home' && (
        <HomePage 
          onSelectFacts={handleSelectFacts}
          onSelectImages={handleSelectImages}
          onSelectScenarios={handleSelectScenarios}
          soundEnabled={soundEnabled}
          onToggleSound={handleToggleSound}
        />
      )}
      
      {step === 'quiz' && quizType === 'facts' && (
        <Quiz 
          key="facts-quiz"
          questions={quizQuestions} 
          onComplete={handleQuizComplete}
          soundEnabled={soundEnabled}
          onBack={handleBackToHome}
        />
      )}

      {step === 'quiz' && quizType === 'images' && (
        <ImageQuiz 
          key={`images-quiz-${Date.now()}`}
          questions={imageQuizQuestions} 
          onComplete={handleImageQuizComplete}
          soundEnabled={soundEnabled}
          onPlayAgain={handleImageQuizPlayAgain}
          onBack={handleBackToHome}
        />
      )}

      {step === 'quiz' && quizType === 'scenarios' && (
        <ScenarioQuiz 
          key="scenarios-quiz"
          questions={scenarioQuizQuestions} 
          onComplete={handleScenarioQuizComplete}
          soundEnabled={soundEnabled}
          onBack={handleBackToHome}
        />
      )}
      
      {step === 'result' && (
        <Result 
          score={quizType === 'facts' ? calculateScore(answers) : 
                 quizType === 'images' ? calculateImageScore(imageAnswers) : 
                 calculateScenarioScore(scenarioAnswers)}
          totalQuestions={quizType === 'scenarios' ? 5 : 10}
          onReview={handleReview}
          onRestart={handleRestart}
          onBack={handleBackToHome}
        />
      )}

      {step === 'review' && quizType === 'facts' && (
        <Review 
          questions={quizQuestions}
          answers={answers}
          onBack={handleBackToResults}
        />
      )}

      {step === 'review' && quizType === 'images' && (
        <ImageReview 
          questions={imageQuizQuestions}
          answers={imageAnswers}
          onBack={handleBackToResults}
        />
      )}

      {step === 'review' && quizType === 'scenarios' && (
        <ScenarioReview 
          questions={scenarioQuizQuestions}
          answers={scenarioAnswers}
          onBack={handleBackToResults}
        />
      )}
    </div>
  );
}

export default App;