const Joi = require('@hapi/joi');

const telefoneSchema = Joi.object({
    numero: Joi.string().min(9).required(),
    ddd: Joi.string().min(2).required()
});

// Validação de criação
const registerValidation = (data) => {
    const schema = Joi.object({
        nome: Joi.string().min(6).required(),
        email: Joi.string().min(6).required().email(),
        senha: Joi.string().min(6).required(),
        telefones: Joi.array().items(telefoneSchema)
    })

    return schema.validate(data)
}

// Validação de login
const loginValidation = (data) => {
    const schema = Joi.object({
        email: Joi.string().min(6).required().email(),
        senha: Joi.string().min(6).required()
    })

    return schema.validate(data)
}

module.exports.registerValidation = registerValidation;
module.exports.loginValidation = loginValidation;