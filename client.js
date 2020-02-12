const net = require('net');

const connect = function() {
  const conn = net.createConnection({ 
    host: '172.46.0.236',
    port: 50541
  });
  // interpret incoming data as text
  conn.setEncoding('utf8'); 

  conn.on('data', (data) => {
    console.log('Server says: ', data);
    return conn
  });
    conn.on('connect', () => {
      console.log("Successfully connected to game server")
    });

    conn.on('connect', () => {
      conn.write("Name: KTR")
    });

    conn.on('connect', () => { 
      setTimeout(() => { 
      conn.write("Move: up") 
      }, 2000)
    });
    conn.on('connect', () => { 
      setTimeout(() => { 
      conn.write("Move: down") 
      }, 3000)
    });
    conn.on('connect', () => { 
      setTimeout(() => { 
      conn.write("Move: left") 
      }, 4000)
    });
    conn.on('connect', () => { 
      setTimeout(() => { 
      conn.write("Move: right") 
      }, 4000)
    });

    return conn
}
    
handleUserInput = (key) => {
  if(key === ('\u0003')) {
  
  process.exit(console.log("bye"))
}
}
const setupInput = function() {
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding('utf8');
  stdin.resume();
  setupInput.on('data', handleUserInput )
  return stdin; 
}

module.exports = {connect};