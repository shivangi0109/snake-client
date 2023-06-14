// Stores the active TCP connection object.
let connection;

// setup interface to handle user input from stdin
const setupInput = (conn) => {
  connection = conn; // Assign the conn object to the connection variable

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
  } else if (key === 'w') {
    connection.write("Move: up"); // Use the connection object to send the movement command.
  } else if (key === 'a') {
    connection.write("Move: left");
  } else if (key === 's') {
    connection.write("Move: down");
  } else if (key === 'd') {
    connection.write("Move: right");
  }
};

// Export the connect function using ES6 shorthand syntax
module.exports = { setupInput };