
const fs = require('fs');
const path = require('path');

const src = 'c:\\laragon\\www\\php-practice\\personal-website\\images';
const dst = 'c:\\laragon\\www\\php-practice\\personal-website\\public\\images\\projects';

const files = ['admin-dashboard.png', 'disease-prediction.png'];

files.forEach(f => {
    const srcPath = path.join(src, f);
    const dstPath = path.join(dst, f.toLowerCase());
    fs.copyFileSync(srcPath, dstPath);
    console.log(`Copied: ${f} -> ${dstPath}`);
});
