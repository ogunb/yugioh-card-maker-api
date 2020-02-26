import { cardDb } from '../db'
import { GetCardsPaging } from 'card-model'

export default function makeFindCards () {
    return async function findCards ({ page = 0, size = 10 }: GetCardsPaging) {
        let offset = (page - 1) * size
        if (offset < 0) { offset = 0 }
        if (size < 0) { size = 10 }

        const cards = await cardDb.findCards({ page: offset, size })
        return cards
    }
}
