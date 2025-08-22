const fs = require('fs');
const path = require('path');
const { createCanvas, registerFont } = require('canvas');

// Helper function to draw the logo exactly as in the SVG
function drawQuantumLoop(ctx, x, y, size, strokeColor, fillColor) {
  const scale = size / 26;
  
  ctx.save();
  ctx.translate(x, y);
  ctx.scale(scale, scale);
  
  // Set stroke style
  ctx.strokeStyle = strokeColor;
  ctx.lineWidth = 2.5;
  ctx.lineCap = 'round';
  
  // Main path - incomplete circle (from -45° to 225°)
  ctx.beginPath();
  const centerX = 13;
  const centerY = 13;
  const radius = 11;
  const startAngle = -Math.PI / 4; // -45 degrees
  const endAngle = Math.PI * 1.25; // 225 degrees
  
  ctx.arc(centerX, centerY, radius, startAngle, endAngle, false);
  ctx.stroke();
  
  // Ghost path with opacity (from 225° to -45°)
  ctx.save();
  ctx.globalAlpha = 0.3;
  ctx.beginPath();
  ctx.arc(centerX, centerY, radius, endAngle, startAngle, false);
  ctx.stroke();
  ctx.restore();
  
  // Center dot
  ctx.fillStyle = fillColor;
  ctx.beginPath();
  ctx.arc(centerX, centerY, 3, 0, Math.PI * 2);
  ctx.fill();
  
  ctx.restore();
}

// Create logo variations with proper proportions
const variations = [
  {
    name: 'Tachyon Labs Logo - Black',
    filename: 'tachyon-labs-logo-black.png',
    width: 720, // 4x scale for quality
    height: 104, // 26 * 4
    bgColor: 'white',
    strokeColor: '#000000',
    fillColor: '#000000',
    text: 'Tachyon Labs',
    type: 'full'
  },
  {
    name: 'Tachyon Labs Logo - White',
    filename: 'tachyon-labs-logo-white.png',
    width: 720,
    height: 104,
    bgColor: '#0a0a0a',
    strokeColor: '#ffffff',
    fillColor: '#ffffff',
    text: 'Tachyon Labs',
    type: 'full'
  },
  {
    name: 'Tachyon Labs Mark - Black',
    filename: 'tachyon-labs-mark-black.png',
    width: 208, // 26 * 8 for high quality
    height: 208,
    bgColor: 'white',
    strokeColor: '#000000',
    fillColor: '#000000',
    type: 'mark'
  },
  {
    name: 'Tachyon Labs Mark - White',
    filename: 'tachyon-labs-mark-white.png',
    width: 208,
    height: 208,
    bgColor: '#0a0a0a',
    strokeColor: '#ffffff',
    fillColor: '#ffffff',
    type: 'mark'
  },
  {
    name: 'Samaritan Logo - Black',
    filename: 'samaritan-logo-black.png',
    width: 560, // Shorter width for "Samaritan"
    height: 104,
    bgColor: 'white',
    strokeColor: '#000000',
    fillColor: '#000000',
    text: 'Samaritan',
    type: 'full'
  },
  {
    name: 'Samaritan Logo - White',
    filename: 'samaritan-logo-white.png',
    width: 560,
    height: 104,
    bgColor: '#0a0a0a',
    strokeColor: '#ffffff',
    fillColor: '#ffffff',
    text: 'Samaritan',
    type: 'full'
  },
  {
    name: 'Tachyon Labs Logo - Green BG',
    filename: 'tachyon-labs-logo-green-bg.png',
    width: 720,
    height: 104,
    bgColor: '#2A6A43',
    strokeColor: '#ffffff',
    fillColor: '#ffffff',
    text: 'Tachyon Labs',
    type: 'full'
  }
];

// Create media kit directories
const mediaKitDir = path.join(__dirname, 'media-kit');
const tachyonDir = path.join(mediaKitDir, 'Tachyon Labs');
const samaritanDir = path.join(mediaKitDir, 'Samaritan');

[mediaKitDir, tachyonDir, samaritanDir].forEach(dir => {
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }
});

// Generate PNG files
variations.forEach(variant => {
  const canvas = createCanvas(variant.width, variant.height);
  const ctx = canvas.getContext('2d');
  
  // Enable better text rendering
  ctx.textDrawingMode = 'path';
  ctx.antialias = 'subpixel';
  
  // Fill background
  ctx.fillStyle = variant.bgColor;
  ctx.fillRect(0, 0, variant.width, variant.height);
  
  if (variant.type === 'mark') {
    // Draw centered logomark
    const logoSize = variant.width; // Full size
    drawQuantumLoop(ctx, 0, 0, logoSize, variant.strokeColor, variant.fillColor);
  } else {
    // Draw logo with text - matching SVG proportions
    const scale = variant.height / 26; // Base scale from viewBox height
    const logoSize = 26 * scale; // Logo is 26x26 in viewBox
    const logoX = 0; // Start at left
    const logoY = 0; // Start at top
    
    // Draw logomark
    drawQuantumLoop(ctx, logoX, logoY, logoSize, variant.strokeColor, variant.fillColor);
    
    // Draw text
    ctx.fillStyle = variant.fillColor;
    // Font size should be 18 in viewBox, scaled up
    const fontSize = 18 * scale;
    ctx.font = `600 ${fontSize}px -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif`;
    ctx.textBaseline = 'middle';
    
    // Text x position is 32 in viewBox (logo width 26 + gap 6)
    const textX = 32 * scale;
    // Text y position is 18 in viewBox (slightly below center)
    const textY = 18 * scale;
    
    ctx.fillText(variant.text, textX, textY);
  }
  
  // Save to appropriate directory
  const dir = variant.filename.includes('samaritan') ? samaritanDir : tachyonDir;
  const filepath = path.join(dir, variant.filename);
  const buffer = canvas.toBuffer('image/png');
  fs.writeFileSync(filepath, buffer);
  
  console.log(`✓ Generated ${variant.filename}`);
});

