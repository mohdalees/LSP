const mongoose = require("mongoose");

const providerSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    prof: { type: String, required:true }, // plumber, electrician, etc.
    price: { type:Number, required:true }, 
  },
  { timestamps: true },
);

module.exports = mongoose.model("Provider", providerSchema);
