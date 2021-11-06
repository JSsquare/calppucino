// This file is git ignored
const myMongoPassword = encodeURIComponent(process.env.MONGOPWD)
console.log(myMongoPassword, "<<<<")
module.exports = myMongoPassword