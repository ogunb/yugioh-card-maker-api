import express, { Request, Response } from 'express'
import bodyParser from 'body-parser'

import { createCard } from './use-cases'

const { PORT } = process.env

const app = express()
app.use(bodyParser.json())

app.get('/health-check', (req: Request, res: Response) => res.send('It\'s up.'))

app.post('/card:create', (request: Request, response: Response) => {
    const card = createCard(request.body)
    return response.send(card)
})

app.listen(PORT, () => console.log(`Example app listening on port ${PORT}!`))
