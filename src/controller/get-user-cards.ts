import { HttpRequest } from '../models/http-request'
import { FindUserCards } from '../use-cases/find-user-cards'
import { generateCardResponse } from './../responses/generate-card-response'

interface MakeGetUserCardsArgs {
    findUserCards: FindUserCards
}

interface GetUserCardsArgs extends HttpRequest {
    params: {
        creator: string
    }
}

export default function makeGetUserCards ({ findUserCards }: MakeGetUserCardsArgs) {
    return async function getUserCards ({ params: { creator } }: GetUserCardsArgs) {
        try {
            const allUserCards = await findUserCards({ creator })

            return {
                statusCode: 200,
                body: allUserCards.map(generateCardResponse)
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
