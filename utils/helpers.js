const dayjs = require('dayjs')
const dayJsObject = dayjs();

module.exports = {
  dayjs: () => {
    return `${dayJsObject.format("dddd, MMMM D, YYYY")}`
  },
};