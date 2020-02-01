/* eslint-disable import/first */
require('dotenv-flow').config()

import express, { Request, Response } from 'express'
import bodyParser from 'body-parser'
import { createCard, findAllCards } from './use-cases'

const { PORT } = process.env

const app = express()
app.use(bodyParser.json())

app.get('/health-check', (req: Request, res: Response) => res.send('It\'s up.'))

app.get('/cards', async (request: Request, response: Response) => {
    const cards = await findAllCards()
    return response.send(cards)
})
app.post('/cards:create', async (request: Request, response: Response) => {
    const card = await createCard(request.body)
    return response.send(card)
})

app.listen(PORT, () => console.log(`Example app listening on port ${PORT}!`))
