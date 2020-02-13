/* eslint-disable import/first */
require('dotenv-flow').config()

import express from 'express'
import bodyParser from 'body-parser'
import { cardsRouter } from './routes'

const { PORT } = process.env

const app = express()
app.use(bodyParser.json())
app.use('/cards', cardsRouter)

app.listen(PORT, () => console.log(`Example app listening on port ${PORT}!`))
