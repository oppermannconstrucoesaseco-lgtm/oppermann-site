import sharp from "sharp";
import { readdir, stat, rename } from "fs/promises";
import { join, extname, basename } from "path";

const ASSETS_DIR = new URL("../src/assets/", import.meta.url).pathname;
const MAX_WIDTH = 1800;          // redimensiona se mais largo que isso
const JPEG_QUALITY = 78;
const PNG_QUALITY = 80;          // para PNGs que permanecem PNG
const MIN_SAVINGS_KB = 50;       // só substitui se economizar ao menos 50 KB

async function getSize(path) {
  return (await stat(path)).size;
}

function formatKB(bytes) {
  return (bytes / 1024).toFixed(0) + " KB";
}

async function compressFile(filePath) {
  const ext = extname(filePath).toLowerCase();
  const isJpeg = ext === ".jpg" || ext === ".jpeg";
  const isPng = ext === ".png";

  if (!isJpeg && !isPng) return null;

  // Ignora as imagens do portfólio-original (extensão dupla .jpg.png)
  if (filePath.includes("portfolio-original")) return null;

  const originalSize = await getSize(filePath);
  const tmpPath = filePath + ".tmp";

  try {
    const img = sharp(filePath);
    const meta = await img.metadata();

    let pipeline = img;

    // Redimensiona se muito largo
    if (meta.width && meta.width > MAX_WIDTH) {
      pipeline = pipeline.resize(MAX_WIDTH, null, { withoutEnlargement: true });
    }

    if (isJpeg) {
      await pipeline.jpeg({ quality: JPEG_QUALITY, mozjpeg: true }).toFile(tmpPath);
    } else {
      // PNG — tenta comprimir; se for foto, converte p/ jpeg
      const isPhoto = meta.hasAlpha === false && (meta.width || 0) > 500;
      if (isPhoto) {
        // Converte PNG fotográfico → JPEG (sem extensão — mantém .png por compatibilidade de import)
        await pipeline.jpeg({ quality: JPEG_QUALITY, mozjpeg: true }).toFile(tmpPath);
      } else {
        await pipeline.png({ quality: PNG_QUALITY, compressionLevel: 9 }).toFile(tmpPath);
      }
    }

    const newSize = await getSize(tmpPath);
    const saved = originalSize - newSize;

    if (saved >= MIN_SAVINGS_KB * 1024) {
      await rename(tmpPath, filePath);
      return { file: basename(filePath), before: originalSize, after: newSize, saved };
    } else {
      // Não vale substituir — remove temp
      await rename(tmpPath, tmpPath.replace(".tmp", "")).catch(() => {});
      try { await import("fs").then(fs => fs.promises.unlink(tmpPath)); } catch {}
      return null;
    }
  } catch (err) {
    console.error(`  Erro em ${basename(filePath)}: ${err.message}`);
    try { await import("fs").then(fs => fs.promises.unlink(tmpPath)); } catch {}
    return null;
  }
}

async function main() {
  const files = await readdir(ASSETS_DIR);
  const results = [];
  let totalSaved = 0;

  console.log(`\nComprimindo imagens em src/assets/ ...\n`);

  for (const file of files.sort()) {
    const filePath = join(ASSETS_DIR, file);
    const result = await compressFile(filePath);
    if (result) {
      results.push(result);
      totalSaved += result.saved;
      console.log(
        `  ✓ ${result.file.padEnd(40)} ${formatKB(result.before).padStart(8)} → ${formatKB(result.after).padStart(8)}  (-${formatKB(result.saved)})`
      );
    }
  }

  console.log(`\n${"─".repeat(72)}`);
  console.log(`  ${results.length} imagens comprimidas   Total economizado: ${formatKB(totalSaved)}`);
  console.log(`${"─".repeat(72)}\n`);
}

main();
