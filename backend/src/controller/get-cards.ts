import { HttpRequest } from '../models/http-request'
import { Card, GetCardsPaging } from 'card-model'

interface MakeGetCardsArgs {
    findCards: (arg0: GetCardsPaging) => Promise<Card[]>
}

interface GetCardsArgs extends HttpRequest {
    query: GetCardsPaging
}

export default function makeGetCards ({ findCards }: MakeGetCardsArgs) {
    return async function getCards ({ query: { page = 0, size = 10 } }: GetCardsArgs) {
        try {
            const allCards = await findCards({ page, size })

            return {
                statusCode: 200,
                body: allCards
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
