const mongose = require("mongoose")
var mongoDB = "mongodb://localhost:27017/julio";
mongose.connect(mongoDB, { useNewUrlParser: true, useUnifiedTopology: true });
const schema = mongose.Schema({
    user_id:String,
    name:String,
    email:String,
    password:String,
    role:String
},{collection:"user"})

module.exports = mongose.model("Users",schema)