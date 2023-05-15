var express = require('express');
var router = express.Router();
var contractsController = require('../controllers/contracts');

/* GET home page of Contracts */
router.get('/', function(req, res, next) {
  if (req.query.inst != null) {
    console.log("Fui à instituição")
    contractsController.listInstitution(req.query.inst).
      then(dados => {
        res.status(200).jsonp(dados);
      })
    
  } else if (req.query.year != null) {
    console.log("Fui ao ano")
    contractsController.listYear(req.query.year).
      then(dados => {
        res.status(200).jsonp(dados);
      })
  } else if (req.query.course != null) {
    console.log("Fui ao curso")
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
  console.log("Fui ao ID")
  contractsController.consult(req.params.id).
    then(dados => {
      res.status(200).jsonp(dados);
    })
});




router.get('/courses', function(req, res, next) {
  contractsController.listCourses().
    then(dados => {
      res.status(200).jsonp(dados);
    })
});

router.get('/institutions', function(req, res, next) {
  contractsController.listInstitutions().
    then(dados => {
      res.status(200).jsonp(dados);
    })
});

router.post('/', function(req, res, next) {
  contractsController.insert(req.body).
    then(dados => {
      res.status(200).jsonp(dados);
    })
});

router.delete('/:id', function(req, res, next) {
  contractsController.remove(req.params.id).
    then(dados => {
      res.status(200).jsonp(dados);
    })
});


module.exports = router;
