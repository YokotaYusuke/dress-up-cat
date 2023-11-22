const { setupServer } = require('./server');

const server = setupServer();
const PORT = 8080;

server.listen(PORT, () => {
  console.log(`I am now waiting for incoming HTTP traffic on port ${PORT}!`);
});
