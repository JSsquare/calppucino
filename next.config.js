/** @type {import('next').NextConfig} */
myMongoPassword = require('./config/pwd.config');


module.exports = {
  env: {
    MONGO_URI: `mongodb+srv://everyoneisafoodie:${myMongoPassword}@cluster0.gv5mz.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`,
    APP_PICKUP_NAME: 'UCVILLAGE'
  },
  reactStrictMode: true,
}
