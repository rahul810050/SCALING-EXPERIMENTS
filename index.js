const express = require("express");
const os = require("os");

const cpu_ct = os.cpus().length;
console.log(cpu_ct);




const app = express();

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});