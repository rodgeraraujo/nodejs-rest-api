const express =  require('express')
const router = express.Router()

router.get('/musica', (req, res) => {
    res.send({ status: true,
        message: 'Musicas listadas com sucesso',
        data: [
            {
                nome: 'In the end',
                dataLancamento:'21/08/2001'
            },
            {
                nome: 'Best of me',
                dataLancamento:'12/09/2014'
            }
        ]
    })
})
module.exports = app => app.use('/api', router)