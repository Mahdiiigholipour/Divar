const { Schema, model } = require("mongoose");

const OTPSchema = new Schema({
  code: { type: String, required: false, default: undefined },
  expiresIn: { type: Number, required: false, default: 0 },
});

const userSchema = new Schema(
  {
    fullName: { type: String, required: false },
    mobile: { type: String, required: true, unique: true },
    verifiedMobile: { type: Boolean, required: true, default: false },
    OTP: { type: OTPSchema },
  },
  { timestamps: true }
);

const UserModel = model("user", userSchema);

module.exports = UserModel;
