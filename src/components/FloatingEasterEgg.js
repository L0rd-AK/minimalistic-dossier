import React, { useEffect, useState } from 'react';

const FloatingEasterEgg = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);
  const [emoji, setEmoji] = useState('🥚');

  const emojis = React.useMemo(() => ['🥚', '🐰', '🎁', '💎', '⭐', '🎉', '🔥', '⚡', '🌟', '💫'], []);

  useEffect(() => {
    const showRandomEgg = () => {
      if (Math.random() < 0.1) { // 10% chance every interval
        setEmoji(emojis[Math.floor(Math.random() * emojis.length)]);
        setPosition({
          x: Math.random() * (window.innerWidth - 50),
          y: Math.random() * (window.innerHeight - 50)
        });
        setIsVisible(true);

        // Hide after 3 seconds
        setTimeout(() => setIsVisible(false), 3000);
      }
    };

    const interval = setInterval(showRandomEgg, 10000); // Check every 10 seconds
    return () => clearInterval(interval);
  }, [emojis]);

  const handleClick = () => {
    setIsVisible(false);
    
    // Dispatch custom event for easter egg manager
    const event = new CustomEvent('easterEggFound', {
      detail: { type: 'floating_egg', emoji }
    });
    document.dispatchEvent(event);
  };

  if (!isVisible) return null;

  return (
    <div
      onClick={handleClick}
      style={{
        position: 'fixed',
        left: position.x,
        top: position.y,
        fontSize: '30px',
        cursor: 'pointer',
        zIndex: 9999,
        animation: 'float 2s ease-in-out infinite',
        userSelect: 'none'
      }}
      title="Click me! I'm a floating easter egg!"
    >
      {emoji}
      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
      `}</style>
    </div>
  );
};

export default FloatingEasterEgg;
