const sharp = require('sharp');
const fs = require('fs').promises;
const path = require('path');
const toIco = require('to-ico');

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

async function generateFaviconIco() {
  try {
    console.log('Generating favicon.ico files for both sites...');
    
    // Convert SVG to PNG buffer at 512x512
    const svgBuffer = Buffer.from(quantumLoopSVG);
    const pngBuffer = await sharp(svgBuffer)
      .resize(512, 512)
      .png()
      .toBuffer();
    
    // Generate multiple sizes for ICO
    const sizes = [16, 32, 48];
    const buffers = await Promise.all(
      sizes.map(size =>
        sharp(pngBuffer)
          .resize(size, size)
          .png()
          .toBuffer()
      )
    );
    
    // Generate ICO file
    const ico = await toIco(buffers);
    
    // Write to tachyonlabs.dev
    const tachyonPath = '/Users/emmanuel/Work/markerting/tachyonlabs.dev/src/app/favicon.ico';
    await fs.writeFile(tachyonPath, ico);
    console.log('✓ Generated favicon.ico for tachyonlabs.dev');
    
    // Write to samaritan.si
    const samaritanPath = '/Users/emmanuel/Work/markerting/samaritan.si/src/app/favicon.ico';
    await fs.writeFile(samaritanPath, ico);
    console.log('✓ Generated favicon.ico for samaritan.si');
    
    console.log('\n✅ All favicon.ico files generated successfully!');
    
  } catch (error) {
    console.error('Error generating favicon.ico:', error);
    process.exit(1);
  }
}

generateFaviconIco();