require('dotenv').config()
const express = require('express')
const morgan = require('morgan')
const POKEDEX = require('./pokedex.json')
app.use(helmet())
const cors = require('cors')

console.log(process.env.API_TOKEN)

const app = express()

app.use(morgan('dev'))
app.use(cors())

app.use((req, res) => {
    res.send('Hello, world!')
})

const PORT = 8000

app.listen(PORT, () => {
    console.log(`Server listening at http://localhost:${PORT}`)
})
