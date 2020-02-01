import { cardDb } from '../db'

export default function makeFindAllCards () {
    return async function findAllCards () {
        const cards = await cardDb.findAllCards()
        return cards
    }
}
