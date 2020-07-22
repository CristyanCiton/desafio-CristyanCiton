const express = require('express');
const routes = express.Router();

const PersonController = require('./controllers/PersonController');

routes.get('/pessoa', PersonController.index);
routes.post('/novapessoa', PersonController.create);
routes.post('/pessoa/:idusuario', PersonController.update);
routes.delete('/pessoa/:idusuario', PersonController.delete);

module.exports = routes;