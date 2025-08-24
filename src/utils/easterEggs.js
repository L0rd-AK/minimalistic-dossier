// Easter Eggs Manager
export class EasterEggManager {
  constructor() {
    this.achievements = JSON.parse(localStorage.getItem('easterEggAchievements') || '{}');
    this.clickCount = parseInt(localStorage.getItem('totalClicks') || '0');
    this.konamiCode = [];
    this.konamiSequence = [
      'ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown',
      'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight',
      'KeyB', 'KeyA'
    ];
    this.secretCommands = {
      'hack': this.activateHackerMode,
      'matrix': this.toggleMatrixMode,
      'rainbow': this.activateRainbowMode,
      'devmode': this.activateDevMode,
      'reset': this.resetEasterEggs,
      'achievements': this.showAchievements,
      'darkweb': this.activateDarkWebMode,
      'retro': this.activateRetroMode,
      'glitch': this.activateGlitchMode,
      'neon': this.activateNeonMode
    };
    
    this.init();
  }

  init() {
    this.setupKonamiCode();
    this.setupSecretConsole();
    this.setupClickTracking();
    this.setupKeyboardShortcuts();
    this.setupTimeBasedEggs();
    this.setupTextSelection();
    this.checkSpecialDates();
  }

  // Konami Code Implementation
  setupKonamiCode() {
    document.addEventListener('keydown', (e) => {
      this.konamiCode.push(e.code);
      if (this.konamiCode.length > this.konamiSequence.length) {
        this.konamiCode.shift();
      }
      
      if (JSON.stringify(this.konamiCode) === JSON.stringify(this.konamiSequence)) {
        this.unlockKonamiEasterEgg();
      }
    });
  }

  unlockKonamiEasterEgg() {
    this.unlockAchievement('konami_master', 'Konami Code Master!');
    this.showNotification('🎮 KONAMI CODE ACTIVATED! 🎮', 'You\'ve unlocked secret developer mode!');
    this.activateSecretMode();
  }

  activateSecretMode() {
    document.body.classList.add('konami-mode');
    
    // Add special effects
    const style = document.createElement('style');
    style.textContent = `
      .konami-mode {
        background: linear-gradient(45deg, #ff0000, #00ff00, #0000ff, #ffff00) !important;
        background-size: 400% 400% !important;
        animation: konamiGradient 3s ease infinite !important;
      }
      
      @keyframes konamiGradient {
        0% { background-position: 0% 50%; }
        50% { background-position: 100% 50%; }
        100% { background-position: 0% 50%; }
      }
      
      .konami-mode * {
        text-shadow: 0 0 10px rgba(255, 255, 255, 0.8) !important;
      }
    `;
    document.head.appendChild(style);

    // Auto-remove after 10 seconds
    setTimeout(() => {
      document.body.classList.remove('konami-mode');
      document.head.removeChild(style);
    }, 10000);
  }

  // Secret Console Commands
  setupSecretConsole() {
    const originalLog = console.log;
    
    // Override console.log to catch secret commands
    console.log = (...args) => {
      const input = args.join(' ').toLowerCase();
      
      Object.keys(this.secretCommands).forEach(command => {
        if (input.includes(command)) {
          this.secretCommands[command].call(this);
        }
      });
      
      originalLog.apply(console, args);
    };

    // Add secret methods to window for easy access
    window.easterEgg = {
      activate: (command) => {
        if (this.secretCommands[command]) {
          this.secretCommands[command].call(this);
        }
      },
      achievements: () => this.showAchievements(),
      reset: () => this.resetEasterEggs()
    };
  }

  activateHackerMode() {
    this.unlockAchievement('hacker', 'Elite Hacker');
    this.showNotification('🔰 HACKER MODE ACTIVATED 🔰', 'Matrix rain intensity increased!');
    
    // Trigger matrix rain intensification
    const event = new CustomEvent('easterEggActivated', {
      detail: { type: 'hacker', intensity: 2.0 }
    });
    document.dispatchEvent(event);
  }

  toggleMatrixMode() {
    this.unlockAchievement('matrix_god', 'Matrix God');
    const event = new CustomEvent('easterEggActivated', {
      detail: { type: 'matrix_toggle' }
    });
    document.dispatchEvent(event);
  }

