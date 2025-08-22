const sharp = require('sharp');
const fs = require('fs').promises;
const path = require('path');
const toIco = require('to-ico');

// Quantum Loop SVG - LARGER White on Black for better visibility
const quantumLoopSVGLarge = `<svg width="512" height="512" viewBox="0 0 512 512" fill="none" xmlns="http://www.w3.org/2000/svg">
  <rect width="512" height="512" fill="#0a0a0a"/>
  <g transform="translate(56, 56)">
    <path d="M200 30 C296.65 30, 375 108.35, 375 205 C375 301.65, 296.65 380, 200 380 C103.35 380, 25 301.65, 25 205" 
          stroke="white" stroke-width="35" stroke-linecap="round" fill="none"/>
    <path d="M25 205 C25 108.35, 103.35 30, 200 30" 
          stroke="white" stroke-width="35" stroke-linecap="round" opacity="0.3" fill="none"/>
    <circle cx="200" cy="200" r="45" fill="white"/>
  </g>
</svg>`;

async function generateLargerFavicons() {
  try {
    console.log('Generating larger white-on-black favicons for both sites...');
    
    // Convert SVG to PNG buffer at 512x512
    const svgBuffer = Buffer.from(quantumLoopSVGLarge);
    const pngBuffer = await sharp(svgBuffer)
      .resize(512, 512)
      .png()
      .toBuffer();
    
    // Paths for both sites
    const sites = [
      {
        name: 'tachyonlabs.dev',
        path: '/Users/emmanuel/Work/markerting/tachyonlabs.dev/src/app'
      },
      {
        name: 'samaritan.si',
        path: '/Users/emmanuel/Work/markerting/samaritan.si/src/app'
      }
    ];
    
    for (const site of sites) {
      console.log(`\nGenerating larger favicons for ${site.name}...`);
      
      // favicon-16x16.png
      await sharp(pngBuffer)
        .resize(16, 16)
        .png()
        .toFile(path.join(site.path, 'favicon-16x16.png'));
      console.log('✓ Generated favicon-16x16.png');
      
      // favicon-32x32.png
      await sharp(pngBuffer)
        .resize(32, 32)
        .png()
        .toFile(path.join(site.path, 'favicon-32x32.png'));
      console.log('✓ Generated favicon-32x32.png');
      
      // apple-touch-icon.png (180x180)
      await sharp(pngBuffer)
        .resize(180, 180)
        .png()
        .toFile(path.join(site.path, 'apple-touch-icon.png'));
      console.log('✓ Generated apple-touch-icon.png');
      
      // android-chrome-192x192.png
      await sharp(pngBuffer)
        .resize(192, 192)
        .png()
        .toFile(path.join(site.path, 'android-chrome-192x192.png'));
      console.log('✓ Generated android-chrome-192x192.png');
      
      // android-chrome-512x512.png
      await sharp(pngBuffer)
        .resize(512, 512)
        .png()
        .toFile(path.join(site.path, 'android-chrome-512x512.png'));
      console.log('✓ Generated android-chrome-512x512.png');
      
      // icon.png for Next.js App Router
      await sharp(pngBuffer)
        .resize(512, 512)
        .png()
        .toFile(path.join(site.path, 'icon.png'));
      console.log('✓ Generated icon.png');
      
      // Generate favicon.ico (multi-resolution)
      const sizes = [16, 32, 48];
      const buffers = await Promise.all(
        sizes.map(size =>
          sharp(pngBuffer)
            .resize(size, size)
            .png()
            .toBuffer()
        )
      );
      
      const ico = await toIco(buffers);
      await fs.writeFile(path.join(site.path, 'favicon.ico'), ico);
      console.log('✓ Generated favicon.ico');
    }
    
    console.log('\n✅ All larger favicons generated successfully!');
    
  } catch (error) {
    console.error('Error generating favicons:', error);
    process.exit(1);
  }
}

generateLargerFavicons();