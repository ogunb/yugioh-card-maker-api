import express from 'express'
import { makeExpressCallback } from '../utils/index'
import MakeRoute from '../models/make-route'

import makeCardsRoute from './cards-route'
import makeUserRoute from './user-route'

const cardsRouter = express.Router()
const cardsRoutes = makeCardsRoute({ makeCallback: makeExpressCallback })
cardsRoutes.forEach(({ method, route, controller }: MakeRoute) => {
    cardsRouter[method](route, controller)
})

const userRouter = express.Router()
const userRoutes = makeUserRoute({ makeCallback: makeExpressCallback })
userRoutes.forEach(({ method, route, controller }: MakeRoute) => {
    userRouter[method](route, controller)
})

export { cardsRouter, userRouter }
