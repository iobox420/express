const express = require("express");
const path = require("path");
const config = require("./config.js");
const app = express();

app.use(express.static(path.join(__dirname, "../sushi-store/build")));

app.get("/sushi", function (req, res) {
  res.sendFile(path.join(__dirname, "../sushi-store/build", "index.html"));
});
/*app.use("/", router);*/
app.use("/api/sushi/images", express.static(path.join(__dirname, "images")));
app.listen(config.staticNodeJsServerPort, config.staticNodeJsServerIp, () => {
  console.log(
    `staticNodeJsServer listening at http://${config.staticNodeJsServerIp}:${config.staticNodeJsServerPort}`
  );
});
/*
app.use(express.static(path.resolve(__dirname, "../base/build")));

// Handle GET requests to /api route
app.get("/api", (req, res) => {
  res.json({ message: "Hello from server!" });
});

// All other GET requests not handled before will return our React app
app.get("*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "../base/build", "index.html"));
});

app.listen(port, host, () => {
  console.log(`react app listening at http://${host}:${port}`);
});
*/
