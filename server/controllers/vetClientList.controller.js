// ---------------------------------------------------
// CONTROLLER SETUP - User
// ---------------------------------------------------

// 1) Importing Model
const mongoose = require("mongoose");
const {ObjectId} = mongoose.Types;
const VetClientListModel = require("../models/vetClientList.model");

// 2) Exporting Controller functions
module.exports = {
  // 2.1) READ METHODS
    getAllClients : (req, res) => {
        VetClientListModel.find()
            .then((Clients) => {
                res.json({data: Clients})
            })
            .catch((error) => {
                res.status(500).json({error: error})
            })
    },
    getOneClient : (req, res) => {
        let id = req.params.id
        if (!ObjectId.isValid(id))
            return res.status(400).json({message: "id doesn't match the expected format"});
        VetClientListModel.findOne({_id: id})
            .then((client) => {
                res.json({data: client})
            })
            .catch((error) => {
                res.status(500).json({error: error})
            })
    },
    // 2.2) CREATE METHODS
    createClient : (req, res) => {
        let data = req.body;
        VetClientListModel.create(data)
            .then((client) => {
                res.json({data: client})
            })
            .catch((error) => {
                if (error instanceof mongoose.Error.ValidationError){
                    let keys = Object.keys(error.errors);
                    let error_dict = {};
                    keys.map((key) => {
                        error_dict[key] = error.errors[key].message
                    });
                    res.status(500).json({error: error_dict})
                } else {
                    res.status(500).json({error: error})
                }
            })
    },
    // 2.3) UPDATE METHODS
    editClient : (req, res) => {
        let id = req.params.id;
        let data = req.body;
        const updateOptions = {
            new: true, // Return the updated document
            runValidators: true, // Enforce validation during update
        };
        if (!ObjectId.isValid(id))
            return res.status(400).json({message: "id doesn't match the expected format"});
        VetClientListModel.findByIdAndUpdate({_id: id}, data, updateOptions)
            .then(() => {
                res.json({success: true})
            })
            .catch((error) => {
                if (error instanceof mongoose.Error.ValidationError){
                    let keys = Object.keys(error.errors);
                    let error_dict = {};
                    keys.map((key) => {
                        error_dict[key] = error.errors[key].message
                    });
                    res.status(500).json({error: error_dict})
                } else {
                    res.status(500).json({error: error})
                }
            })
    },
    // 2.4) DELETE METHODS
    deleteClient : (req, res) => {
        let id = req.params.id
        if (!ObjectId.isValid(id))
            return res.status(400).json({message: "id doesn't match the expected format"});
        VetClientListModel.deleteOne({_id: id})
            .then(() => {
                res.json({success: true})
            })
            .catch((error) => {
                res.status(500).json({error: error})
            })
    },
};