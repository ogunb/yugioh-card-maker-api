import { findCards, createCard, findCard, findUserCards } from '../use-cases'
import makeGetCards from './get-cards'
import makeCreateCard from './create-card'
import makeGetCardController from './get-card'
import makeGetUserCardsController from './get-user-cards'

const getCardsController = makeGetCards({ findCards })
const createCardController = makeCreateCard({ createCard })
const getCardController = makeGetCardController({ findCard })
const getUserCardsController = makeGetUserCardsController({ findUserCards })

export {
    getCardsController,
    createCardController,
    getCardController,
    getUserCardsController
}
