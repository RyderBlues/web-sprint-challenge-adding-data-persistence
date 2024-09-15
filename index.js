const server = require('./api/server');

const PORT =  8001;

server.listen(PORT, () => {
  console.log(`Listening on port ${PORT}...`);
});
