import { HttpRequest } from '../models/http-request'
import { PlainCard } from '../models/card-model'
import { CreateCardUseCase } from '../use-cases/create-card'
import { generateCardResponse } from '../responses/generate-card-response'

interface makeCreateCardArgs {
    createCard: CreateCardUseCase
}

interface CreateCardArgs extends HttpRequest {
    body: PlainCard
}

export default function makeCreateCard ({ createCard }: makeCreateCardArgs) {
    return async function ({ body }: CreateCardArgs) {
        try {
            const card = await createCard(body)

            return {
                statusCode: 200,
                body: generateCardResponse(card)
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
