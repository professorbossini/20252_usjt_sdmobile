const express = require('express')
const app = express()
app.use(express.json())
/*
{
  1: [
    {id: 1000, texto: comprar açúcar, idLembrete: 1},
    {id: 1001, texto: 2 colheres de pó, idLembrete: 1},
  ],
  2: []
}
*/
const baseObservacoes = {}
//POST /lembretes/1/observacoes
app.post('/lembretes/:id/observacoes',(req, res) => {

  }
)
//GET
app.get('/lembretes/:id/observacoes', (req, res) => {

})

const port = 5000
app.listen(port, console.log(`Observações. Porta ${porta}.`))