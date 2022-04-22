const net = require("net");
const { IP, PORT } = require("./constants");
const connect = function() {
  const conn = net.createConnection({
    host: IP,
    port: PORT
  });
  conn.on('connect', () => {
    console.log('Succesfully connnected to game server');
    conn.write('Name: AJA');
  });

  conn.on("data", (data) => {
    console.log(data)
  //   conn.write("Say: You can't catch me")
  });
  

  
  

  // interpret incoming data as text
  conn.setEncoding("utf8");

  return conn;
};

module.exports = connect;