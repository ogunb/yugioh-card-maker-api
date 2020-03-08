import { cardDb } from '../db'
import { Card } from 'card-model'
import { makeCard } from '../entities/index'

export type FindUserCards = (arg: { creator: string }) => Promise<Card[]>
export default function makeFindUserCards (): FindUserCards {
    return async function findUserCards ({ creator }) {
        if (!creator || creator.length !== 36) {
            throw new Error('Card serial number is not valid.')
        }

        const plainCards = await cardDb.findUserCards({ creator })
        const cardEntities = plainCards.map(makeCard)
        return cardEntities
    }
}
