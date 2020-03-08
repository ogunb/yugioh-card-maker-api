import { HttpRequest } from '../models/http-request'
import { PlainUser } from '../models/user-model'
import { CreateUserUseCase } from '../use-cases/create-user'

interface makeCreateUserArgs {
    createUser: CreateUserUseCase
}

interface CreateUserArgs extends HttpRequest {
    body: PlainUser
}

export default function makeCreateUserController ({ createUser }: makeCreateUserArgs) {
    return async function () {
        try {
            const user = await createUser()

            return {
                statusCode: 200,
                body: {
                    userId: user.getUserId()
                }
            }
        } catch (err) {
            console.error(err)
            return {
                statusCode: 400,
                body: {
                    error: err.message
                }
            }
        }
    }
}
