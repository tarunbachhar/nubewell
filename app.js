const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const routes = require("./api/routes");

//port
app.set("port", 3000);

//body parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

//routes
app.use("/api", routes);

//start port
app.listen(app.get("port"), (req, res) => {
  console.log("Server started on port 3000");
});
