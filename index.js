const express = require("express");
const mongoose = require("mongoose");
mongoose.connect(
  "mongodb+srv://sofiane:sofiane@cluster0-xfbr5.azure.mongodb.net/test?retryWrites=true", {
    useNewUrlParser: true
  }
);

const app = express();

require("./startup/routes")(app);
const port = process.env.PORT || "3000";
app.listen(port, () => console.log(`Listning on ${port} ...`));