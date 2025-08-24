import React, { useEffect, useState } from 'react';

const FloatingEasterEgg = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);
  const [emoji, setEmoji] = useState('🥚');
  const [explosionParticles, setExplosionParticles] = useState([]);

  const emojis = React.useMemo(() => ['🥚', '🐰', '🎁', '💎', '⭐', '🎉', '🔥', '⚡', '🌟', '💫'], []);
  const explosionEmojis = React.useMemo(() => ['✨', '💥', '⭐', '🌟', '💫', '🎆', '🎇'], []);

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

  const createExplosion = (clickX, clickY) => {
    const particles = [];
    const particleCount = 8;
    
    for (let i = 0; i < particleCount; i++) {
      const angle = (i / particleCount) * Math.PI * 2;
      const velocity = 50 + Math.random() * 30;
      const particle = {
        id: Math.random(),
        x: clickX,
        y: clickY,
        vx: Math.cos(angle) * velocity,
        vy: Math.sin(angle) * velocity,
        emoji: explosionEmojis[Math.floor(Math.random() * explosionEmojis.length)],
        life: 1
      };
      particles.push(particle);
    }
    
    setExplosionParticles(particles);
    
    // Animate particles
    const animateParticles = () => {
      setExplosionParticles(prevParticles => {
        const updatedParticles = prevParticles.map(particle => ({
          ...particle,
          x: particle.x + particle.vx * 0.02,
          y: particle.y + particle.vy * 0.02,
          vy: particle.vy + 2, // gravity
          life: particle.life - 0.02
        })).filter(particle => particle.life > 0);
        
        if (updatedParticles.length > 0) {
          requestAnimationFrame(animateParticles);
        }
        
        return updatedParticles;
      });
    };
    
    requestAnimationFrame(animateParticles);
  };

  const handleClick = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const clickX = position.x + rect.width / 2;
    const clickY = position.y + rect.height / 2;
    
    // Create explosion effect
    createExplosion(clickX, clickY);
    
    setIsVisible(false);
    
    // Dispatch custom event for easter egg manager
    const event = new CustomEvent('easterEggFound', {
      detail: { type: 'floating_egg', emoji }
    });
    document.dispatchEvent(event);
  };

  return (
    <>
      {isVisible && (
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
        </div>
      )}
      
      {/* Explosion particles */}
      {explosionParticles.map(particle => (
        <div
          key={particle.id}
          style={{
            position: 'fixed',
            left: particle.x,
            top: particle.y,
            fontSize: '20px',
            pointerEvents: 'none',
            zIndex: 10000,
            opacity: particle.life,
            transform: `scale(${particle.life})`,
            userSelect: 'none'
          }}
        >
          {particle.emoji}
        </div>
      ))}
      
      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
      `}</style>
    </>
  );
};

export default FloatingEasterEgg;