  activateRainbowMode() {
    this.unlockAchievement('rainbow_master', 'Rainbow Master');
    this.showNotification('🌈 RAINBOW MODE ACTIVATED 🌈', 'Everything is colorful now!');
    
    const style = document.createElement('style');
    style.id = 'rainbow-mode';
    style.textContent = `
      .rainbow-mode * {
        animation: rainbow-text 2s linear infinite !important;
      }
      
      @keyframes rainbow-text {
        0% { color: #ff0000; }
        16.66% { color: #ff8000; }
        33.33% { color: #ffff00; }
        50% { color: #00ff00; }
        66.66% { color: #0080ff; }
        83.33% { color: #8000ff; }
        100% { color: #ff0000; }
      }
    `;
    document.head.appendChild(style);
    document.body.classList.add('rainbow-mode');

    setTimeout(() => {
      const rainbowStyle = document.getElementById('rainbow-mode');
      if (rainbowStyle) {
        document.head.removeChild(rainbowStyle);
        document.body.classList.remove('rainbow-mode');
      }
    }, 15000);
  }

  activateDevMode() {
    this.unlockAchievement('developer', 'Secret Developer');
    this.showNotification('👨‍💻 DEVELOPER MODE ACTIVATED 👨‍💻', 'Debug info enabled!');
    
    // Show debug information
    const debugPanel = document.createElement('div');
    debugPanel.id = 'debug-panel';
    debugPanel.style.cssText = `
      position: fixed;
      top: 10px;
      right: 10px;
      background: rgba(0, 0, 0, 0.8);
      color: #00ff00;
      padding: 10px;
      border-radius: 5px;
      font-family: monospace;
      z-index: 10000;
      font-size: 12px;
    `;
    
    const updateDebugInfo = () => {
      debugPanel.innerHTML = `
        <div>🐛 DEBUG MODE</div>
        <div>Clicks: ${this.clickCount}</div>
        <div>Achievements: ${Object.keys(this.achievements).length}</div>
        <div>Time: ${new Date().toLocaleTimeString()}</div>
        <div>Screen: ${window.innerWidth}x${window.innerHeight}</div>
        <div>User Agent: ${navigator.userAgent.split(' ')[0]}</div>
      `;
    };
    
    updateDebugInfo();
    document.body.appendChild(debugPanel);
    
    const interval = setInterval(updateDebugInfo, 1000);
    
    setTimeout(() => {
      if (document.getElementById('debug-panel')) {
        document.body.removeChild(debugPanel);
        clearInterval(interval);
      }
    }, 30000);
  }

  activateDarkWebMode() {
    this.unlockAchievement('dark_web', 'Dark Web Explorer');
    this.showNotification('🕵️ DARK WEB MODE ACTIVATED 🕵️', 'Welcome to the dark side...');
    
    const style = document.createElement('style');
    style.id = 'dark-web-mode';
    style.textContent = `
      .dark-web-mode {
        background: #000000 !important;
        color: #00ff00 !important;
        font-family: 'Courier New', monospace !important;
      }
      
      .dark-web-mode * {
        background: transparent !important;
        color: #00ff00 !important;
        border-color: #00ff00 !important;
        text-shadow: 0 0 5px #00ff00 !important;
      }
      
      .dark-web-mode a {
        color: #ff0000 !important;
        text-shadow: 0 0 5px #ff0000 !important;
      }
    `;
    document.head.appendChild(style);
    document.body.classList.add('dark-web-mode');

    setTimeout(() => {
      const darkStyle = document.getElementById('dark-web-mode');
      if (darkStyle) {
        document.head.removeChild(darkStyle);
        document.body.classList.remove('dark-web-mode');
      }
    }, 20000);
  }

  activateRetroMode() {
    this.unlockAchievement('retro_gamer', 'Retro Gamer');
    this.showNotification('📼 RETRO MODE ACTIVATED 📼', 'Welcome to the 80s!');
    
    const style = document.createElement('style');
    style.id = 'retro-mode';
    style.textContent = `
      .retro-mode {
        background: linear-gradient(45deg, #ff00ff, #00ffff) !important;
        background-size: 400% 400% !important;
        animation: retro-bg 4s ease infinite !important;
      }
      
      @keyframes retro-bg {
        0% { background-position: 0% 50%; }
        50% { background-position: 100% 50%; }
        100% { background-position: 0% 50%; }
      }
      
      .retro-mode * {
        font-family: 'Courier New', monospace !important;
        text-shadow: 2px 2px 0px #000000, 4px 4px 0px #ff00ff !important;
      }
    `;
    document.head.appendChild(style);
    document.body.classList.add('retro-mode');

    setTimeout(() => {
      const retroStyle = document.getElementById('retro-mode');
      if (retroStyle) {
        document.head.removeChild(retroStyle);
        document.body.classList.remove('retro-mode');
      }
    }, 15000);
  }

