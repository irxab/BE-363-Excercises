const fs = require('fs');
const path = require('path');
const fse = require('fs-extra');

if (process.argv.length !== 4) {
  console.error('Usage: node copyFiles.js <sourceDirectory> <targetDirectory>');
  process.exit(1);
}

const sourceDirectory = process.argv[2];
const targetDirectory = process.argv[3];
const allowedExtensions = ['.txt', '.jpg'];

fs.readdir(sourceDirectory, (err, files) => {
  if (err) {
    console.error('Error reading source directory:', err);
    process.exit(1);
  }

  files.forEach((file) => {
    const ext = path.extname(file);
    if (allowedExtensions.includes(ext)) {
      const sourcePath = path.join(sourceDirectory, file);
      const targetPath = path.join(targetDirectory, file);
      fse.copy(sourcePath, targetPath, (err) => {
        if (err) {
          console.error(`Error copying ${file}:`, err);
        } else {
          console.log(`Copied ${file} to ${targetDirectory}`);
        }
      });
    }
  });
  async function main() {
    const sourceDir = await ask('Enter the source directory path: ');
    const targetDir = await ask('Enter the target directory path: ');
  
    rl.close();
  
    await copyFilesWithExtensions(sourceDirectory, targetDirectory);
  }
});
