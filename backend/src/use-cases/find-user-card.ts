import { cardDb } from '../db'
import { Card } from 'card-model'
import { makeCard } from '../entities/index'

export type FindUserCard = (arg: { creator: string }) => Promise<Card[]>
export default function makeFindUserCard (): FindUserCard {
    return async function findUserCard ({ creator }) {
        if (!creator || creator.length !== 36) {
            throw new Error('Card serial number is not valid.')
        }

        const plainCards = await cardDb.findUserCard({ creator })
        const cardEntities = plainCards.map(makeCard)
        return cardEntities
    }
}
