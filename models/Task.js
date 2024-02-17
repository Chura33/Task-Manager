const mongoose = require("mongoose");

const TaskSchema = mongoose.Schema({
    name:{
        type:String,
        required:[true, "Name is required"],
        maxLength:[20, "Name can't be more than 20 characters"],
        trim: true
    },

    completed:{
        type: Boolean,
        default: false
    }
})

module.exports = mongoose.model("Task", TaskSchema)