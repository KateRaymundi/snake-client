const net = require('net');
const { setupInput } = require('./input');

const {connect} = require('./client');
  console.log('connecting...');


  connect();
  
  setupInput();
  



