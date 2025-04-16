const mongoose = require("mongoose")
const URI = process.env.MONGODB_URI

const connectDb = async()=>{
  try {
    mongoose.connect(URI)
    console.log("database connection succesful")
    
  } catch (error) {
    console.log("database connection failed")
  }
}

module.exports = connectDb