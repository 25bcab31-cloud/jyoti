
const mongoose = require("mongoose");

// Connect to MongoDB
mongoose.connect("mongodb://127.0.0.1:27017/portfolioDB")
.then(() => console.log("MongoDB Connected"))
.catch(err => console.log(err));

// Create Schema
const messageSchema = new mongoose.Schema({
    name: String,
    email: String,
    message: String
});

// Create Model
const Message = mongoose.model("Message", messageSchema);

// Export model
module.exports = Message;