  activateGlitchMode() {
    this.unlockAchievement('glitch_master', 'Glitch Master');
    this.showNotification('⚡ GLITCH MODE ACTIVATED ⚡', 'Reality.exe has stopped working');
    
    const style = document.createElement('style');
    style.id = 'glitch-mode';
    style.textContent = `
      .glitch-mode * {
        animation: glitch 0.3s infinite !important;
      }
      
      @keyframes glitch {
        0% { transform: translate(0); }
        20% { transform: translate(-2px, 2px); }
        40% { transform: translate(-2px, -2px); }
        60% { transform: translate(2px, 2px); }
        80% { transform: translate(2px, -2px); }
        100% { transform: translate(0); }
      }
    `;
    document.head.appendChild(style);
    document.body.classList.add('glitch-mode');

    setTimeout(() => {
      const glitchStyle = document.getElementById('glitch-mode');
      if (glitchStyle) {
        document.head.removeChild(glitchStyle);
        document.body.classList.remove('glitch-mode');
      }
    }, 8000);
  }

  activateNeonMode() {
    this.unlockAchievement('neon_master', 'Neon Master');
    this.showNotification('💡 NEON MODE ACTIVATED 💡', 'Welcome to the neon city!');
    
    const style = document.createElement('style');
    style.id = 'neon-mode';
    style.textContent = `
      .neon-mode {
        background: #000011 !important;
      }
      
      .neon-mode * {
        color: #00ffff !important;
        text-shadow: 
          0 0 5px #00ffff,
          0 0 10px #00ffff,
          0 0 15px #00ffff,
          0 0 20px #00ffff !important;
        border: 1px solid #00ffff !important;
        box-shadow: 
          0 0 5px #00ffff,
          inset 0 0 5px #00ffff !important;
      }
    `;
    document.head.appendChild(style);
    document.body.classList.add('neon-mode');

    setTimeout(() => {
      const neonStyle = document.getElementById('neon-mode');
      if (neonStyle) {
        document.head.removeChild(neonStyle);
        document.body.classList.remove('neon-mode');
      }
    }, 12000);
  }

  // Click Tracking
  setupClickTracking() {
    document.addEventListener('click', (e) => {
      this.clickCount++;
      localStorage.setItem('totalClicks', this.clickCount.toString());
      
      // Achievement milestones
      if (this.clickCount === 10) {
        this.unlockAchievement('clicker', 'Clicker Novice');
      } else if (this.clickCount === 100) {
        this.unlockAchievement('super_clicker', 'Super Clicker');
      } else if (this.clickCount === 500) {
        this.unlockAchievement('click_master', 'Click Master');
      } else if (this.clickCount === 1000) {
        this.unlockAchievement('click_god', 'Click God');
        this.showNotification('🖱️ CLICK GOD ACHIEVED! 🖱️', 'You have clicked 1000 times!');
      }

      // Special click patterns
      if (e.detail === 3) { // Triple click
        this.handleTripleClick(e);
      }
    });
  }

  handleTripleClick(e) {
    this.unlockAchievement('triple_clicker', 'Triple Click Expert');
    
    // Create explosion effect at click position
    const explosion = document.createElement('div');
    explosion.style.cssText = `
      position: fixed;
      left: ${e.clientX}px;
      top: ${e.clientY}px;
      width: 20px;
      height: 20px;
      background: radial-gradient(circle, #ffff00, #ff0000);
      border-radius: 50%;
      transform: translate(-50%, -50%);
      animation: explode 0.6s ease-out forwards;
      pointer-events: none;
      z-index: 10000;
    `;
    
    const style = document.createElement('style');
    style.textContent = `
      @keyframes explode {
        0% { transform: translate(-50%, -50%) scale(0); opacity: 1; }
        100% { transform: translate(-50%, -50%) scale(10); opacity: 0; }
      }
    `;
    document.head.appendChild(style);
    document.body.appendChild(explosion);
    
    setTimeout(() => {
      document.body.removeChild(explosion);
      document.head.removeChild(style);
    }, 600);
  }

