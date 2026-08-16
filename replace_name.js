const fs = require('fs');
const path = require('path');

const directoryPath = __dirname;

function processDirectory(directory) {
  const files = fs.readdirSync(directory);

  for (const file of files) {
    const fullPath = path.join(directory, file);
    const stat = fs.statSync(fullPath);

    if (stat.isDirectory()) {
      // Don't recurse into .git, node_modules, etc.
      if (!['.git', 'node_modules', '.vscode', 'assets'].includes(file)) {
        processDirectory(fullPath);
      }
    } else if (file.endsWith('.html') || file.endsWith('.js')) {
      let content = fs.readFileSync(fullPath, 'utf8');
      let originalContent = content;
      
      // Replace URL encoded version first
      content = content.replace(/R%26D%20Dream%20Interior%20Decor(%20Studio)?/g, 'R%26D%20Dream%20Interior%20Decor%20Interior%20Decor');

      // Replace R&D Dream Interior Decor
      content = content.replace(/R&D Dream Interior Decor/g, 'R&D Dream Interior Decor');

      // Replace R&D Dream Interior Decor (but not if already followed by Interior Decor)
      // Using negative lookahead
      content = content.replace(/R&D Dream Interior Decor(?!\s+Interior Decor)/g, 'R&D Dream Interior Decor');

      if (content !== originalContent) {
        fs.writeFileSync(fullPath, content, 'utf8');
        console.log(`Updated: ${fullPath}`);
      }
    }
  }
}

processDirectory(directoryPath);
console.log('Replacement complete.');
