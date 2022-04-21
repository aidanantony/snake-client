const net = require("net");
const connect = function () {
  const conn = net.createConnection({
    host: 'localhost',
    port: 50541
  });
  conn.on('connect', (connect) => {
    console.log('Succesfully connnected to game server')
  });

  conn.on("data", (data) => {
    console.log(data)
  });

  conn.on('connect', () => {
    conn.write('Name: AJA');
  });

  // interpret incoming data as text
  conn.setEncoding("utf8");

  return conn;
};

module.exports = connect;