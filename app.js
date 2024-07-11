const express = require("express");
const dotenv = require("dotenv");
const SwaggerConfig = require("./src/configs/swagger.config");
const mainRouter = require("./src/app.routes");
dotenv.config();

async function main() {
  const app = express();
  const port = process.env.SERVER_PORT;

  require("./src/configs/mongo.config");
  SwaggerConfig(app);
  app.use(mainRouter);

  app.listen(port, () => {
    console.log(`server : http://127.0.0.1:${port}`);
  });
}

main();
