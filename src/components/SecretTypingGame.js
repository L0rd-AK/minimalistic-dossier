import React, { useState, useEffect, useCallback } from 'react';

const SecretTypingGame = () => {
  const [isActive, setIsActive] = useState(false);
  const [currentWord, setCurrentWord] = useState('');
  const [userInput, setUserInput] = useState('');
  const [score, setScore] = useState(0);
  const [timeLeft, setTimeLeft] = useState(30);
  const [gameOver, setGameOver] = useState(false);

  const words = React.useMemo(() => [
    'javascript', 'react', 'nodejs', 'mongodb', 'express', 'html', 'css',
    'github', 'vscode', 'npm', 'json', 'api', 'async', 'await', 'function',
    'variable', 'array', 'object', 'string', 'boolean', 'null', 'undefined',
    'console', 'debug', 'error', 'promise', 'callback', 'event', 'dom',
    'developer', 'programming', 'coding', 'software', 'computer', 'algorithm'
  ], []);

  const getRandomWord = useCallback(() => {
    return words[Math.floor(Math.random() * words.length)];
  }, [words]);

  const startGame = useCallback(() => {
    setIsActive(true);
    setScore(0);
    setTimeLeft(30);
    setGameOver(false);
    setCurrentWord(getRandomWord());
    setUserInput('');
    
    // Dispatch easter egg event
    const event = new CustomEvent('easterEggFound', {
      detail: { type: 'typing_game_started' }
    });
    document.dispatchEvent(event);
  }, [getRandomWord]);

  const endGame = useCallback(() => {
    setIsActive(false);
    setGameOver(true);
    
    // Dispatch score event
    const event = new CustomEvent('easterEggFound', {
      detail: { type: 'typing_game_completed', score }
    });
    document.dispatchEvent(event);
  }, [score]);

  useEffect(() => {
    if (isActive && timeLeft > 0) {
      const timer = setTimeout(() => setTimeLeft(timeLeft - 1), 1000);
      return () => clearTimeout(timer);
    } else if (timeLeft === 0) {
      endGame();
    }
  }, [isActive, timeLeft, endGame]);

  const handleInputChange = (e) => {
    const value = e.target.value;
    setUserInput(value);

    if (value === currentWord) {
      setScore(score + 1);
      setCurrentWord(getRandomWord());
      setUserInput('');
    }
  };

  const handleKeyDown = useCallback((e) => {
    // Secret activation: Type "typingame" anywhere on the page
    if (!isActive && !gameOver) {
      const secretCode = 'typingame';
      const recentKeys = document.body.dataset.recentKeys || '';
      const newKeys = (recentKeys + e.key).slice(-secretCode.length);
      document.body.dataset.recentKeys = newKeys;

      if (newKeys === secretCode) {
        startGame();
      }
    }
  }, [isActive, gameOver, startGame]);

  useEffect(() => {
    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [handleKeyDown]);

  if (!isActive && !gameOver) {
    return (
      <div className="fixed bottom-4 left-4 text-xs text-gray-400 opacity-50 z-50">
        💡 Hint: Type "typingame" to start a secret typing challenge!
      </div>
    );
  }

  if (!isActive && gameOver) {
    return (
      <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-black bg-opacity-80 text-white p-6 rounded-lg z-50">
        <h2 className="text-2xl font-bold mb-4 text-center">🎮 Game Over! 🎮</h2>
        <p className="text-center mb-4">Final Score: <span className="text-yellow-400 font-bold">{score}</span> words</p>
        <div className="flex justify-center space-x-4">
          <button
            onClick={startGame}
            className="bg-blue-500 hover:bg-blue-600 px-4 py-2 rounded transition-colors"
          >
            Play Again
          </button>
          <button
            onClick={() => setGameOver(false)}
            className="bg-gray-500 hover:bg-gray-600 px-4 py-2 rounded transition-colors"
          >
            Close
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-gradient-to-br from-blue-600 to-purple-600 text-white p-6 rounded-lg shadow-2xl z-50 min-w-96">
      <div className="text-center mb-4">
        <h2 className="text-2xl font-bold mb-2">⚡ Speed Typing Challenge ⚡</h2>
        <div className="flex justify-between text-sm">
          <span>Score: <span className="font-bold text-yellow-300">{score}</span></span>
          <span>Time: <span className="font-bold text-red-300">{timeLeft}s</span></span>
        </div>
      </div>
      
      <div className="text-center mb-4">
        <div className="text-3xl font-mono bg-white text-black px-4 py-2 rounded mb-4">
          {currentWord}
        </div>
        <input
          type="text"
          value={userInput}
          onChange={handleInputChange}
          placeholder="Type the word above..."
          className="w-full px-4 py-2 text-black rounded border-2 border-transparent focus:border-yellow-400 outline-none"
          autoFocus
        />
      </div>
      
      <div className="text-center text-sm opacity-80">
        Type the word as fast as you can!
      </div>
    </div>
  );
};

export default SecretTypingGame;
