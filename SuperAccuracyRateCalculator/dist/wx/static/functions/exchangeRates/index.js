const cloud = require('wx-server-sdk')
// 云函数入口函数
exports.main = async (event, context) => {
  return {
    data: 123
  }
}