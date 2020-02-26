import makeGetCards from './get-cards'
import { findCards } from '../use-cases'

const getCards = makeGetCards({ findCards })

export { getCards }
