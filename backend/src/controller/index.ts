import makeGetAllCards from './get-all-cards'
import { findAllCards } from '../use-cases'

const getAllCards = makeGetAllCards({ findAllCards })

export { getAllCards }
