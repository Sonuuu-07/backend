const express = require("express");
const router = express.Router();

// Dummy users data
const users = [
  { id: "1", name: "John" },
  { id: "2", name: "Jane" }
];

// GET all users
router.get("/", (req, res) => {
  res.json(users);
});

// GET user by ID
router.get("/:id", (req, res) => {
  const userId = req.params.id;

  const user = users.find(u => u.id === userId);

  if (user) {
    res.json(user);
  } else {
    res.status(404).json({ message: "User not found" });
  }
});

module.exports = router;