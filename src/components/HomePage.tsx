import React from 'react';
import { BrainCircuit, Image, BookOpen, Camera, MessageCircle, Volume2, VolumeX } from 'lucide-react';

interface HomePageProps {
  onSelectFacts: () => void;
  onSelectImages: () => void;
  onSelectScenarios: () => void;
  soundEnabled: boolean;
  onToggleSound: () => void;
}

const HomePage: React.FC<HomePageProps> = ({ onSelectFacts, onSelectImages, onSelectScenarios, soundEnabled, onToggleSound }) => {
  return (
    <div className="min-h-screen w-full flex flex-col justify-center items-center p-4 bg-[url('/images/virus1.jpg')] bg-cover bg-center">
      <div className="max-w-4xl w-full bg-white/95 backdrop-blur-sm rounded-2xl p-12 shadow-2xl border border-gray-100 relative overflow-hidden">
        {/* Decorative virus elements */}
        <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
          <div className="absolute top-4 left-4 w-16 h-16 opacity-10">
            <img src="/images/virus1.jpg" alt="" className="w-full h-full animate-spin-slow" />
          </div>
          <div className="absolute bottom-4 right-4 w-20 h-20 opacity-10">
            <img src="/images/virus2.jpg" alt="" className="w-full h-full animate-spin-slow" />
          </div>
        </div>

        <div className="relative z-10">
          {/* Header */}
          <div className="text-center mb-12">
            <div className="flex justify-center mb-6">
              <div className="p-4 bg-gradient-to-br from-blue-100 to-purple-100 rounded-full">
                <BrainCircuit className="w-20 h-20 text-blue-600" />
              </div>
            </div>
            
            <h1 className="text-5xl font-bold text-gray-800 mb-4">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">
                Which Fact Is Reliable?
              </span>
            </h1>
            
            <h2 className="text-2xl text-gray-600 mb-6">
              Test your health knowledge
            </h2>
            
                          <p className="text-xl text-gray-700 max-w-2xl mx-auto">
                Choose your preferred format and challenge yourself to identify reliable
                health information from common myths and misconceptions.
              </p>
              
              {/* Sound Toggle */}
              <div className="mt-8 flex justify-center">
                <div className="flex items-center gap-3 bg-gray-50 rounded-xl px-6 py-3 border border-gray-200">
                  <span className="text-sm font-semibold text-gray-700">Enable Sound</span>
                  <button
                    onClick={onToggleSound}
                    className={`relative w-12 h-6 rounded-full transition-all duration-300 ${
                      soundEnabled 
                        ? 'bg-blue-500 shadow-lg' 
                        : 'bg-gray-300'
                    }`}
                  >
                    <div
                      className={`absolute top-1 w-4 h-4 bg-white rounded-full transition-all duration-300 shadow-md ${
                        soundEnabled ? 'left-7' : 'left-1'
                      }`}
                    />
                  </button>
                </div>
              </div>
            </div>

          {/* Quiz Options */}
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {/* Facts Version */}
            <div 
              onClick={onSelectFacts}
              className="group cursor-pointer bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl p-6 border-2 border-blue-200 hover:border-blue-400 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
            >
              <div className="flex justify-center mb-4">
                <div className="p-3 bg-blue-100 rounded-full group-hover:bg-blue-200 transition-colors duration-300">
                  <BookOpen className="w-12 h-12 text-blue-600" />
                </div>
              </div>
              
              <h3 className="text-2xl font-bold text-center text-gray-800 mb-3">
                Facts & Myths
              </h3>
              
              <p className="text-gray-700 text-center mb-4 leading-relaxed text-sm">
                Read through statements and determine which ones are reliable facts 
                and which are common misconceptions about COVID-19.
              </p>
              
              <div className="text-center">
                <div className="inline-flex items-center gap-2 text-blue-600 font-semibold group-hover:text-blue-700 transition-colors duration-300 text-sm">
                  <span>Start Facts Quiz</span>
                  <svg className="w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </div>
              </div>
            </div>

            {/* Images Version */}
            <div 
              onClick={onSelectImages}
              className="group cursor-pointer bg-gradient-to-br from-green-50 to-teal-50 rounded-2xl p-6 border-2 border-green-200 hover:border-green-400 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
            >
              <div className="flex justify-center mb-4">
                <div className="p-3 bg-green-100 rounded-full group-hover:bg-green-200 transition-colors duration-300">
                  <Camera className="w-12 h-12 text-green-600" />
                </div>
              </div>
              
              <h3 className="text-2xl font-bold text-center text-gray-800 mb-3">
                Visual Quiz
              </h3>
              
              <p className="text-gray-700 text-center mb-4 leading-relaxed text-sm">
                Look at images and identify which practices are reliable for 
                preventing health issues and which are not recommended.
              </p>
              
              <div className="text-center">
                <div className="inline-flex items-center gap-2 text-green-600 font-semibold group-hover:text-green-700 transition-colors duration-300 text-sm">
                  <span>Start Visual Quiz</span>
                  <svg className="w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </div>
              </div>
            </div>

            {/* Scenarios Version */}
            <div 
              onClick={onSelectScenarios}
              className="group cursor-pointer bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl p-6 border-2 border-purple-200 hover:border-purple-400 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
            >
              <div className="flex justify-center mb-4">
                <div className="p-3 bg-purple-100 rounded-full group-hover:bg-purple-200 transition-colors duration-300">
                  <MessageCircle className="w-12 h-12 text-purple-600" />
                </div>
              </div>
              
              <h3 className="text-2xl font-bold text-center text-gray-800 mb-3">
                Scenario Quiz
              </h3>
              
              <p className="text-gray-700 text-center mb-4 leading-relaxed text-sm">
                Practice responding to real-life situations involving health 
                misinformation and learn how to handle them responsibly.
              </p>
              
              <div className="text-center">
                <div className="inline-flex items-center gap-2 text-purple-600 font-semibold group-hover:text-purple-700 transition-colors duration-300 text-sm">
                  <span>Start Scenario Quiz</span>
                  <svg className="w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </div>
              </div>
            </div>
          </div>

          {/* Footer */}
          <div className="text-center mt-8">
            <p className="text-sm text-gray-500">
              Test your knowledge and improve your health literacy skills.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage; 