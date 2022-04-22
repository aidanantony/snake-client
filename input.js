let connection;
const handleUserInput = function(key) {
  if (key === 'w') {
    connection.write("Move: up");
  } else if (key === 'a') {
    connection.write("Move: left");
  } else if (key === 's') {
    connection.write("Move: down");
  } else if (key === 'd') {
    connection.write("Move: right");
  } else if (key === '\u0003') {
    process.exit();
  } else if (key === 'e') {
    connection.write("Say: Wrong key genius");
  } else if (key === 'q') {
    connection.write("Say: Come on, wrong key");
  } else if (key === 'x') {
    connection.write("Say: x dont mark the spot");
  }
};

const setupInput = function(conn) {
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  stdin.on("data", handleUserInput);
  return stdin;
};

module.exports = setupInput;