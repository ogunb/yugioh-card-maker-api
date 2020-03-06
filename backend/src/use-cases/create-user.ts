import { makeUser } from '../entities'
import { userDb } from '../db'
import { User, PlainUser } from 'user-model'

export type CreateUserUseCase = (arg?: PlainUser) => Promise<User>
export default function makeCreateUser (): CreateUserUseCase {
    return async function createUser () {
        const newUser = makeUser()
        const user = await userDb.createUser(newUser)

        return makeUser(user)
    }
}
