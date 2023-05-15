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

module.exports.listYear = year => {
    return cModel.find({"DataInicioContrato":{$regex:String(year)}})
    .then(dados=>{
        return dados;
    })
    .catch(erro=>{
        return erro;
    });
}

// db.contracts.find({"NomeInstituicao": {$regex:"Universidade do Minho"}}).count()
module.exports.listInstitution = institution => {
    return cModel.find({"NomeInstituicao": {$regex:institution}})
    .then(dados=>{
        return dados;
    })
    .catch(erro=>{
        return erro;
    });
}

module.exports.listCourses = () => {
    return cModel.distinct("Curso")
    .then(dados=>{
        return dados;
    })
    .catch(erro=>{
        return erro;
    });
}

module.exports.listInstitutions = () => {
    return cModel.distinct("NomeInstituicao")
    .then(dados=>{
        return dados;
    })
    .catch(erro=>{
        return erro;
    });
}

module.exports.insert = contract => {
    return cModel.create(contract)
    .then(dados=>{
        return dados;
    })
    .catch(erro=>{
        return erro;
    });
}

module.exports.delete = id => {
    return cModel.deleteOne({"_id":id})
    .then(dados=>{
        return dados;
    }).catch(erro=>{
        return erro;
    });
}