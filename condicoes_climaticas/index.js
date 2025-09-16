require('dotenv').config()
const axios = require('axios')
const {
  APPID,
  PROTOCOL,
  BASE_URL,
  Q,
  CNT,
  UNITS,
  IDIOM: LANG
} = process.env

const url = `${PROTOCOL}://${BASE_URL}?appid=${APPID}&q=${Q}&cnt=${CNT}&units=${UNITS}&lang=${LANG}`

async function comAsyncAwait(){
  try{
    console.log('************************')
    const result = await axios.get(url)
    console.log(result)
    console.log('************************')
    console.log('Agora o data')
    console.log(result.data)
    console.log('************************')
    console.log('Agora o list')
    console.log(result.data.list)
    //iterar sobre a lista, mostrando a sensação térmica de cada previsão
    //ah, mostrar o nível do mar tb
  }
  catch(e){
    console.log(e)
  }
}
comAsyncAwait()



// const teste = async() => {
//   return 1
// }
// // console.log(teste())
// teste().then(res => console.log(res))


// axios.get(url)
// .then((res) => {
//   console.log('Exibindo o corpo da resposta...')
//   console.log(res.data)
//   console.log('*************************')
//   return res.data.list
// })
// .then((res) => {
//   console.log('Exibindo a lista inteira')
//   console.log(res)
//   console.log('*************************')
//   return res
// })
// .then((res) => {
//   console.log('Iterando sobre a lista')
//   for(let previsao of res){
//     //data
//     console.log(`dt: ${new Date(previsao.dt * 1000).toLocaleString()}`)
//     console.log(`Temp min: ${previsao.main.temp_min}`)
//     console.log(`Descrição: ${previsao.weather[0].description}`)
//   }
// })