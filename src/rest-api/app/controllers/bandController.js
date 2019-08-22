const express = require('express')
const router = express.Router();

router.get('/banda', async (req, res) => {
    try {
        res.send({ mensagem: 'Requisição com sucesso!' })
    } catch (err) {
        res.status(400).send({ erro: 'Erro para fazer a requisição' })
    }
})

router.post('/usuario', (req, res) => {
    try {
        res.status(201).send({
            mensagem: 'Post recebido com sucesso',
            email: req.body.email,
            nome: req.body.nome,
            senha: req.body.senha
        })
    } catch (err) {
        res.status(400).send({erro: 'Não foi possível realizar o POST'})
    }
})

module.exports = app => app.use('/api', router);