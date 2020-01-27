import uuid from 'uuid'
import buildMakeCard from './card'
import buildMakeUser from './user'

export const makeCard = buildMakeCard({ generateId })
export const makeUser = buildMakeUser({ generateId: uuid })

function generateId (creator: string) {
    return uuid() + creator
}
