let mysql = require("mysql");
let fs = require("fs");
var express = require("express");
var app = express();
var ap = express();
function conn() {
  let connection = mysql.createConnection({
    connectionlimit: 10,
    host: "localhost",
    user: "DBAdmin",
    password: "Test@12345",
    // port: 3306,
    database: "test",
  });
  connection.connect(function (err) {
    console.log("Starting Connection with DB ....");
    if (err) return console.error("error:" + err.message);
    else return console.log("connected to mysql database");
  });
  return connection;
}
let st = [];
async function query(connection) {
  var queryString = "select * from test1 ";
  let result = [];
  let val = [];
  let val2 = [];
  let i = 1;

  await connection.query(queryString, (err, rows, result) => {
    if (err) throw err;
    for (let i in rows) {
      result = rows[i].name;
      val.push(result);
      // parse to json file
      var newData = JSON.stringify(rows);
      fs.writeFileSync("data.json", newData, (err) => {
        if (err) throw err;
      });
    }

    app.get("/api/getnode", function (reg, res, next) {
      res.setHeader("Access-Control-Allow-Origin", "*");
      res.json(val);
      console.log(val);
     });
    ap.get("/api/getdata", function (re, resu, next) {
      resu.setHeader("Access-Control-Allow-Origin", "*");
      resu.json(rows);
      console.log(rows);
    });
  });
}
app.listen(7890, function () {
  console.log("Connected to port 8900 at http://localhost");
});

ap.listen(7891, function () {
  console.log("Connected to port 6700 at http://localhost");
});

let c = conn();
let n = query(c);

