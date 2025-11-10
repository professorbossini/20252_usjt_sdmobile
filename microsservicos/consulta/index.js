const express = require('express')
const app = express()
app.use(express.json())

const baseConsulta = {}

const funcoes = {
  LembreteCriado: (lembrete) => {
    baseConsulta[lembrete.id] = lembrete
  },
  ObservacaoCriada: (observacao) => {
    const observacoes = baseConsulta[observacao.idLembrete]['observacoes'] || []
    observacoes.push(observacao)
    baseConsulta[observacao.idLembrete]['observacoes'] = observacoes
  }
}


app.get('/lembretes', (req, res) => {
  res.json(baseConsulta)
})

app.post('/eventos', (req, res) => {
  const evento = req.body
  console.log(evento)
  try{
    const funcao = funcoes[evento.tipo]
    funcao(evento.dados)
    // funcoes[evento.tipo](evento.dados)
  }
  catch(e){}
})

const port = 6000
app.listen(port, () => console.log(`Consulta. Porta ${port}.`))