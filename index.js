const express = require("express");
const mongoose = require("mongoose");
mongoose.connect(
  "mongodb+srv://sofiane:sofiane@cluster0-xfbr5.azure.mongodb.net/test?retryWrites=true",
  {
    useNewUrlParser: true
  }
);

const app = express();

require("./startup/routes")(app);

app.listen(3000, () => console.log("Listning on 3000 ..."));
