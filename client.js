const net = require("net");

// establishes a connection with the game server
const connect = function () {
  const conn = net.createConnection({
    host: "localhost",
    port: 50541
  });

  // interpret incoming data as text
  conn.setEncoding("utf8");

  // Event handler for receiving data from the server
  conn.on("data", (data) => {
    console.log("Server says:", data);
  });

  // Event handler for when the connection is successfully established
  conn.on("connect", () => {
    console.log("Successfully connected to game server");

    // Send the name to the server
    conn.write("Name: SSR"); // Replace SNK with your three-letter initials
  });

  return conn;
};

// Export the connect function using ES6 shorthand syntax
module.exports = { connect };