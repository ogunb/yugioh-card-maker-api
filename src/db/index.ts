import postgres from 'postgres'
import makeCardDb from './cards-db'
import makeUserDb from './user-db'

export function makeDb () {
    const {
        DB_HOST,
        DB_PORT,
        DB_NAME,
        DB_USERNAME,
        DB_PASSWORD,
        DATABASE_URL
    } = process.env

    if (DATABASE_URL) {
        return postgres(DATABASE_URL, {
            max: 10,
            timeout: 60,
            transform: {
                column: postgres.toCamel
            }
        })
    }

    return postgres('localhost', {
        host: DB_HOST,
        port: DB_PORT,
        database: DB_NAME,
        username: DB_USERNAME,
        password: DB_PASSWORD,
        max: 10,
        timeout: 60,
        transform: {
            column: postgres.toCamel
        }
    })
}

export const cardDb = makeCardDb({ makeDb })
export const userDb = makeUserDb({ makeDb })
