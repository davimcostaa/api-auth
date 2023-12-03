const router = require('express').Router();
const User = require('../model/User');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const { registerValidation, loginValidation } = require('../validation/validation');

router.post('/register', async (req, res) => {
    // validação antes de enviar
    const { error } = registerValidation(req.body);
    if(error) return res.status(400).send({"messagem": error.details[0].message});

    // checar e-mail enviado
    const emailExist = await User.findOne({email: req.body.email});
    if (emailExist) return res.status(400).send({"mensagem": "E-mail já existente"})

    // gerar token
    const token = jwt.sign({ _id: req._id }, process.env.TOKEN_SECRET, {
        expiresIn: '30m'  
    });

    // Hash senha
    const salt = await bcrypt.genSalt(10);
    const hashSenha = await bcrypt.hash(req.body.senha, salt);
    
    const user = new User({
        nome: req.body.nome,
        email: req.body.email,
        senha: hashSenha,
        telefones: req.body.telefones,
        data_atualizacao: '',
        ultimo_login: '',
        token: token
    });
    try {
        const savedUser = await user.save();
        const responseUser = {
            _id: savedUser._id,
            data_criacao: savedUser.data_criacao,
            data_atualizacao: savedUser.data_atualizacao,
            ultimo_login: savedUser.ultimo_login,
            token: savedUser.token
        };
        res.send(responseUser);
    } catch (error) {
        res.status(400).send(error)
    }

});

router.post('/login', async (req, res) => {

    // validação antes de enviar
    const { error } = loginValidation(req.body);
    if(error) return res.status(400).send({"messagem": error.details[0].message});

    // checar se o e-mail existe
    const user = await User.findOne({email: req.body.email});
    if (!user) return res.status(400).send({"mensagem": "Usuário ou senha inválidos!"})

    //checar se a senha está correta
    const validPass = await bcrypt.compare(req.body.senha, user.senha)
    if(!validPass) return res.status(401).send({"mensagem": "Usuário ou senha inválidos!"})

    // gerar token
    const token = jwt.sign({ _id: user._id }, process.env.TOKEN_SECRET, {
        expiresIn: '30m'  
    });

    // salvar novo token e nova data de login
    user.token = token;
    user.ultimo_login = new Date();
    await user.save();

    res.send({
        _id: user._id,
        data_criacao: user.data_criacao,
        data_atualizacao: user.data_atualizacao,
        ultimo_login: user.ultimo_login,
        token: user.token
    });

});


module.exports = router;