import uuid from 'uuid'
import buildMakeCard from './card'
import buildMakeUser from './user'

export const makeCard = buildMakeCard({ generateId: uuid })
export const makeUser = buildMakeUser({ generateId: uuid })
