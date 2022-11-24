const router = require("express").Router();
const { Goal, User, Comment } = require("../models/");
const withAuth = require("../utils/auth");

// get all goals for homepage
router.get("/", async (req, res) => {
  try {
    const postData = await Goal.findAll({
      include: [User],
    });

    const goals = postData.map((goal) => goal.get({ plain: true }));

    res.render("homepage", { goals, logged_in: req.session.logged_in });
  } catch (err) {
    res.status(500).json(err);
  }
});

// get single goal
router.get("/goal/:id", withAuth, async (req, res) => {
  try {
    const postData = await Goal.findOne({
      where: {
        id: req.params.id,
      },

      include: [
        {
          model: Comment,
          include: {
            model: User,
            attributes: ["username"],
          },
        },
        {
          model: User,
          attributes: ["username"],
        },
      ],
    });

    if (postData) {
      const goal = postData.get({ plain: true });
      console.log(goal);
      res.render("goal-by-id", { goal, logged_in: req.session.logged_in });
    } else {
      res.status(404).end();
    }
  } catch (err) {
    res.status(500).json(err);
  }
});

//Route to login or signup page
router.get("/login", (req, res) => {
  res.render("login");
});

module.exports = router;
