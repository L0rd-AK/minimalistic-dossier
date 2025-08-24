import React, { useState, useEffect } from 'react';

const RandomJoke = () => {
  const [joke, setJoke] = useState('');
  const [isVisible, setIsVisible] = useState(false);

  const programmingJokes = React.useMemo(() => [
    "Why do programmers prefer dark mode? Because light attracts bugs! 🐛",
    "There are only 10 types of people in the world: those who understand binary and those who don't. 🔢",
    "99 little bugs in the code, 99 little bugs. Take one down, patch it around, 117 little bugs in the code. 🐛➡️🐛🐛🐛",
    "A SQL query goes into a bar, walks up to two tables and asks... 'Can I join you?' 🍺",
    "Why do Java developers wear glasses? Because they can't C#! 👓",
    "How many programmers does it take to change a light bulb? None, that's a hardware problem. 💡",
    "I would tell you a UDP joke, but you might not get it. 📡",
    "There's no place like 127.0.0.1 🏠",
    "Why did the programmer quit his job? He didn't get arrays! (a raise) 💰",
    "It works on my machine! 🖥️",
    "Code never lies, comments sometimes do. 💬",
    "Debugging is like being the detective in a crime movie where you are also the murderer. 🕵️‍♂️",
    "In order to understand recursion, you must first understand recursion. 🔄",
    "I'm not a great programmer; I'm just a good programmer with great habits. ⭐",
    "Programming is 10% science, 20% ingenuity, and 70% getting the ingenuity to work with the science. 🔬"
  ], []);

  useEffect(() => {
    const showJoke = () => {
      if (Math.random() < 0.05) { // 5% chance every 15 seconds
        const randomJoke = programmingJokes[Math.floor(Math.random() * programmingJokes.length)];
        setJoke(randomJoke);
        setIsVisible(true);
        
        // Dispatch easter egg event
        const event = new CustomEvent('easterEggFound', {
          detail: { type: 'programming_joke', joke: randomJoke }
        });
        document.dispatchEvent(event);

        // Hide after 5 seconds
        setTimeout(() => setIsVisible(false), 5000);
      }
    };

    const interval = setInterval(showJoke, 15000); // Check every 15 seconds
    return () => clearInterval(interval);
  }, [programmingJokes]);

  if (!isVisible) return null;

  return (
    <div
      className="fixed bottom-4 right-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white p-4 rounded-lg shadow-lg max-w-sm z-50 animate-bounce"
      onClick={() => setIsVisible(false)}
      style={{ cursor: 'pointer' }}
    >
      <div className="flex items-start space-x-2">
        <span className="text-2xl">😄</span>
        <div>
          <div className="font-bold text-sm">Programming Joke</div>
          <div className="text-sm mt-1">{joke}</div>
          <div className="text-xs mt-2 opacity-75">Click to dismiss</div>
        </div>
      </div>
    </div>
  );
};

export default RandomJoke;
