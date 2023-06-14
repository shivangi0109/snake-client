// setup interface to handle user input from stdin
const setupInput = function() {
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  stdin.on("data", handleUserInput); // Register the event listener for user input
  return stdin;
};

const handleUserInput = function(key) {
  if (key === '\u0003') {
    // Ctrl + C was pressed, terminate the game
    process.exit();
  }
};

// Export the connect function using ES6 shorthand syntax
module.exports = { setupInput };