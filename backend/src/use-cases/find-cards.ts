import { cardDb } from '../db'
import { GetCardsPaging, Card } from 'card-model'

export type FindCards = (arg0: GetCardsPaging) => Promise<Card[]>
export default function makeFindCards (): FindCards {
    return async function findCards ({ page = 0, size = 10 }) {
        let offset = (page - 1) * size
        if (offset < 0) { offset = 0 }
        if (size < 0) { size = 10 }

        const cards = await cardDb.findCards({ page: offset, size })
        return cards
    }
}
