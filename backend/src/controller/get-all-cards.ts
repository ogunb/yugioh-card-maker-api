import { HttpRequest } from '../models/http-request'
import { Card } from 'card-model'

interface MakeGetAllCardsArgs {
    findAllCards: () => Promise<Card[]>
}

export default function makeGetAllCards ({ findAllCards }: MakeGetAllCardsArgs) {
    return async function getAllCards (httpRequest: HttpRequest) {
        try {
            const allCards = await findAllCards()

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
