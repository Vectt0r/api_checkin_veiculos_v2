const express = require('express');
const router = express.Router();
const cors = require("cors");
const UsersController = require('../controllers/UsersController');

router.use(cors());
router.get('/users', UsersController.getAllUsers);

router.post('/CreateUser', UsersController.createUser);

module.exports = router;

