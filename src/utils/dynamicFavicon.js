const favicons = [
  { emoji: '👨‍💻', time: [9, 17] }, // Working hours
  { emoji: '💤', time: [0, 6] },    // Sleep time
  { emoji: '🌙', time: [18, 23] },  // Evening
  { emoji: '☀️', time: [7, 8] }     // Morning
];

const randomEmojis = ['🚀', '💻', '⚡', '🎯', '🎨', '🔮', '🎪', '🎭', '🎪'];
let notificationCount = 0;
let isOnline = navigator.onLine;

export function setNotificationCount(count) {
  notificationCount = count;
  updateFavicon();
}

function drawFavicon(ctx, emoji) {
  ctx.clearRect(0, 0, 32, 32);
  
  // Draw main emoji
  ctx.font = '24px serif';
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  ctx.fillText(emoji, 16, 16);

  // Draw notification count if exists
  if (notificationCount > 0) {
    ctx.fillStyle = '#FF0000';
    ctx.beginPath();
    ctx.arc(24, 8, 8, 0, 2 * Math.PI);
    ctx.fill();
    ctx.fillStyle = '#FFFFFF';
    ctx.font = '12px Arial';
    ctx.fillText(notificationCount, 24, 8);
  }

  // Draw offline indicator
  if (!isOnline) {
    ctx.fillStyle = '#FF0000';
    ctx.beginPath();
    ctx.arc(8, 24, 4, 0, 2 * Math.PI);
    ctx.fill();
  }
}

let lastUpdate = 0;
let scheduledUpdate = null;
let cachedCanvas = null;

// Throttle updates to max once per second
const THROTTLE_TIME = 1000;

// Cache canvas creation
function getCanvas() {
  if (!cachedCanvas) {
    cachedCanvas = document.createElement('canvas');
    cachedCanvas.width = 32;
    cachedCanvas.height = 32;
  }
  return cachedCanvas;
}

export function updateFavicon() {
  const now = Date.now();
  
  // Throttle updates
  if (now - lastUpdate < THROTTLE_TIME) {
    if (!scheduledUpdate) {
      scheduledUpdate = requestAnimationFrame(() => {
        scheduledUpdate = null;
        updateFavicon();
      });
    }
    return;
  }

  // Performance measurement
  const startTime = performance.now();

  const canvas = getCanvas();
  const ctx = canvas.getContext('2d');
  
  const hour = new Date().getHours();
  let currentIcon;

  // Check if tab is active
  if (document.hidden) {
    currentIcon = { emoji: '💭' }; // Tab inactive
  } else {
    // Get random emoji every hour
    const randomIndex = Math.floor(new Date().getTime() / (1000 * 60 * 60)) % randomEmojis.length;
    const randomEmoji = randomEmojis[randomIndex];
    
    currentIcon = favicons.find(f => hour >= f.time[0] && hour <= f.time[1]) || 
                 { emoji: randomEmoji };
  }

  drawFavicon(ctx, currentIcon.emoji);
  
  const favicon = document.querySelector("link[rel='icon']");
  if (favicon.href !== canvas.toDataURL()) {
    favicon.href = canvas.toDataURL();
  }

  lastUpdate = now;

  // Log if update takes too long
  const duration = performance.now() - startTime;
  if (duration > 16.67) { // longer than one frame (60fps)
    console.warn(`Favicon update took ${duration.toFixed(2)}ms`);
  }
}

export function initDynamicFavicon() {
  // Cleanup previous animation frame if exists
  if (scheduledUpdate) {
    cancelAnimationFrame(scheduledUpdate);
  }

  // Update on visibility change
  document.addEventListener('visibilitychange', updateFavicon);

  // Update on network status change
  window.addEventListener('online', () => {
    isOnline = true;
    updateFavicon();
  });
  
  window.addEventListener('offline', () => {
    isOnline = false;
    updateFavicon();
  });

  // Initial update
  updateFavicon();
  
  // Regular updates
  setInterval(updateFavicon, 60000); // Update every minute

  // Cleanup function
  return () => {
    if (scheduledUpdate) {
      cancelAnimationFrame(scheduledUpdate);
    }
    cachedCanvas = null;
  };
}
