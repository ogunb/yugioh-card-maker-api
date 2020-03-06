import { makeCard } from '../entities'
import { cardDb } from '../db'
import { Card, PlainCard } from 'card-model'

export type CreateCardUseCase = (arg: PlainCard) => Promise<Card>
export default function makeCreateCard (): CreateCardUseCase {
    return async function createCard (request: PlainCard) {
        const newCard = makeCard(request)
        const card = await cardDb.createCard(newCard)

        return makeCard(card)
    }
}
