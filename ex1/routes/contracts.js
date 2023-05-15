var express = require('express');
var router = express.Router();
var contractsController = require('../controllers/contracts');

/* GET home page of Contracts */
router.get('/', function(req, res, next) {
  if (req.query.inst != null) {
    contractsController.listInstitution(req.query.inst).
      then(dados => {
        res.status(200).jsonp(dados);
      })
    
  } else if (req.query.year != null) {
    contractsController.listYear(req.query.year).
      then(dados => {
        res.status(200).jsonp(dados);
      })
  } else if (req.query.course != null) {
    contractsController.listCourses().
      then(dados => {
        res.status(200).jsonp(dados);
      })
  } else {
    contractsController.list().
      then(dados => {
        res.status(200).jsonp(dados);
      })
  }
});

router.get('/:id', function(req, res, next) {
  if (req.params.id == "courses"){
    contractsController.listCourses().
    then(dados => {
      res.status(200).jsonp(dados);
    })
  } else if(req.params.id == "instituitions"){
    contractsController.listInstitutions().
    then(dados => {
      res.status(200).jsonp(dados);
    })
  } else {
  contractsController.consult(req.params.id).
    then(dados => {
      res.status(200).jsonp(dados);
    })
  }
});



router.post('/', function(req, res, next) {
  contractsController.insert(req.body).
    then(dados => {
      res.status(200).jsonp(dados);
    })
});

router.delete('/:id', function(req, res, next) {
  contractsController.delete(req.params.id).
    then(dados => {
      res.status(200).jsonp(dados);
    })
});


module.exports = router;
