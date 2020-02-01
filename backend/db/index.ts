import path from 'path'

import { makeDb } from '../src/db'
require('dotenv-flow').config();

(async function initializeDB () {
    const sql = makeDb()

    try {
        await sql.file(path.join(__dirname, './cards.sql')).catch((err: any) => console.error(err.message))
        // await sql.file(path.join(__dirname, './users.sql')).catch((err: any) => console.error(err.message))
    } finally {
        await sql.end({ timeout: 5 })
        process.exit()
    }
})()
