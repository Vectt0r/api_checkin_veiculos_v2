const express = require('express');
const router = express.Router();
const cors = require("cors");
const PessoasController = require('../controllers/PessoasController');

router.use(cors());
router.get('/Pessoas', PessoasController.getAllPessoas);

router.post('/CreatePessoa', PessoasController.createPessoa);

module.exports = router;
