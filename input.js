const { MOVEMENT_COMMANDS } = require("./constants");

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
    connection.write(MOVEMENT_COMMANDS.UP); // Use the movement command from the MOVEMENT_COMMANDS constant.
  } else if (key === 'a') {
    connection.write(MOVEMENT_COMMANDS.LEFT);
  } else if (key === 's') {
    connection.write(MOVEMENT_COMMANDS.DOWN);
  } else if (key === 'd') {
    connection.write(MOVEMENT_COMMANDS.RIGHT);
  } else if (key === 'q') {
    connection.write("Say: Hello!"); // Send a canned message to the server
  } else if (key === 'e') {
    connection.write("Say: I'm having fun!");
  } else if (key === 'r') {
    connection.write("Say: Good Bye!");
  }
};

// Export the connect function using ES6 shorthand syntax
module.exports = { setupInput };