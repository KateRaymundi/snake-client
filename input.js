const net = require('net');

const setupInput = function() {
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding('utf8');
  stdin.resume();
  setupInput.on('data', handleUserInput )
  return stdin; 
}

handleUserInput = (key) => {
  if(key === ('\u0003')) {
  
  process.exit(console.log("bye"))
  }
}

module.exports = setupInput;
