const sharp = require('sharp');
const fs = require('fs').promises;
const path = require('path');

// Quantum Loop SVG with proper colors for favicon
const quantumLoopSVG = `<svg width="512" height="512" viewBox="0 0 512 512" fill="none" xmlns="http://www.w3.org/2000/svg">
  <rect width="512" height="512" fill="white"/>
  <g transform="translate(128, 128)">
    <path d="M128 20 C189.75 20, 240 69.25, 240 130 C240 190.75, 189.75 240, 128 240 C69.25 240, 20 190.75, 20 130" 
          stroke="#0a0a0a" stroke-width="25" stroke-linecap="round" fill="none"/>
    <path d="M20 130 C20 69.25, 69.25 20, 128 20" 
          stroke="#0a0a0a" stroke-width="25" stroke-linecap="round" opacity="0.3" fill="none"/>
    <circle cx="128" cy="128" r="30" fill="#0a0a0a"/>
  </g>
</svg>`;

// Dark version for dark mode
const quantumLoopSVGDark = `<svg width="512" height="512" viewBox="0 0 512 512" fill="none" xmlns="http://www.w3.org/2000/svg">
  <rect width="512" height="512" fill="#0a0a0a"/>
  <g transform="translate(128, 128)">
    <path d="M128 20 C189.75 20, 240 69.25, 240 130 C240 190.75, 189.75 240, 128 240 C69.25 240, 20 190.75, 20 130" 
          stroke="white" stroke-width="25" stroke-linecap="round" fill="none"/>
    <path d="M20 130 C20 69.25, 69.25 20, 128 20" 
          stroke="white" stroke-width="25" stroke-linecap="round" opacity="0.3" fill="none"/>
    <circle cx="128" cy="128" r="30" fill="white"/>
  </g>
</svg>`;

async function generateFavicons() {
  try {
    console.log('Generating favicons from Quantum Loop design...');
    
    // Convert SVG to PNG buffer at 512x512
    const svgBuffer = Buffer.from(quantumLoopSVG);
    const pngBuffer = await sharp(svgBuffer)
      .resize(512, 512)
      .png()
      .toBuffer();
    
    // Generate favicon sizes for tachyonlabs.dev
    const tachyonPath = '/Users/emmanuel/Work/markerting/tachyonlabs.dev/src/app';
    
    // favicon-16x16.png
    await sharp(pngBuffer)
      .resize(16, 16)
      .png()
      .toFile(path.join(tachyonPath, 'favicon-16x16.png'));
    console.log('✓ Generated favicon-16x16.png');
    
    // favicon-32x32.png
    await sharp(pngBuffer)
      .resize(32, 32)
      .png()
      .toFile(path.join(tachyonPath, 'favicon-32x32.png'));
    console.log('✓ Generated favicon-32x32.png');
    
    // apple-touch-icon.png (180x180)
    await sharp(pngBuffer)
      .resize(180, 180)
      .png()
      .toFile(path.join(tachyonPath, 'apple-touch-icon.png'));
    console.log('✓ Generated apple-touch-icon.png');
    
    // android-chrome-192x192.png
    await sharp(pngBuffer)
      .resize(192, 192)
      .png()
      .toFile(path.join(tachyonPath, 'android-chrome-192x192.png'));
    console.log('✓ Generated android-chrome-192x192.png');
    
    // android-chrome-512x512.png
    await sharp(pngBuffer)
      .resize(512, 512)
      .png()
      .toFile(path.join(tachyonPath, 'android-chrome-512x512.png'));
    console.log('✓ Generated android-chrome-512x512.png');
    
    // icon.png for Next.js App Router
    await sharp(pngBuffer)
      .resize(512, 512)
      .png()
      .toFile(path.join(tachyonPath, 'icon.png'));
    console.log('✓ Generated icon.png');
    
    // Generate favicon.ico (multi-resolution)
    const { imagesToIco } = require('png-to-ico');
    const icon16 = await sharp(pngBuffer).resize(16, 16).png().toBuffer();
    const icon32 = await sharp(pngBuffer).resize(32, 32).png().toBuffer();
    const icon48 = await sharp(pngBuffer).resize(48, 48).png().toBuffer();
    const icoBuffer = await imagesToIco([icon16, icon32, icon48]);
    await fs.writeFile(path.join(tachyonPath, 'favicon.ico'), icoBuffer);
    console.log('✓ Generated favicon.ico');
    
    // Generate favicons for samaritan.si
    const samaritanPath = '/Users/emmanuel/Work/markerting/samaritan.si/src/app';
    
    // favicon-16x16.png
    await sharp(pngBuffer)
      .resize(16, 16)
      .png()
      .toFile(path.join(samaritanPath, 'favicon-16x16.png'));
    console.log('✓ Generated samaritan.si favicon-16x16.png');
    
    // favicon-32x32.png
    await sharp(pngBuffer)
      .resize(32, 32)
      .png()
      .toFile(path.join(samaritanPath, 'favicon-32x32.png'));
    console.log('✓ Generated samaritan.si favicon-32x32.png');
    
    // apple-touch-icon.png (180x180)
    await sharp(pngBuffer)
      .resize(180, 180)
      .png()
      .toFile(path.join(samaritanPath, 'apple-touch-icon.png'));
    console.log('✓ Generated samaritan.si apple-touch-icon.png');
    
    // android-chrome-192x192.png
    await sharp(pngBuffer)
      .resize(192, 192)
      .png()
      .toFile(path.join(samaritanPath, 'android-chrome-192x192.png'));
    console.log('✓ Generated samaritan.si android-chrome-192x192.png');
    
    // android-chrome-512x512.png
    await sharp(pngBuffer)
      .resize(512, 512)
      .png()
      .toFile(path.join(samaritanPath, 'android-chrome-512x512.png'));
    console.log('✓ Generated samaritan.si android-chrome-512x512.png');
    
    // favicon.ico for samaritan.si
    const icoBufferSamaritan = await imagesToIco([icon16, icon32, icon48]);
    await fs.writeFile(path.join(samaritanPath, 'favicon.ico'), icoBufferSamaritan);
    console.log('✓ Generated samaritan.si favicon.ico');
    
    console.log('\n✅ All favicons generated successfully!');
    
  } catch (error) {
    console.error('Error generating favicons:', error);
    process.exit(1);
  }
}

generateFavicons();