import { makeCard } from '../entities'
import { cardDb } from '../db'
import { Card, MakeCardInfo } from 'card-model'

export type CreateCardUseCase = (arg: MakeCardInfo) => Promise<Card>
export default function makeCreateCard (): CreateCardUseCase {
    return async function createCard (request: MakeCardInfo) {
        const newCard = makeCard(request)
        const card = await cardDb.createCard(newCard)

        return makeCard(card)
    }
}
