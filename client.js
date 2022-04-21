const net = require("net");
const connect = function () {
  const conn = net.createConnection({
    host: 'localhost',
    port: 50541
  });
  conn.on('connect', (connect) => {
    console.log('Succesfully connnected to game server')
    conn.write('Name: AJA');
  });
  conn.on("connect", () => {
    setTimeout(() => conn.write("Move: up"), 50)
    setTimeout(() => conn.write("Move: right"), 100)
    setTimeout(() => conn.write("Move: down"), 150)
    setTimeout(() => conn.write("Move: left"), 200)
  });

  conn.on("data", (data) => {
    console.log(data)
  });

  
  

  // interpret incoming data as text
  conn.setEncoding("utf8");

  return conn;
};

module.exports = connect;