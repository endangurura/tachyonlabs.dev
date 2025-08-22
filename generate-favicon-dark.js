const sharp = require('sharp');
const fs = require('fs').promises;
const path = require('path');
const toIco = require('to-ico');

// Quantum Loop SVG - White on Black for favicon
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

async function generateDarkFavicons() {
  try {
    console.log('Generating white-on-black favicons for both sites...');
    
    // Convert SVG to PNG buffer at 512x512
    const svgBuffer = Buffer.from(quantumLoopSVGDark);
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
      console.log(`\nGenerating favicons for ${site.name}...`);
      
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
      
      // icon.png for Next.js App Router (only for tachyonlabs.dev)
      if (site.name === 'tachyonlabs.dev') {
        await sharp(pngBuffer)
          .resize(512, 512)
          .png()
          .toFile(path.join(site.path, 'icon.png'));
        console.log('✓ Generated icon.png');
      }
      
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
    
    console.log('\n✅ All white-on-black favicons generated successfully!');
    
  } catch (error) {
    console.error('Error generating favicons:', error);
    process.exit(1);
  }
}

generateDarkFavicons();