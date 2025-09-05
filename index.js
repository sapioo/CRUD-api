const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());
app.use(express.static("public"));

const taskRoutes = require("./api/routes/taskRoutes");

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("Successfully connected to MongoDB! 👍"))
  .catch((err) => console.error("Could not connect to MongoDB.", err));

app.use("/api/tasks", taskRoutes);

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
