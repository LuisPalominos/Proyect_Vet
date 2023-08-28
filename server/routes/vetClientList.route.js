// ---------------------------------------------------
// ROUTES SETUP - User
// ---------------------------------------------------

// 1) Importing Controller
const { getAllClients, getOneClient, createClient, deleteClient, editClient} = require("../controllers/vetClientList.controller");

// 2) Exporting Routes
module.exports = (app) => {
    app.get('/clients/', getAllClients);
    app.get('/clients/:id/', getOneClient);
    app.post('/clients/', createClient);
    app.put('/clients/:id/', editClient);
    app.delete('/clients/:id/', deleteClient);
}