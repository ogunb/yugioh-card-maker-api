import express from 'express'
import makeCardsRoute from './cards-route'
import { makeExpressCallback } from '../utils/index'

import MakeRoute from '../models/make-route'

const cardsRouter = express.Router()
const cardsRoutes = makeCardsRoute({ makeCallback: makeExpressCallback })
cardsRoutes.forEach(({ method, route, controller }: MakeRoute) => {
    cardsRouter[method](route, controller)
})

export { cardsRouter }
