import express from 'express'
import axios from 'axios'
const app = express()
//middleware
app.use(express.json())

const eventos = []
//POST /eventos
app.post('/eventos', (req, res) => {
  // const evento = req.body
  const { body: evento } = req
  console.log(evento)
  eventos.push(evento)
  axios.post('http://localhost:4000/eventos', evento)
  axios.post('http://localhost:5000/eventos', evento)
  axios.post('http://localhost:6000/eventos', evento)
  axios.post('http://localhost:7000/eventos', evento)
  res.end()

})

app.get('/eventos', (req, res) => {
  res.json(eventos)  
})

const port = 10000
app.listen(port, () => console.log(`Barramento. ${port}.`))