const axios = require('axios')
const express = require('express')
const app = express()
const { v4: uuidv4 } = require('uuid')
app.use(express.json())
/*
{
  1: [
    {id: 1000, texto: comprar açúcar, idLembrete: 1},
    {id: 1001, texto: 2 colheres de pó, idLembrete: 1},
  ],
}
*/
const baseObservacoes = {}
//POST /lembretes/1/observacoes
app.post('/lembretes/:id/observacoes',(req, res) => {
  const idObs = uuidv4()
  const { texto } = req.body
  const observacao = {
    id: idObs,
    texto,
    idLembrete: req.params.id
  }
  const observacoes = baseObservacoes[req.params.id] || []
  observacoes.push(observacao)
  baseObservacoes[req.params.id] = observacoes
  axios.post('http://localhost:10000/eventos', {
    tipo: 'ObservacaoCriada',
    dados: observacao
  })
  res.status(201).json(observacao)
})
//GET
app.get('/lembretes/:id/observacoes', (req, res) => {
  res.json(baseObservacoes[req.params.id])
})

app.post('/eventos', function(req, res){
  const evento = req.body
  console.log(evento)
  res.end()  
})

const port = 5000
app.listen(port, console.log(`Observações. Porta ${port}.`))