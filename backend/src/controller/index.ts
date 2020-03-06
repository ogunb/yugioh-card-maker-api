import { findCards, createCard, findCard } from '../use-cases'
import makeGetCards from './get-cards'
import makeCreateCard from './create-card'
import makeGetCardController from './get-card'

const getCardsController = makeGetCards({ findCards })
const createCardController = makeCreateCard({ createCard })
const getCardController = makeGetCardController({ findCard })

export { getCardsController, createCardController, getCardController }
