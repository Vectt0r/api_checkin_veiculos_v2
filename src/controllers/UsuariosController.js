const Usuarios = require('../models/Usuarios');

exports.getAllUsers = async (req, res) => {
    res.send('Lista de todos os usuários');
};

exports.createUser = async (req, res) => {
    const { nome, usuario, senha } = req.body;

    try {
        const newUser = await Usuarios.create({
            nome,
            usuario,
            senha
        });

        res.status(201).json(newUser);
    } catch (error) {
        console.log(error)
        res.status(500).json({error: "Erro ao criar usuario"});
    }
};