// Also update SVG files to ensure consistency
const svgFiles = [
  { 
    content: `<svg width="180" height="26" viewBox="0 0 180 26" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M13 2 C19.075 2, 24 6.925, 24 13 C24 19.075, 19.075 24, 13 24 C6.925 24, 2 19.075, 2 13" stroke="#000000" stroke-width="2.5" stroke-linecap="round" fill="none"/>
  <path d="M2 13 C2 6.925, 6.925 2, 13 2" stroke="#000000" stroke-width="2.5" stroke-linecap="round" opacity="0.3" fill="none"/>
  <circle cx="13" cy="13" r="3" fill="#000000"/>
  <text x="32" y="18" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-size="18" font-weight="600" fill="#000000">Tachyon Labs</text>
</svg>`,
    filename: 'tachyon-labs-logo-black.svg',
    dir: tachyonDir
  },
  {
    content: `<svg width="180" height="26" viewBox="0 0 180 26" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M13 2 C19.075 2, 24 6.925, 24 13 C24 19.075, 19.075 24, 13 24 C6.925 24, 2 19.075, 2 13" stroke="#ffffff" stroke-width="2.5" stroke-linecap="round" fill="none"/>
  <path d="M2 13 C2 6.925, 6.925 2, 13 2" stroke="#ffffff" stroke-width="2.5" stroke-linecap="round" opacity="0.3" fill="none"/>
  <circle cx="13" cy="13" r="3" fill="#ffffff"/>
  <text x="32" y="18" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-size="18" font-weight="600" fill="#ffffff">Tachyon Labs</text>
</svg>`,
    filename: 'tachyon-labs-logo-white.svg',
    dir: tachyonDir
  },
  {
    content: `<svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M13 2 C19.075 2, 24 6.925, 24 13 C24 19.075, 19.075 24, 13 24 C6.925 24, 2 19.075, 2 13" stroke="#000000" stroke-width="2.5" stroke-linecap="round" fill="none"/>
  <path d="M2 13 C2 6.925, 6.925 2, 13 2" stroke="#000000" stroke-width="2.5" stroke-linecap="round" opacity="0.3" fill="none"/>
  <circle cx="13" cy="13" r="3" fill="#000000"/>
</svg>`,
    filename: 'tachyon-labs-mark-black.svg',
    dir: tachyonDir
  },
  {
    content: `<svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M13 2 C19.075 2, 24 6.925, 24 13 C24 19.075, 19.075 24, 13 24 C6.925 24, 2 19.075, 2 13" stroke="#ffffff" stroke-width="2.5" stroke-linecap="round" fill="none"/>
  <path d="M2 13 C2 6.925, 6.925 2, 13 2" stroke="#ffffff" stroke-width="2.5" stroke-linecap="round" opacity="0.3" fill="none"/>
  <circle cx="13" cy="13" r="3" fill="#ffffff"/>
</svg>`,
    filename: 'tachyon-labs-mark-white.svg',
    dir: tachyonDir
  },
  {
    content: `<svg width="140" height="26" viewBox="0 0 140 26" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M13 2 C19.075 2, 24 6.925, 24 13 C24 19.075, 19.075 24, 13 24 C6.925 24, 2 19.075, 2 13" stroke="#000000" stroke-width="2.5" stroke-linecap="round" fill="none"/>
  <path d="M2 13 C2 6.925, 6.925 2, 13 2" stroke="#000000" stroke-width="2.5" stroke-linecap="round" opacity="0.3" fill="none"/>
  <circle cx="13" cy="13" r="3" fill="#000000"/>
  <text x="32" y="18" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-size="18" font-weight="600" fill="#000000">Samaritan</text>
</svg>`,
    filename: 'samaritan-logo-black.svg',
    dir: samaritanDir
  },
  {
    content: `<svg width="140" height="26" viewBox="0 0 140 26" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M13 2 C19.075 2, 24 6.925, 24 13 C24 19.075, 19.075 24, 13 24 C6.925 24, 2 19.075, 2 13" stroke="#ffffff" stroke-width="2.5" stroke-linecap="round" fill="none"/>
  <path d="M2 13 C2 6.925, 6.925 2, 13 2" stroke="#ffffff" stroke-width="2.5" stroke-linecap="round" opacity="0.3" fill="none"/>
  <circle cx="13" cy="13" r="3" fill="#ffffff"/>
  <text x="32" y="18" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-size="18" font-weight="600" fill="#ffffff">Samaritan</text>
</svg>`,
    filename: 'samaritan-logo-white.svg',
    dir: samaritanDir
  }
];

// Delete old files first
const oldFiles = fs.readdirSync(tachyonDir).concat(fs.readdirSync(samaritanDir));
console.log('\nRemoving old files...');
oldFiles.forEach(file => {
  if (file.endsWith('.png') || file.endsWith('.svg')) {
    try {
      fs.unlinkSync(path.join(file.includes('samaritan') ? samaritanDir : tachyonDir, file));
    } catch (e) {
      // File might be in the other directory
      try {
        fs.unlinkSync(path.join(file.includes('samaritan') ? tachyonDir : samaritanDir, file));
      } catch (e2) {
        // Ignore
      }
    }
  }
});

// Write new SVG files
svgFiles.forEach(file => {
  fs.writeFileSync(path.join(file.dir, file.filename), file.content);
  console.log(`✓ Generated ${file.filename}`);
});

console.log('\n✅ Media kit regenerated with correct proportions!');
console.log(`📁 Files saved to: ${mediaKitDir}`);