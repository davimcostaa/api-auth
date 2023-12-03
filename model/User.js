const mongoose = require('mongoose');

const telefoneSchema = new mongoose.Schema({
    numero: {
        type: String,
        required: true,
        min: 9
    },
    ddd: {
        type: String,
        required: true,
        min: 2
    }
});

const userSchema = new mongoose.Schema({
    nome: {
        type: String,
        required: true,
        min: 6,
        max: 255
    },
    email: {
        type: String,
        required: true,
        max: 255,
        min: 6
    },
    senha: {
        type: String,
        required: true,
        max: 1024,
        min: 6
    },
    telefones: {
        type: [telefoneSchema]
    },
    data_criacao: {
        type: Date,
        default: Date.now
    },
    data_atualizacao: {
        type: Date
    },
    ultimo_login: {
        type: Date
    },
    token: {
        type: String
    }
});

module.exports = mongoose.model('User', userSchema);
