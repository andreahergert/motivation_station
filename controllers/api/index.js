const router = require("express").Router();

const userRoutes = require("./userRoutes.js");
const goalRoutes = require("./goalRoutes.js");
const commentRoutes = require("./commentRoutes.js");

router.use("/users", userRoutes);
router.use("/goals", goalRoutes);
router.use("/comments", commentRoutes);

module.exports = router;
