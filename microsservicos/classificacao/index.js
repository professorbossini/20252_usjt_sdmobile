const axios = require('axios')
const express= require('express')
const app = express()
app.use(express.json())

const palavraChave = 'importante'
const funcoes = {
  ObservacaoCriada: (observacao) => {
    observacao.status = 
      observacao.texto.includes(palavraChave) ? 'importante' : 'comum'
    axios.post('http://localhost:10000/eventos', {
      tipo: 'ObservacaoClassificada',
      dados: observacao
    })
  }
}
app.post('/eventos', (req, res) => {

})

const port = 7000
app.listen(port, console.log(`Classificação OK. Porta ${port}.`))