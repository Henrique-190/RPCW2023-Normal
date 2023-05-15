var cModel = require('../models/contracts');

/*devolve uma lista com todos os contratos;
devolve o contrato com identificador id;
devolve a lista dos contratos realizados durante o ano YYYY;
devolve a lista dos contratos realizados pela instituição contratante AAA;
devolve a lista dos cursos dos contratados (sem repetições);
devolve a lista das instituições contratantes (sem repetições);
acrescenta um contrato novo à BD;
elimina da BD o contrato com o identificador id.*/

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
    return cModel.findOne({"ORCID":id})
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
    return cModel.deleteOne({"ORCID":id})
    .then(dados=>{
        return dados;
    }).catch(erro=>{
        return erro;
    });
}