  // Keyboard Shortcuts
  setupKeyboardShortcuts() {
    document.addEventListener('keydown', (e) => {
      // Alt + Shift + E = Show Easter Eggs
      if (e.altKey && e.shiftKey && e.code === 'KeyE') {
        e.preventDefault();
        this.showAchievements();
      }
      
      // Ctrl + Shift + ? = Show Help
      if (e.ctrlKey && e.shiftKey && e.code === 'Slash') {
        e.preventDefault();
        this.showSecretHelp();
      }
      
      // Alt + Shift + R = Rainbow Mode
      if (e.altKey && e.shiftKey && e.code === 'KeyR') {
        e.preventDefault();
        this.activateRainbowMode();
      }
    });
  }

  showSecretHelp() {
    this.unlockAchievement('help_seeker', 'Help Seeker');
    
    const helpModal = document.createElement('div');
    helpModal.style.cssText = `
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: rgba(0, 0, 0, 0.8);
      display: flex;
      justify-content: center;
      align-items: center;
      z-index: 10000;
    `;
    
    helpModal.innerHTML = `
      <div style="background: white; padding: 20px; border-radius: 10px; max-width: 500px; max-height: 80%; overflow-y: auto;">
        <h2>🥚 Secret Easter Eggs Guide 🥚</h2>
        <p><strong>Console Commands:</strong></p>
        <ul>
          <li>console.log('hack') - Activate hacker mode</li>
          <li>console.log('matrix') - Toggle matrix</li>
          <li>console.log('rainbow') - Rainbow mode</li>
          <li>console.log('devmode') - Developer mode</li>
          <li>console.log('darkweb') - Dark web mode</li>
          <li>console.log('retro') - Retro 80s mode</li>
          <li>console.log('glitch') - Glitch effect</li>
          <li>console.log('neon') - Neon city mode</li>
        </ul>
        <p><strong>Keyboard Shortcuts:</strong></p>
        <ul>
          <li>↑↑↓↓←→←→BA - Konami Code</li>
          <li>Alt+Shift+E - Show achievements</li>
          <li>Alt+Shift+R - Rainbow mode</li>
          <li>Ctrl+Shift+? - This help</li>
        </ul>
        <p><strong>Hidden Features:</strong></p>
        <ul>
          <li>Triple-click anywhere for explosion</li>
          <li>Select text "secret" for surprises</li>
          <li>Visit on special dates for bonuses</li>
        </ul>
        <button onclick="this.parentElement.parentElement.remove()" style="margin-top: 10px; padding: 5px 10px;">Close</button>
      </div>
    `;
    
    document.body.appendChild(helpModal);
  }

  // Text Selection Easter Eggs
  setupTextSelection() {
    document.addEventListener('mouseup', () => {
      const selection = window.getSelection().toString().toLowerCase();
      
      if (selection.includes('secret')) {
        this.unlockAchievement('secret_finder', 'Secret Finder');
        this.showNotification('🔍 SECRET FOUND! 🔍', 'You found a hidden secret in the text!');
      }
      
      if (selection.includes('easter egg')) {
        this.unlockAchievement('egg_hunter', 'Easter Egg Hunter');
        this.activateRainbowMode();
      }
      
      if (selection.includes('amit kumar ghosh')) {
        this.unlockAchievement('name_selector', 'Name Selector');
        this.showNotification('👨‍💻 NAME SELECTED! 👨‍💻', 'You selected the developer\'s name!');
      }
    });
  }

  // Time-based Easter Eggs
  setupTimeBasedEggs() {
    const now = new Date();
    const hour = now.getHours();
    
    // Late night coding mode (11 PM to 5 AM)
    if (hour >= 23 || hour <= 5) {
      this.unlockAchievement('night_owl', 'Night Owl Developer');
      this.showNotification('🦉 NIGHT OWL MODE 🦉', 'Coding late at night? Respect!');
    }
    
    // Early bird mode (5 AM to 7 AM)
    if (hour >= 5 && hour <= 7) {
      this.unlockAchievement('early_bird', 'Early Bird');
      this.showNotification('🐦 EARLY BIRD MODE 🐦', 'Early morning developer spotted!');
    }
  }

