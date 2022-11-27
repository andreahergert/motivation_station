const dayjs = require('dayjs')
const dayJsObject = dayjs();

module.exports = {
  dayjs: () => {
    return `${dayJsObject.format("dddd, MMMM D, YYYY")}`
  },
};

console.log(dayJsObject.format("dddd, MMMM D, YYYY"))
// goals: goal.createdAt
// comments: createdAt