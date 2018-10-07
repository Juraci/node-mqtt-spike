const mosca = require('mosca');

const mongoconfig = {
  //using ascoltatore
  type: 'mongo',
  url: 'mongodb://localhost:27017/mqtt',
  pubsubCollection: 'sensors',
  mongo: {}
};

const settings = {
  port: 1883,
  backend: mongoconfig
};

const server = new mosca.Server(settings);

server.on('clientConnected', (client) => {
  console.log('client connected', client.id);
});

// fired when a message is received
server.on('published', (packet, client) => {
  console.log('Published', packet.payload);
});

server.on('ready', setup);

// fired when the mqtt server is ready
function setup() {
  console.log('Mosca server is up and running');
}
