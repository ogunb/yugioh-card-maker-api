import postgres from 'postgres'
import makeCardDb from './cards-db'
import makeUserDb from './user-db'

export function makeDb () {
    const { DATABASE_URL } = process.env

    return postgres(DATABASE_URL, {
        max: 10,
        timeout: 60,
        transform: {
            column: postgres.toCamel
        }
    })
}

export const cardDb = makeCardDb({ makeDb })
export const userDb = makeUserDb({ makeDb })
