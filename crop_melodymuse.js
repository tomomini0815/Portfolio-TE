import sharp from 'sharp';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const srcDir = 'C:\\Users\\tomom\\.gemini\\antigravity\\brain\\41fa17a9-b000-45b2-8740-c2c9efd0bd10';
const destDir = path.join(__dirname, 'public', 'thumbnails');

const mappings = [
  { in: 'melodymuse_flow_1_1773373271964.png', out: 'melodymuse.png' },
  { in: 'melodymuse_flow_2_setup_1773373286694.png', out: 'melodymuse_2.png' },
  { in: 'melodymuse_flow_2_1773373330676.png', out: 'melodymuse_3.png' },
  { in: 'melodymuse_flow_3_full_1773373373895.png', out: 'melodymuse_4.png' }
];

async function processImages() {
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
        
        // クロップ量：20px周辺（ブラウザの青枠などを削除）
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
