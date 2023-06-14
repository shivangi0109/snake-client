const { connect } = require("./client");

console.log("Connecting ...");
const connection = connect();

// Event handler for when the connection is established
connection.on("connect", () => {
  console.log("Connected to the server");
});