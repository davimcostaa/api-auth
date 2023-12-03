const jwt = require('jsonwebtoken');

module.exports = function(req, res, next) {
    const authHeader = req.header('Authentication');
    
    if (!authHeader) {
        return res.status(401).send({"mensagem": "Não autorizado!"});
    }

    const [bearer, token] = authHeader.split(' ');

    if (bearer !== 'Bearer' || !token) {
        return res.status(401).send({"mensagem": "Formato de token inválido"});
    }

    try {
        const verified = jwt.verify(token, process.env.TOKEN_SECRET);
        req.user = verified;
        next();
    } catch (error) {
        if (error.name === 'TokenExpiredError') {
            return res.status(401).send({"mensagem": "Sessão inválida"});
        }

        res.status(400).send({"mensagem": "Token inválido"});
    }
};
