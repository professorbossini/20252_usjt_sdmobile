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

axios.get(url)
.then((res) => {
  console.log(res.data)
  console.log('Exibindo o dt')
  console.log(new Date(Number(res.data.list[0].dt) * 1000))
  console.log(new Date(Number(res.data.list[1].dt) * 1000))      
})