  // Special Date Checker
  checkSpecialDates() {
    const now = new Date();
    const month = now.getMonth() + 1;
    const day = now.getDate();
    
    // April 1st - April Fools
    if (month === 4 && day === 1) {
      this.unlockAchievement('april_fool', 'April Fool');
      this.activateGlitchMode();
      this.showNotification('🤡 APRIL FOOLS! 🤡', 'Hope you enjoyed the glitch!');
    }
    
    // Halloween
    if (month === 10 && day === 31) {
      this.unlockAchievement('halloween', 'Halloween Visitor');
      this.activateDarkWebMode();
    }
    
    // Christmas
    if (month === 12 && day === 25) {
      this.unlockAchievement('christmas', 'Christmas Visitor');
      this.showNotification('🎄 MERRY CHRISTMAS! 🎄', 'Ho ho ho!');
    }
  }

  // Utility Methods
  unlockAchievement(id, name) {
    if (!this.achievements[id]) {
      this.achievements[id] = {
        name,
        unlockedAt: new Date().toISOString()
      };
      localStorage.setItem('easterEggAchievements', JSON.stringify(this.achievements));
      this.showNotification(`🏆 ACHIEVEMENT UNLOCKED! 🏆`, name);
    }
  }

  showNotification(title, message) {
    // Create notification element
    const notification = document.createElement('div');
    notification.style.cssText = `
      position: fixed;
      top: 20px;
      right: 20px;
      background: linear-gradient(45deg, #ff6b6b, #4ecdc4);
      color: white;
      padding: 15px;
      border-radius: 10px;
      box-shadow: 0 4px 20px rgba(0, 0, 0, 0.3);
      z-index: 10000;
      max-width: 300px;
      animation: slideIn 0.5s ease-out;
      font-family: Arial, sans-serif;
    `;
    
    notification.innerHTML = `
      <div style="font-weight: bold; margin-bottom: 5px;">${title}</div>
      <div style="font-size: 14px;">${message}</div>
    `;
    
    // Add slide-in animation
    const style = document.createElement('style');
    style.textContent = `
      @keyframes slideIn {
        from { transform: translateX(100%); opacity: 0; }
        to { transform: translateX(0); opacity: 1; }
      }
    `;
    document.head.appendChild(style);
    
    document.body.appendChild(notification);
    
    // Auto-remove after 4 seconds
    setTimeout(() => {
      notification.style.animation = 'slideIn 0.5s ease-out reverse';
      setTimeout(() => {
        if (notification.parentElement) {
          document.body.removeChild(notification);
        }
        if (style.parentElement) {
          document.head.removeChild(style);
        }
      }, 500);
    }, 4000);
  }

  showAchievements() {
    const achievementsList = Object.entries(this.achievements);
    
    const modal = document.createElement('div');
    modal.style.cssText = `
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: rgba(0, 0, 0, 0.8);
      display: flex;
      justify-content: center;
      align-items: center;
      z-index: 10000;
    `;
    
    modal.innerHTML = `
      <div style="background: white; padding: 20px; border-radius: 10px; max-width: 600px; max-height: 80%; overflow-y: auto;">
        <h2>🏆 Easter Egg Achievements 🥚</h2>
        <p>Total Clicks: ${this.clickCount}</p>
        <p>Achievements Unlocked: ${achievementsList.length}</p>
        <div style="margin: 10px 0;">
          ${achievementsList.length === 0 ? 
            '<p>No achievements unlocked yet. Keep exploring!</p>' :
            achievementsList.map(([id, achievement]) => 
              `<div style="margin: 5px 0; padding: 5px; background: #f0f0f0; border-radius: 5px;">
                🏆 ${achievement.name} - ${new Date(achievement.unlockedAt).toLocaleDateString()}
              </div>`
            ).join('')
          }
        </div>
        <button onclick="this.parentElement.parentElement.remove()" style="margin-top: 10px; padding: 5px 10px;">Close</button>
      </div>
    `;
    
    document.body.appendChild(modal);
  }

  resetEasterEggs() {
    localStorage.removeItem('easterEggAchievements');
    localStorage.removeItem('totalClicks');
    this.achievements = {};
    this.clickCount = 0;
    this.showNotification('🔄 RESET COMPLETE 🔄', 'All easter eggs have been reset!');
  }
}

// Initialize easter eggs when the module is loaded
export const easterEggManager = new EasterEggManager();

// Export individual functions for external use
export const {
  unlockAchievement,
  showNotification,
  showAchievements,
  resetEasterEggs
} = easterEggManager;
