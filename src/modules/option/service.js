const autoBind = require("auto-bind");
const OptionModel = require("./model");

class OptionService {
  #model;
  constructor() {
    autoBind(this);
    this.#model = OptionModel;
  }

  async create(optionDto){
    
  }
}

module.exports = new OptionService();
