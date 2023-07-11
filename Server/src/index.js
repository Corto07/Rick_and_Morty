const http = require("http");
const fs = require("fs");
const data = require("./utils/data")

const PORT = 3001;


const server = http.createServer((req, res) => {
  res.setHeader('Access-Control-Allow-Origin', '*');

  if (req.url.includes('/rickandmorty/character')) {
    const urlParts = req.url.split('/');
    const id = urlParts[urlParts.length - 1];

    const character = data.find((character) => character.id === Number(id));
    
    if (character) {
      res.writeHead(200, {'Content-Type': 'application/json'});
      res.end(JSON.stringify(character));
    } else {
      res.writeHead(404, {'Content-Type': 'text/plain'});
      res.end(JSON.stringify({ error: "Character not found" }));
    }
    return;
  }
});


server.listen(PORT, "localhost");

module.exports = server
