import makeGetCards from './get-cards'
import makeCreateCard from './create-card'
import { findCards, createCard } from '../use-cases'

const getCardsController = makeGetCards({ findCards })
const createCardController = makeCreateCard({ createCard })

export { getCardsController, createCardController }
