const mongoose = require("mongoose");

const dbConnect = mongoose.connect("mongodb+srv://admin:admin@cluster1.ujwzkvp.mongodb.net/Lecture?retryWrites=true&w=majority")

module.exports = dbConnect