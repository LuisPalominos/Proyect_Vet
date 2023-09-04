// ---------------------------------------------------
// MODEL SETUP - User
// ---------------------------------------------------

// 1) Importing External Libraries
const mongoose = require("mongoose");

// 2) Creating Schema for Model (blueprint)
const VetClientListSchema = new mongoose.Schema(
{
    name:{
        type: String,
        required: [true, "please put  full name"],
        minLength: [2, "need normal names"]
    }, 
    email:{
        type: String,
        required: [true, "please put your email"],
        minLength: [2, "please put your real email"]
    },
    consult:{
        type: String,
        required: [true, "please ask your consult"],
    },
}, 
    { timestamps: true}
);

// 3) Creating Model using Schema
const VetClientListModel = mongoose.model("VetClientList", VetClientListSchema);

// 4) Exporting Model
module.exports = VetClientListModel;