import { cardDb } from '../db'
import { Card } from 'card-model'
import { makeCard } from '../entities/index'

export type FindCard = (arg: { serialNumber: string }) => Promise<Card>
export default function makeFindCard (): FindCard {
    return async function findCard ({ serialNumber }) {
        if (!serialNumber || serialNumber.length !== 36) {
            throw new Error('Card serial number is not valid.')
        }

        const plainCard = await cardDb.findCard({ serialNumber })
        if (!plainCard) {
            throw new Error('Card does not exist.')
        }

        const card = makeCard(plainCard)
        return card
    }
}
