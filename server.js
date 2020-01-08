const express = require("express");
const app = express();
const PORT = 9000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("./client"));

const apiRoutes = require("./routes/apiRoutes");
app.use("/api", apiRoutes);

const clientRoutes = require("./routes/clientRoutes");
app.use("/", clientRoutes);

app.listen(PORT, () => {
  console.log(`listening on local: http://localhost:${PORT}`);
});
