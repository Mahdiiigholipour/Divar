const express = require("express");
const dotenv = require("dotenv");
const SwaggerConfig = require("./src/configs/swagger.config");
const mainRouter = require("./src/app.routes");
const { notFoundRoute } = require("./src/common/exceptions/route-exceptions");
const allExceptionsHandler = require("./src/common/exceptions/all-exceptions");
const cookieParser = require("cookie-parser");
const configEjs = require("./src/configs/ejs.config");
dotenv.config();

async function main() {
  const app = express();
  const port = process.env.SERVER_PORT;

  require("./src/configs/mongo.config");

  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));

  app.use(cookieParser(process.env.COOKIE_SECRET_KEY));

  configEjs(app);

  SwaggerConfig(app);

  app.use(mainRouter);

  notFoundRoute(app);
  allExceptionsHandler(app);

  app.listen(port, () => {
    console.log(`server : http://127.0.0.1:${port}`);
  });
}

main();
