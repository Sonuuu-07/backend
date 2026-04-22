const express = require("express");
require("dotenv").config();

const app = express();

// middleware
app.use(express.json());

// 🔥 ADD THIS LINE
const userRoutes = require("./routes/userRoutes");

// routes
app.get("/", (req, res) => {
  res.send("API Launchpad is running");
});

app.get("/api/status", (req, res) => {
  res.json({
    status: "success",
    message: "API is live and working"
  });
});

// 🔥 ADD THIS LINE
app.use("/api/users", userRoutes);

// PORT fix
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});