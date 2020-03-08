import { User, PlainUser } from 'user-model'

export default function makeUserDb ({ makeDb }: { makeDb: () => (...args: any) => any }) {
    const sql = makeDb()

    async function createUser ({ getUserId }: User): Promise<PlainUser> {
        const [user] = await sql`
            INSERT INTO users (
                id
            ) VALUES (
                ${getUserId()}
            )
            RETURNING *;
        `
        return { userId: user.id }
    }

    return Object.freeze({
        createUser
    })
}
