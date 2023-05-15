var cModel = require('../models/contracts');


module.exports.list = () => {
    return cModel.find()
    .then(dados=>{
        return dados;
    })
    .catch(erro=>{
        return erro;
    });
}

module.exports.consult = id => {
    return cModel.findOne({"_id":id})
    .then(dados=>{
        return dados;
    })
    .catch(erro=>{
        return erro;
    });
}

module.exports.listInstitution = institution => {
    var number = parseInt(institution);
    return cModel.find({"NIPCInstituicao": number})
    .then(dados=>{
        return dados;
    })
    .catch(erro=>{
        return erro;
    });
}