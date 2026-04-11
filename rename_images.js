
const fs = require('fs');
const path = require('path');

const dirPath = 'c:\\laragon\\www\\php-practice\\personal-website\\public\\images\\projects';

if (!fs.existsSync(dirPath)) {
    console.error(`Directory not found: ${dirPath}`);
    process.exit(1);
}

const files = fs.readdirSync(dirPath);

files.forEach(file => {
    const oldPath = path.join(dirPath, file);
    let newName = file.toLowerCase().replace(/\s+/g, '-');
    const newPath = path.join(dirPath, newName);

    if (oldPath !== newPath) {
        // If file exists at new path, delete old one (Windows case issue: readdir might show one but it might match)
        // But readdir shows actual name on disk.
        // On Windows renaming file to same name different case needs intermediate step usually.
        const tempPath = oldPath + '.tmp';
        fs.renameSync(oldPath, tempPath);
        if (fs.existsSync(newPath) && newPath !== oldPath) {
            // If the target exists and it's not the same file (e.g. pos-system.png and POS-SYSTEM-2.png -> pos-system.png and pos-system-2.png)
            // Just move to target.
            fs.renameSync(tempPath, newPath);
        } else {
            fs.renameSync(tempPath, newPath);
        }
        console.log(`Renamed: ${file} -> ${newName}`);
    }
});
