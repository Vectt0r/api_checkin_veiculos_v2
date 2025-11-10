const Pessoas = require('../models/Pessoas');

exports.getAllPessoas = async (req, res) => {
    try {
        const pessoas = await Pessoas.findAll();
        res.status(200).json(pessoas);
    } catch (error) {
        res.status(500).json({ error: 'Erro ao buscar Pessoas.' });
    }}

exports.createPessoa = async (req, res) => {
    const { nome_completo, cpf, setor, tipo } = req.body;

    try {
        const newPessoa = await Pessoas.create({
            nome_completo,
            cpf,
            setor,
            tipo,
        });

        res.status(201).json(newPessoa);
    } catch (error) {
        console.log(error)
        res.status(500).json({error: "Erro ao criar pessoa"});
    }
}