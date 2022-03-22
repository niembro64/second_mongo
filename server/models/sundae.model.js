const mongoose = require("mongoose");

const SundaeSchema = new mongoose.Schema(
  {
    flavor: {
      type: String,
      required: [true, "Flavor Needed!!!"],
      minLength: [4, "Min length 4 chars"],
      validate: {
        validator: (input) => {
          return !input.toUppserCase().includes("CHOCOLATE");
        },
        message: "No Chocolate Allowed!",
      },
    },
    numScoops: Number,
    whipped: Boolean,
    name: String,
    toppings: [String],
  },
  { timestamps: true }
);

const Sundae = mongoose.model("Sundae", SundaeSchema);

module.exports = Sundae;
