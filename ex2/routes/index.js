var express = require('express');
var contractsController = require('../controllers/contracts');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  var data = new Date().toISOString().substring(0, 16);
  contractsController.list().
    then(dados => {
      res.render('index', { contracts: dados, d: data })}
    ).catch(erro => {
      res.render('error', {error: erro})
    })
});

router.get('/:id', function(req, res, next) {
  var data = new Date().toISOString().substring(0, 16);
  contractsController.consult(req.params.id).
    then(dados => {
      res.render('contract', { contract: dados, d: data })
    })
});

router.get("/inst/:nipc", function(req, res, next) {
  var data = new Date().toISOString().substring(0, 16);
  contractsController.listInstitution(req.params.nipc).
    then(dados => {
      res.render('index', { contracts: dados, d: data })
    })
});

module.exports = router;
