const { Goal } = require("../models");

const goaldata = [
  {
    title: "Mental Health",
    content:
    "I'd like to meditate for 10 minutes everyday!",
    user_id: 1,
  },
  {
    title: "Learning Python",
    content:
    "I'd like to devote 10 hours each week to learning Python.",
    user_id: 2,
  },
  {
    title: "Leave the House",
    content:
    "I'd like to go check out local bands at a bar at least once a month.",
    user_id: 3,
  },
  {
    title: "Saving Money",
    content:
    "I'd like to put $200 into savings each month.",
    user_id: 4,
  },
  {
    title: "Conference Presentation",
    content:
      "I want to present a topic at an upcoming work conference!",
    user_id: 5,
  },
];

const seedGoal = () => Goal.bulkCreate(goaldata);

module.exports = seedGoal;
