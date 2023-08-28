// ---------------------------------------------------
// MODEL SETUP - User
// ---------------------------------------------------

// 1) Importing External Libraries
const mongoose = require("mongoose");

// 2) Creating Schema for Model (blueprint)
const VetClientListSchema = new mongoose.Schema(
{
    date:{
        type: Date,
        required: [true, "please put due date of your consult"],
        validate: {
            validator: function (value) {
                return value > Date.now();
            },
            message: "Due date have expired",
        },
    },
    Hour:{
        type: String,
        required: [true, "please put due hour of your consult"],
        enum: ["8am-9am", "9am-10am", "10am-11am", "11am-12am", "12am-1pm",
                "1pm-2pm", "3pm-4pm", "4pm-5pm", "5pm-6pm", "6pm-7pm", "7pm-8pm"]
    },
    petname:{
        type: String,
        required: [true, "please put pet full name"],
        minLength: [2, "pets need normal names"]
    }, 
    ownername:{
        type: String,
        required: [true, "please put your full name"],
        minLength: [2, "plase put your real name"]
    },
    email:{
        type: String,
        required: [true, "please put your email"],
        minLength: [2, "please put your real email"]
    },
}, 
    { timestamps: true}
);

// 3) Creating Model using Schema
const VetClientListModel = mongoose.model("VetClientList", VetClientListSchema);

// 4) Exporting Model
module.exports = VetClientListModel;