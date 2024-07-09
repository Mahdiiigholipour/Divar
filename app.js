const express = require("express");
const dotenv = require("dotenv");
const SwaggerConfig = require("./src/configs/swagger.config");
dotenv.config();

async function main() {
  const app = express();
  const port = process.env.SERVER_PORT;

  require("./src/configs/mongo.config");
  SwaggerConfig(app);

  app.listen(port, () => {
    console.log(`server run on port ${port} : https://localhost:${port}`);
  });
}

main();
