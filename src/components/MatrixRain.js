import React, { useEffect, useRef, useState, useCallback } from 'react';
import './MatrixRain.css';

const MatrixRain = ({ intensity = 0.3, speed = 50 }) => {
  const canvasRef = useRef(null);
  const animationRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  const [currentIntensity, setCurrentIntensity] = useState(intensity);
  const [currentSpeed, setCurrentSpeed] = useState(speed);
  const [hackerMode, setHackerMode] = useState(false);

  // Programming terms, skills, and code snippets related to the portfolio
  const matrixChars = React.useMemo(() => [
    // Programming languages
    'JavaScript', 'C++', 'HTML', 'CSS', 'React', 'Node.js','PostgreSQL','SQL','Prisma',
    // Technical terms
    'MongoDB', 'Express', 'API', 'JSON', 'DOM', 'HTTP', 'CRUD', 'REST',
    // Code symbols and syntax
    '{', '}', '[', ']', '(', ')', ';', ':', '=', '+', '-', '*', '/', '%',
    // Binary and hex
    '0', '1', '0x', 'FF', 'null', 'true', 'false','undefined',
    // Portfolio specific terms
    'Amit', 'Kumar', 'Ghosh', 'DIU', 'Dhaka', 'FullStack', 'WebDev',
    // Function keywords
    'function', 'const', 'let', 'var', 'return', 'if', 'else', 'for', 'while',
    // Special characters
    '⚡', '🚀', '💻', '🔥', '⭐', '🎯', '🛠️', '📊',
    // More technical terms
    'async', 'await', 'promise', 'callback', 'event', 'listener', 'handler',
    // Easter egg terms
    'EasterEgg', 'Secret', 'Hidden', 'Konami', 'Achievement', '🥚', '🎮'
  ], []);

  // Easter egg event listener
  const handleEasterEggEvent = useCallback((event) => {
    const { type, intensity: newIntensity } = event.detail;
    
    switch (type) {
      case 'hacker':
        setHackerMode(true);
        setCurrentIntensity(newIntensity || 2.0);
        setCurrentSpeed(20);
        setTimeout(() => {
          setHackerMode(false);
          setCurrentIntensity(intensity);
          setCurrentSpeed(speed);
        }, 10000);
        break;
      case 'matrix_toggle':
        setIsVisible(prev => !prev);
        break;
      default:
        break;
    }
  }, [intensity, speed]);

  useEffect(() => {
    document.addEventListener('easterEggActivated', handleEasterEggEvent);
    return () => {
      document.removeEventListener('easterEggActivated', handleEasterEggEvent);
    };
  }, [handleEasterEggEvent]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    let particles = [];
    let particleCount = 0;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      particleCount = Math.floor(canvas.width / 30); // More spacing for physics
      
      // Initialize particles with physics properties
      particles = Array(particleCount).fill(0).map((_, index) => ({
        x: index * 30 + 15, // Fixed x position for columns
        y: Math.random() * canvas.height - 100,
        vx: 0, // Velocity x
        vy: Math.random() * 2 + 1, // Velocity y
        char: matrixChars[Math.floor(Math.random() * matrixChars.length)],
        opacity: Math.random() * 0.5 + 0.1,
        size: 14,
        mass: Math.random() * 0.5 + 0.5, // Mass for physics calculations
        crashed: false,
        crashTime: 0,
        crashParticles: [], // Explosion particles
        bounceCount: 0,
        maxBounces: Math.floor(Math.random() * 3) + 1,
        trail: [] // Trail effect for movement
      }));
    };

    // Physics collision detection
    const checkCollision = (p1, p2) => {
      const dx = p1.x - p2.x;
      const dy = p1.y - p2.y;
      const distance = Math.sqrt(dx * dx + dy * dy);
      const minDistance = (p1.size + p2.size) / 2;
      return distance < minDistance;
    };

    // Handle collision physics
    const handleCollision = (p1, p2) => {
      // Calculate collision vector
      const dx = p2.x - p1.x;
      const dy = p2.y - p1.y;
      const distance = Math.sqrt(dx * dx + dy * dy);
      
      if (distance === 0) return; // Prevent division by zero

      // Normalize collision vector
      const nx = dx / distance;
      const ny = dy / distance;

      // Relative velocity
      const dvx = p2.vx - p1.vx;
      const dvy = p2.vy - p1.vy;

      // Relative velocity along normal
      const dvn = dvx * nx + dvy * ny;

      // Do not resolve if velocities are separating
      if (dvn > 0) return;

      // Collision impulse
      const impulse = 2 * dvn / (p1.mass + p2.mass);

      // Update velocities with elastic collision
      p1.vx += impulse * p2.mass * nx;
      p1.vy += impulse * p2.mass * ny;
      p2.vx -= impulse * p1.mass * nx;
      p2.vy -= impulse * p1.mass * ny;

      // Add some energy loss and randomness for realistic effect
      const energyLoss = 0.8;
      p1.vx *= energyLoss;
      p1.vy *= energyLoss;
      p2.vx *= energyLoss;
      p2.vy *= energyLoss;

      // Create crash effect
      createCrashEffect(p1, p2);
    };

    // Create visual crash effect
    const createCrashEffect = (p1, p2) => {
      const crashX = (p1.x + p2.x) / 2;
      const crashY = (p1.y + p2.y) / 2;

      // Create explosion particles
      for (let i = 0; i < 8; i++) {
        const angle = (i / 8) * Math.PI * 2;
        const speed = Math.random() * 3 + 2;
        
        p1.crashParticles.push({
          x: crashX,
          y: crashY,
          vx: Math.cos(angle) * speed,
          vy: Math.sin(angle) * speed,
          life: 30,
          maxLife: 30,
          char: Math.random() < 0.5 ? '*' : '+'
        });
      }

      // Mark as crashed temporarily
      p1.crashed = true;
      p2.crashed = true;
      p1.crashTime = 15;
      p2.crashTime = 15;

      // Change characters on collision
      p1.char = ['!', '*', '#', '@', '%'][Math.floor(Math.random() * 5)];
      p2.char = ['!', '*', '#', '@', '%'][Math.floor(Math.random() * 5)];
    };

    const animate = () => {
      // Create trail effect
      ctx.fillStyle = hackerMode ? 'rgba(0, 0, 0, 0.05)' : 'rgba(255, 255, 255, 0.05)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Update physics for each particle
      particles.forEach((particle, index) => {
        // Update trail
        particle.trail.push({ x: particle.x, y: particle.y });
        if (particle.trail.length > 5) {
          particle.trail.shift();
        }

        // Apply gravity and movement
        if (!particle.crashed) {
          particle.vy += 0.01; // Gravity
          particle.x += particle.vx;
          particle.y += particle.vy * (hackerMode ? currentSpeed : speed) / 50;

          // Boundary collision with walls
          if (particle.x <= 0 || particle.x >= canvas.width) {
            particle.vx *= -0.7; // Bounce with energy loss
            particle.x = Math.max(0, Math.min(canvas.width, particle.x));
            particle.bounceCount++;
          }

          // Check for collisions with other particles
          for (let j = index + 1; j < particles.length; j++) {
            const other = particles[j];
            if (!other.crashed && checkCollision(particle, other)) {
              handleCollision(particle, other);
            }
          }
        } else {
          // Handle crash state
          particle.crashTime--;
          if (particle.crashTime <= 0) {
            particle.crashed = false;
            particle.char = matrixChars[Math.floor(Math.random() * matrixChars.length)];
          }
        }

        // Update crash particles
        particle.crashParticles = particle.crashParticles.filter(cp => {
          cp.x += cp.vx;
          cp.y += cp.vy;
          cp.vy += 0.1; // Gravity on crash particles
          cp.life--;
          return cp.life > 0;
        });

        // Reset if off screen or bounced too much
        if (particle.y > canvas.height + 50 || particle.bounceCount > particle.maxBounces) {
          particle.y = -50;
          particle.x = index * 30 + 15 + (Math.random() - 0.5) * 10; // Add some randomness
          particle.vx = (Math.random() - 0.5) * 2;
          particle.vy = Math.random() * 2 + 1;
          particle.char = matrixChars[Math.floor(Math.random() * matrixChars.length)];
          particle.opacity = Math.random() * 0.5 + 0.1;
          particle.bounceCount = 0;
          particle.crashed = false;
          particle.crashParticles = [];
          particle.trail = [];
        }

        // Randomly change characters
        if (Math.random() < 0.005) {
          particle.char = matrixChars[Math.floor(Math.random() * matrixChars.length)];
        }
      });

      // Render everything
      particles.forEach(particle => {
        // Draw trail
        particle.trail.forEach((trailPoint, trailIndex) => {
          const trailOpacity = (trailIndex / particle.trail.length) * particle.opacity * 0.3;
          ctx.font = '12px "Courier New", monospace';
          ctx.textAlign = 'center';
          
          if (hackerMode) {
            ctx.fillStyle = `rgba(0, 255, 0, ${trailOpacity})`;
          } else {
            ctx.fillStyle = `rgba(0, 0, 0, ${trailOpacity})`;
          }
          
          ctx.fillText('·', trailPoint.x, trailPoint.y);
        });

        // Set text properties
        ctx.font = `${particle.size}px "Courier New", monospace`;
        ctx.textAlign = 'center';

        // Create gradient effect
        const gradient = ctx.createLinearGradient(0, particle.y - 100, 0, particle.y + 20);
        
        if (particle.crashed) {
          // Crash effect - red/orange colors
          gradient.addColorStop(0, `rgba(255, 0, 0, 0)`);
          gradient.addColorStop(0.7, `rgba(255, 165, 0, ${particle.opacity * 0.8})`);
          gradient.addColorStop(1, `rgba(255, 0, 0, ${particle.opacity * 1.0})`);
        } else if (hackerMode) {
          gradient.addColorStop(0, `rgba(0, 255, 0, 0)`);
          gradient.addColorStop(0.7, `rgba(0, 255, 0, ${particle.opacity * 0.8})`);
          gradient.addColorStop(1, `rgba(0, 255, 0, ${particle.opacity * 1.0})`);
        } else {
          gradient.addColorStop(0, `rgba(0, 0, 0, 0)`);
          gradient.addColorStop(0.7, `rgba(0, 0, 0, ${particle.opacity * 0.6})`);
          gradient.addColorStop(1, `rgba(0, 0, 0, ${particle.opacity * 0.8})`);
        }

        ctx.fillStyle = gradient;

        // Draw the main character with shake effect if crashed
        let drawX = particle.x;
        let drawY = particle.y;
        
        if (particle.crashed) {
          drawX += (Math.random() - 0.5) * 4;
          drawY += (Math.random() - 0.5) * 4;
        }

        ctx.fillText(particle.char, drawX, drawY);

        // Draw crash particles
        particle.crashParticles.forEach(cp => {
          const life = cp.life / cp.maxLife;
          ctx.font = '10px "Courier New", monospace';
          ctx.fillStyle = `rgba(255, ${100 * life}, 0, ${life})`;
          ctx.fillText(cp.char, cp.x, cp.y);
        });

        // Draw velocity indicator for debugging (optional)
        if (hackerMode && (Math.abs(particle.vx) > 0.1 || Math.abs(particle.vy) > 2)) {
          ctx.strokeStyle = 'rgba(0, 255, 255, 0.5)';
          ctx.lineWidth = 1;
          ctx.beginPath();
          ctx.moveTo(particle.x, particle.y);
          ctx.lineTo(particle.x + particle.vx * 10, particle.y + particle.vy * 10);
          ctx.stroke();
        }
      });

      if (isVisible) {
        animationRef.current = requestAnimationFrame(animate);
      }
    };

    // Initialize
    resizeCanvas();
    animate();

    // Handle resize
    window.addEventListener('resize', resizeCanvas);

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [currentIntensity, currentSpeed, isVisible, matrixChars, hackerMode, speed]);

  // Toggle visibility on click (Easter egg)
  const toggleMatrix = () => {
    setIsVisible(!isVisible);
  };

  return (
    <>
      <canvas
        ref={canvasRef}
        className={`matrix-rain ${isVisible ? 'visible' : 'hidden'}`}
        onClick={toggleMatrix}
        title="Click to toggle Matrix effect"
      />
      <div className="matrix-toggle" onClick={toggleMatrix} title={isVisible ? "Hide Matrix Rain" : "Show Matrix Rain"}>
        <span className="matrix-toggle-icon">⚡</span>
      </div>
    </>
  );
};

export default MatrixRain;
