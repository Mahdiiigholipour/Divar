const express = require("express");
const dotenv = require("dotenv");
dotenv.config();

async function main() {
  const app = express();
  const port = process.env.SERVER_PORT;

  require("./src/configs/mongo.config");

  
  app.listen(port, () => {
    console.log(`server : http://127.0.0.1:${port}`);
  });
}

main();
