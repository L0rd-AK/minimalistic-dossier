import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet-async';

const SecretPage = () => {
  const [secretLevel, setSecretLevel] = useState(1);
  const [showSecret, setShowSecret] = useState(false);

  useEffect(() => {
    // Unlock achievement for finding the secret page
    const event = new CustomEvent('easterEggFound', {
      detail: { type: 'secret_page', level: secretLevel }
    });
    document.dispatchEvent(event);

    setShowSecret(true);
  }, [secretLevel]);

  const secrets = [
    {
      title: "🔒 Secret Level 1: The Beginning",
      content: "Congratulations! You've found the secret page. This is just the beginning...",
      hint: "Try typing 'matrix' in the console for more secrets!"
    },
    {
      title: "🔐 Secret Level 2: The Matrix",
      content: "You're getting deeper into the rabbit hole. The Matrix has you...",
      hint: "Have you tried the Konami Code? ↑↑↓↓←→←→BA"
    },
    {
      title: "🔓 Secret Level 3: The Truth",
      content: "You've unlocked the deepest secret. Amit is actually a coffee-powered debugging machine.",
      hint: "Check out the floating easter eggs around the site!"
    }
  ];

  const currentSecret = secrets[Math.min(secretLevel - 1, secrets.length - 1)];

  return (
    <>
      <Helmet>
        <title>🤫 Secret Page - Amit Kumar Ghosh</title>
        <meta name="description" content="Shh... this is a secret page! 🤫" />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 text-white p-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-6xl font-bold mb-4 animate-pulse">
              🕵️‍♂️ SECRET ZONE 🕵️‍♀️
            </h1>
            <p className="text-xl opacity-80">
              Welcome to the hidden realm of easter eggs!
            </p>
          </div>

          {showSecret && (
            <div className="bg-black bg-opacity-30 backdrop-blur-lg rounded-xl p-8 mb-8 border border-white border-opacity-20">
              <h2 className="text-3xl font-bold mb-4 text-center text-yellow-300">
                {currentSecret.title}
              </h2>
              <p className="text-lg mb-6 text-center leading-relaxed">
                {currentSecret.content}
              </p>
              <div className="bg-yellow-900 bg-opacity-50 rounded-lg p-4 border-l-4 border-yellow-400">
                <p className="text-yellow-200">
                  <strong>💡 Hint:</strong> {currentSecret.hint}
                </p>
              </div>
            </div>
          )}

          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-xl p-6">
              <h3 className="text-2xl font-bold mb-4 text-green-300">🎮 Console Commands</h3>
              <div className="space-y-2 font-mono text-sm">
                <div>console.log('hack')</div>
                <div>console.log('matrix')</div>
                <div>console.log('rainbow')</div>
                <div>console.log('devmode')</div>
                <div>console.log('glitch')</div>
                <div>console.log('neon')</div>
                <div>console.log('retro')</div>
                <div>console.log('darkweb')</div>
              </div>
            </div>

            <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-xl p-6">
              <h3 className="text-2xl font-bold mb-4 text-blue-300">⌨️ Keyboard Shortcuts</h3>
              <div className="space-y-2 text-sm">
                <div><span className="font-mono">↑↑↓↓←→←→BA</span> - Konami Code</div>
                <div><span className="font-mono">Alt+Shift+E</span> - Show Achievements</div>
                <div><span className="font-mono">Alt+Shift+R</span> - Rainbow Mode</div>
                <div><span className="font-mono">Ctrl+Shift+?</span> - Help</div>
                <div><span className="font-mono">Triple-click</span> - Explosion Effect</div>
              </div>
            </div>
          </div>

          <div className="bg-red-900 bg-opacity-30 rounded-xl p-6 mb-8 border border-red-500 border-opacity-50">
            <h3 className="text-2xl font-bold mb-4 text-red-300">🚨 Secret Achievements</h3>
            <div className="grid md:grid-cols-3 gap-4 text-sm">
              <div>🏆 Konami Master</div>
              <div>🖱️ Click God (1000 clicks)</div>
              <div>🌈 Rainbow Master</div>
              <div>👨‍💻 Secret Developer</div>
              <div>🔰 Elite Hacker</div>
              <div>🕵️ Dark Web Explorer</div>
              <div>📼 Retro Gamer</div>
              <div>⚡ Glitch Master</div>
              <div>💡 Neon Master</div>
              <div>🦉 Night Owl Developer</div>
              <div>🐦 Early Bird</div>
              <div>🔍 Secret Finder</div>
            </div>
          </div>

          <div className="text-center">
            <button
              onClick={() => setSecretLevel(prev => prev + 1)}
              className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-3 rounded-full font-bold text-lg hover:from-purple-700 hover:to-pink-700 transition-all duration-300 transform hover:scale-105"
            >
              Unlock Next Secret Level 🔓
            </button>
          </div>

          <div className="mt-12 text-center opacity-60">
            <p className="text-sm">
              "The best easter eggs are the ones that make you smile." - Anonymous Developer
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default SecretPage;
