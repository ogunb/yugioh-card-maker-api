import { makeCard } from '../entities'
import { cardDb } from '../db'
import { MakeCardInfo } from 'card.model'

export default function makeCreateCard () {
    return async function createCard (request: MakeCardInfo) {
        const newCard = makeCard(request)
        const card = await cardDb.createCard(newCard)
        return card
    }
}
