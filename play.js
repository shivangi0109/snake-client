const { connect } = require("./client");
const { setupInput } = require("./input");

console.log("Connecting ...");
const connection = connect(); // Store the connection object in a variable.

setupInput(connection);