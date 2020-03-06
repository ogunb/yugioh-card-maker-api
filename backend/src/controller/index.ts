import { findCards, createCard, findCard, findUserCards, createUser } from '../use-cases'
import makeGetCards from './get-cards'
import makeCreateCard from './create-card'
import makeGetCardController from './get-card'
import makeGetUserCardsController from './get-user-cards'
import makeCreateUserController from './create-user'

const getCardsController = makeGetCards({ findCards })
const createCardController = makeCreateCard({ createCard })
const getCardController = makeGetCardController({ findCard })
const getUserCardsController = makeGetUserCardsController({ findUserCards })
const createUserController = makeCreateUserController({ createUser })

export {
    getCardsController,
    createCardController,
    getCardController,
    getUserCardsController,
    createUserController
}
