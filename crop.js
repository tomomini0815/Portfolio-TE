import sharp from 'sharp';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const srcDir = 'C:\\Users\\tomom\\.gemini\\antigravity\\brain\\41fa17a9-b000-45b2-8740-c2c9efd0bd10';
const destDir = path.join(__dirname, 'public', 'thumbnails');

const mappings = [
  { in: 'ainance_real_1_1773369597182.png', out: 'ainance.png' },
  { in: 'ainance_real_2_1773369629079.png', out: 'ainance_2.png' },
  { in: 'journify_real_1_v2_1773369726501.png', out: 'journify.png' },
  { in: 'journify_real_3_final_1773369928922.png', out: 'journify_2.png' },
  { in: 'lifebridge_real_1_1773369795775.png', out: 'lifebridge.png' },
  { in: 'lifebridge_real_2_1773369888877.png', out: 'lifebridge_2.png' },
  { in: 'lifebridge_real_3_1773369909652.png', out: 'lifebridge_3.png' },
  { in: 'melodymuse_real_1_1773369915623.png', out: 'melodymuse.png' }
];

async function processImages() {
  // Ensure destination directory exists
  if (!fs.existsSync(destDir)) {
    fs.mkdirSync(destDir, { recursive: true });
  }

  for (const mapping of mappings) {
    const inputPath = path.join(srcDir, mapping.in);
    const outputPath = path.join(destDir, mapping.out);
    
    if (fs.existsSync(inputPath)) {
      try {
        const image = sharp(inputPath);
        const metadata = await image.metadata();
        
        // クロップ量：20px周辺（ブラウザの青枠やスクロールバーを削除）
        const cropSize = 20;
        
        await image.extract({ 
          left: cropSize, 
          top: cropSize, 
          width: metadata.width - (cropSize * 2), 
          height: metadata.height - (cropSize * 2) 
        }).toFile(outputPath);
        
        console.log(`Processed: ${mapping.out}`);
      } catch (e) {
        console.error(`Error processing ${mapping.in}:`, e.message);
      }
    } else {
      console.error(`File not found: ${inputPath}`);
    }
  }
}

processImages();
