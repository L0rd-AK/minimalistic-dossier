import React, { useEffect, useRef, useState } from 'react';
import './MatrixRain.css';

const MatrixRain = ({ intensity = 0.3, speed = 50 }) => {
  const canvasRef = useRef(null);
  const animationRef = useRef(null);
  const [isVisible, setIsVisible] = useState(true);

  // Programming terms, skills, and code snippets related to the portfolio
  const matrixChars = useRef([
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
    'async', 'await', 'promise', 'callback', 'event', 'listener', 'handler'
  ]).current;

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    let columns = [];
    let columnCount = 0;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      columnCount = Math.floor(canvas.width / 20);
      
      // Initialize columns
      columns = Array(columnCount).fill(0).map(() => ({
        y: Math.random() * canvas.height,
        speed: Math.random() * 2 + 1,
        char: matrixChars[Math.floor(Math.random() * matrixChars.length)],
        opacity: Math.random() * 0.5 + 0.1
      }));
    };

    const animate = () => {
      // Create trail effect with white background
      ctx.fillStyle = 'rgba(255, 255, 255, 0.05)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      columns.forEach((column, index) => {
        // Set text properties
        ctx.font = '14px "Courier New", monospace';
        ctx.textAlign = 'center';
        
        // Create gradient effect - black text on white background
        const gradient = ctx.createLinearGradient(0, column.y - 100, 0, column.y + 20);
        gradient.addColorStop(0, `rgba(0, 0, 0, 0)`);
        gradient.addColorStop(0.7, `rgba(0, 0, 0, ${column.opacity * 0.6})`);
        gradient.addColorStop(1, `rgba(0, 0, 0, ${column.opacity * 0.8})`);
        
        ctx.fillStyle = gradient;
        
        // Draw the character
        ctx.fillText(column.char, index * 20 + 10, column.y);
        
        // Update position
        column.y += column.speed * speed / 50;
        
        // Reset when off screen or randomly change character
        if (column.y > canvas.height + 50 || Math.random() < 0.002) {
          column.y = -50;
          column.char = matrixChars[Math.floor(Math.random() * matrixChars.length)];
          column.speed = Math.random() * 2 + 0.5;
          column.opacity = Math.random() * 0.5 + 0.1;
        }
        
        // Randomly change characters for animation effect
        if (Math.random() < 0.01) {
          column.char = matrixChars[Math.floor(Math.random() * matrixChars.length)];
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
  }, [intensity, speed, isVisible]);

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
      <div className="matrix-toggle" onClick={toggleMatrix}>
        <span className="matrix-toggle-icon">⚡</span>
      </div>
    </>
  );
};

export default MatrixRain;
