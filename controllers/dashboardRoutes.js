const router = require("express").Router();
const { Goal, User, Comment } = require("../models/");
const withAuth = require("../utils/auth");

// Get all of your goals
router.get("/", withAuth, async (req, res) => {
  try {
    //Get all goals where the current user is logged in
    const goalData = await Goal.findAll({
      where: {
        user_id: req.session.user_id,
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
    const goals = goalData.map((goal) => goal.get({ plain: true }));
    console.log(goals);
    res.render("dashboard", { goals, logged_in: req.session.logged_in });
  } catch (err) {
    res.redirect("/");
  }
});

// Get route for clicking on new goal
router.get("/new", (req, res) => {
  res.render("new-goal");
});

router.get("/edit/:id", withAuth, async (req, res) => {
  try {
    const goalData = await Goal.findByPk(req.params.id);

    if (goalData) {
      const goal = goalData.get({ plain: true });
      res.render("edit-goal", { goal });
    } else {
      res.status(404).end();
    }
  } catch (err) {
    res.redirect("login");
  }
});

module.exports = router;
