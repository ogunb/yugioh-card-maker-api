import postgres from 'postgres'
import makeCardDb from './cards-db'

export function makeDb () {
    const {
        DB_HOST,
        DB_PORT,
        DB_NAME,
        DB_USERNAME,
        DB_PASSWORD
    } = process.env

    const sql = postgres('localhost', {
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

    return sql
}

export const cardDb = makeCardDb({ makeDb })
