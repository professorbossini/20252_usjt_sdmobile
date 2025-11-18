const express = require('express')
const app = express()
app.use(express.json())

const baseConsulta = {}
/*
{
  1: {
    id: 1,
    texto: oi,
    observacoes: [
      {idObs: 443iouo5i, texto: tchau, idLembrete: 1, status: aguardando},
      {}
    ]
  }
}

*/

const funcoes = {
  LembreteCriado: (lembrete) => {
    baseConsulta[lembrete.id] = lembrete
  },
  ObservacaoCriada: (observacao) => {
    const observacoes = baseConsulta[observacao.idLembrete]['observacoes'] || []
    observacoes.push(observacao)
    baseConsulta[observacao.idLembrete]['observacoes'] = observacoes
  },
  ObservacaoAtualizada: (observacao) => {
    const observacoes = baseConsulta[observacao.idLembrete]['observacoes']
    const indice = observacoes.findIndex(o => o.id === observacao.id)
    observacoes[indice] = observacao
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
  catch(e){
    console.log(e)
  }
})

const port = 6000
app.listen(port, () => console.log(`Consulta. Porta ${port}.`))