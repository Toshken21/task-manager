const mongoose = require("mongoose");


const TaskSchema = new mongoose.Schema({
    // it will only use the properties of the schema
    name:{
    type:String,
    required: [true, "must provide a name"],
    trim: true,
    maxlength: [20, "name cannot be more than 20 characters long"],
},
    completed: {
        type: Boolean,
        default: false,
},
})

module.exports = mongoose.model("Task", TaskSchema)