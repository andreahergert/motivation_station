const { Comment } = require("../models");

const commentData = [
  {
    comment_content: "Wonderful idea and good luck!",
    user_id: 2,
    goal_id: 1,
  },
  {
    comment_content: "Good idea!",
    user_id: 3,
    goal_id: 2,
  },
  {
    comment_content: "I've done this and it helps so much! Good luck!",
    user_id: 4,
    goal_id: 3,
  },
  {
    comment_content: "Wonderful goal! I might do the same thing.",
    user_id: 5,
    goal_id: 4,
  },
  {
    comment_content: "What a great idea!",
    user_id: 1,
    goal_id: 5,
  },
];

const seedComments = () => Comment.bulkCreate(commentData);

module.exports = seedComments;
