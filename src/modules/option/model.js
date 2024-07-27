const { Schema, model, Types } = require("mongoose");

const optionSchema = new Schema({
  title: { type: String, required: true },
  key: { type: String, required: true },
  type: {
    type: String,
    enum: ["Number", "String", "Array", "Boolean"],
    required: true,
  },
  required: { type: Boolean, required: false, default: false },
  enum: { type: Array, default: [] },
  guid: { type: String, required: false },
  category: { type: Types.ObjectId, ref: "category", required: true },
});

const OptionModel = model("option", optionSchema);

module.exports = OptionModel;
