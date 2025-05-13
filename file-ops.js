
// file-ops.js
const fs = require('fs');

// Create welcome.txt with "Hello Node"
fs.writeFile('welcome.txt', 'Hello Node', (err) => {
  if (err) throw err;
  console.log('File "welcome.txt" created');
});

// Read from hello.txt (assuming it exists)
fs.readFile('hello.txt', 'utf8', (err, data) => {
  if (err) throw err;
  console.log(data);
});