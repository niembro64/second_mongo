const mongoose = require("mongoose");

mongoose
  .connect("mongodb://localhost/march_2022_sundaes", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("DB CONNECTED"))
  .catch((err) =>
    console.log("XXXXXXXXXXXXXXXXXXX DB NOT CONNECTED XXXXXXXXXXXXXXXXXXX", err)
  );
