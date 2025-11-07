const express = require('express');
const router = express.Router();
const cors = require("cors");
const UsuariosController = require('../controllers/UsuariosController');

router.use(cors());
router.get('/Usuario', UsuariosController.getAllUsers);

router.post('/CreateUsuario', UsuariosController.createUser);

module.exports = router;

