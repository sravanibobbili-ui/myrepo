var express = require("express");
var app = express();
const lib = require("./file");
//console.log(file);
function executeQuery() {
  let c = lib.conn();
  //   app.get("/api/getnode", function (req, res, next) {
  let a = [];
  a = lib.query(c);
  for (var i in a) {
    console.log(a);
  }
  lib.closeConnection(c);
}

// app.listen(4093, function () {
//   console.log("Connected to port 3000 at http://localhost");
// });

//   console.log(a);
//   for (var i = 0; i < a.length(); i++) {
//     console.log("slno:" + slno[i] + "name:" + name[i]);
//   }

executeQuery();
