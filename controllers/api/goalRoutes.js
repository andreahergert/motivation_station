const router = require("express").Router();
const { Goal } = require("../../models");
const sequelize = require("../../config/connection");
const withAuth = require("../../utils/auth");

router.post("/", withAuth, async (req, res) => {
  try {
    const newGoal = await Goal.create({
      title: req.body.title,
      content: req.body.content,
      user_id: req.session.user_id,
    });

    console.log("New goal: ", newGoal);

    res.json(newGoal);
  } catch (err) {
    console.log("Goal failed!", err);
    res.status(500).json(err);
  }
});

router.put("/:id", withAuth, async (req, res) => {
  try {
    const updateGoal = await Goal.update(req.body, {
      where: {
        id: req.params.id,
      },
    });

    if (updateGoal) {
      res.status(200).json(updateGoal);
    } else {
      res.status(404).json({ message: "No goal found with this id!" });
    }
  } catch (err) {
    res.status(500).json(err);
  }
});

router.delete("/:id", withAuth, async (req, res) => {
  try {
    const deleteGoal = Goal.destroy({
      where: {
        id: req.params.id,
      },
    });

    if (deleteGoal) {
      res.status(200).json(deleteGoal);
    } else {
      res.status(404).json({ message: "No goal found for this id!" });
    }
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
