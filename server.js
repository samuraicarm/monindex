require('dotenv').config()
const express = require('express')
const morgan = require('morgan')
const POKEDEX = require('./pokedex.json')
app.use(helmet())
const cors = require('cors')



const app = express()

const morganSetting = process.env.NODE_ENV === 'production' ? 'tiny' : 'common'
app.use(morgan(morganSetting))
app.use(cors())

app.use((req, res) => {
    res.send('Hello, world!')
})

app.use((error, req, res, next) => {
    let response
    if (process.env.NODE_ENV === 'production') {
        response = { error: { message: 'server error' } }
    } else {
        response = { error }
    }
    res.status(500).json(response)
})


const PORT = process.env.PORT || 8000;

app.listen(PORT, () => {

})
