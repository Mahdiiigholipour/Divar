const autoBind = require("auto-bind");
const OptionService = require("./service");
class OptionController {
  #service;
  constructor() {
    autoBind(this);
    this.#service = OptionService;
  }
}

module.exports = new OptionService();
