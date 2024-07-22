const autoBind = require("auto-bind");
const OptionModel = require("./model");

class OptionService {
  #model;
  constructor() {
    autoBind(this);
    this.#model = OptionModel;
  }
}

module.exports = new OptionService();
