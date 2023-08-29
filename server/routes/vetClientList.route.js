// ---------------------------------------------------
// ROUTES SETUP - User
// ---------------------------------------------------

// 1) Importing Controller
const { getAllClients, getOneClient, createClient, deleteClient, editClient} = require("../controllers/vetClientList.controller");

// 2) Exporting Routes
module.exports = (app) => {
    app.get('/api/clients/', getAllClients);
    app.get('/api/clients/:id/', getOneClient);
    app.post('/api/clients/', createClient);
    app.put('/api/clients/:id/', editClient);
    app.delete('/api/clients/:id/', deleteClient);
}