const connection = require('../database/connection');

//Lista todos as pessoas cadastradas no banco
module.exports = {
    async index(request, response) {

        const usuario = await connection('usuario')
        .select('*');

        return response.json(usuario);
    },

//cadastra uma nova pessoa
    async create(request, response) {
        const { nome, idade } = request.body;

        const usuario = await connection('usuario').insert({
            nome,
            idade
        });
        return response.status(204).send();
    },

//Muda o nome de uma pessoa
    async update(request, response) {
        const { idusuario } = request.params;
        const { nome, idade } = request.body;

        await connection('usuario')
        .where('idusuario', idusuario)
        .update({
            nome,
            idade
        });
        return response.status(204).send();
    },

//Deleta uma pessoa do banco
    async delete(request, response) {
        const { idusuario } = request.params;

        const usuario = await connection('usuario')
        .where('idusuario', idusuario)
        .first();

        await connection('usuario').where('idusuario', idusuario).delete();

        return response.status(204).send();
    }
};