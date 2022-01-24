const mongoose = require("mongoose");
const connectString = "mongodb+srv://Anton:djtoshka2@mycluster.0w4yp.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"

const connectDB = (url) => {
    return mongoose    
    .connect(url, {
        useNewUrlParser: true,
        useCreateIndex: true,
        useFindAndModify: false,
        useUnifiedTopology: true 
    })
}

module.exports = connectDB
