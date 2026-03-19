// generate-gallery.js
// Run with: node generate-gallery.js
// Scans all folders starting with "img" and rebuilds the gallery section in about.html

const fs   = require('fs');
const path = require('path');

// ── CONFIG ──────────────────────────────────────────────────
const ROOT         = __dirname;                  // folder where this script lives
const TARGET_FILE  = path.join(ROOT, 'about.html'); // file to update
const IMG_EXTS     = ['.jpg', '.jpeg', '.png', '.gif', '.webp', '.JPG', '.JPEG', '.PNG'];
const MARKER_START = '<!-- GALLERY:START -->';
const MARKER_END   = '<!-- GALLERY:END -->';
// ────────────────────────────────────────────────────────────

// 1. Find all folders that start with "img"
const imgFolders = fs.readdirSync(ROOT).filter(name => {
    const fullPath = path.join(ROOT, name);
    return name.startsWith('img') && fs.statSync(fullPath).isDirectory();
}).sort(); // imgs, imgs2, imgs3 ... in order

if (imgFolders.length === 0) {
    console.log('❌ No folders starting with "img" found.');
    process.exit(1);
}

console.log(`📁 Found folders: ${imgFolders.join(', ')}`);

// 2. Collect all image files from those folders
const images = [];
imgFolders.forEach(folder => {
    const folderPath = path.join(ROOT, folder);
    fs.readdirSync(folderPath).forEach(file => {
        if (IMG_EXTS.includes(path.extname(file))) {
            images.push({ folder, file });
        }
    });
});

console.log(`🖼️  Found ${images.length} images total`);

// 3. Build the new grid HTML
const gridItems = images.map(({ folder, file }) => {
    const src = `${folder}/${file}`;
    const alt = file.replace(/\.[^/.]+$/, '').replace(/[-_]/g, ' ');
    return `            <div class="grid-image"><img src="${src}" alt="${alt}" loading="lazy"></div>`;
}).join('\n');

const newBlock = `${MARKER_START}\n${gridItems}\n            ${MARKER_END}`;

// 4. Read the target HTML file
if (!fs.existsSync(TARGET_FILE)) {
    console.log(`❌ ${TARGET_FILE} not found.`);
    process.exit(1);
}

let html = fs.readFileSync(TARGET_FILE, 'utf8');

// 5. Check markers exist
if (!html.includes(MARKER_START) || !html.includes(MARKER_END)) {
    console.log(`❌ Markers not found in ${TARGET_FILE}.`);
    console.log(`   Add these two comments inside your .image-grid div:`);
    console.log(`   ${MARKER_START}`);
    console.log(`   ${MARKER_END}`);
    process.exit(1);
}

// 6. Replace content between markers
const before = html.split(MARKER_START)[0];
const after  = html.split(MARKER_END)[1];
const updated = before + newBlock + after;

// 7. Write back
fs.writeFileSync(TARGET_FILE, updated, 'utf8');
console.log(`✅ Gallery updated in ${TARGET_FILE} with ${images.length} images.`);