var express = require("express");
var app = express();
var router = app.Router;
var mysql = require("mysql");
var bodyParser = require("body-parser");
var urlencodedParser = bodyParser.urlencoded({ extended: false });

// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: false }));
// app.use("/", express.static(__dirname + "/"));
// app.set("view engine", "html");

var connection = mysql.createConnection({
  host: "localhost",
  user: "DBAdmin",
  password: "Test@12345",
  database: "test",
});

connection.connect();
app.get("/api/getnodes", function (req, res, next) {
  connection.query("SELECT * FROM test1", (err, result) => {
    if (err) {
      console.log(err);
      res.json({ error: true });
    } else {
      console.log(result);
      res.json(result);
    }
  });
});

app.listen(4092, function () {
  console.log("Connected to port 3000 at http://localhost");
});
// connection.end(function (err) {
//   if (err) return console.error("error:" + err.message);
//   else return console.log("Connection is closed");
// });
