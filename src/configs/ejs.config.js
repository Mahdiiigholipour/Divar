const express = require("express");
const expressEjsLayouts = require("express-ejs-layouts");

function configEjs(app) {
  app.use(express.static("public"));
  app.use(expressEjsLayouts);
  app.set("view engine", "ejs");
  app.set("layout", "./layouts/panel/main.ejs");
}

module.exports = configEjs;
