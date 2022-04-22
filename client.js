const net = require("net");
const { IP, PORT } = require("./constants");
const connect = function() {
  const conn = net.createConnection({
    host: IP,
    port: PORT
  });
  /*
  When connection is established, this conn.on logs the
  message below to let us know connection was succesful. 
  It also shows our name and initials at the beginning of game.
  */
  conn.on('connect', () => {
    console.log('Succesfully connnected to game server');
    conn.write('Name: AJA');
  });
  //This conn.on logs a message after our snake dies or we idle
  conn.on("data", (data) => {
    console.log(data);
  });
  
  // interpret incoming data as text
  conn.setEncoding("utf8");

  return conn;
};

module.exports = connect;