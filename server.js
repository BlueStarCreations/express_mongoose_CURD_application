const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const app = express();
const PORT = 9001;
let proj = "restfulCRUD";

app.use(express.static(path.join(__dirname, "./static")));
app.use(express.static(path.join(__dirname, "./public/dist/public")));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.json());

require("./server/config/mongoose");
require("./server/config/routes")(app);

app.listen(PORT, () => console.log(`listening to ${proj} on port ${PORT}`));
