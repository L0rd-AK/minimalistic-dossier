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

export function updateFavicon() {
  const canvas = document.createElement('canvas');
  canvas.width = 32;
  canvas.height = 32;
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
  favicon.href = canvas.toDataURL();
}

export function initDynamicFavicon() {
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
}
