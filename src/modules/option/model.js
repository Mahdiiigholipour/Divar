const { Schema, model } = require("mongoose");

const optionSchema = new Schema({});

const OptionModel = model("option", optionSchema);

module.exports = OptionModel;
