require("dotenv").config();
const express = require("express");

const app = express();

// Middleware
app.use(express.json());

// Routes import
const userRoutes = require("./routes/userRoutes");

// Routes use
app.use("/api/users", userRoutes);

// Home route
app.get("/", (req, res) => {
  res.send("🚀 API Launchpad is running...");
});

// Status route (IMPORTANT)
app.get("/api/status", (req, res) => {
  res.status(200).json({
    status: "success",
    message: "API is live and working"
  });
});

// Server start
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});