// import models
const User = require("./User");
const Goal = require("./Goal");
const Comment = require("./Comment");

// User has many Goal
User.hasMany(Goal, {
  foreignKey: "user_id",
  onDelete: "CASCADE",
});

// User has many Comment
User.hasMany(Comment, {
  foreignKey: "user_id",
  onDelete: "CASCADE",
});

// Goal belongs to User
Goal.belongsTo(User, {
  foreignKey: "user_id",
  onDelete: "CASCADE",
});

// Goal has many Comment
Goal.hasMany(Comment, {
  foreignKey: "goal_id",
  onDelete: "CASCADE",
});

// Comment belongs to Goal
Comment.belongsTo(Goal, {
  foreignKey: "goal_id",
});

// Comment belongs to User
Comment.belongsTo(User, {
  foreignKey: "user_id",
});

module.exports = {
  User,
  Comment,
  Goal,
};
