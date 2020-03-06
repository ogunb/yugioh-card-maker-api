import { HttpRequest } from '../models/http-request'
import { FindCard } from '../use-cases/find-card'
import { generateCardResponse } from './../responses/generate-card-response'

interface MakeGetCardsArgs {
    findCard: FindCard
}

interface GetCardsArgs extends HttpRequest {
    body: {
        serialNumber: string,
    }
}

export default function makeGetCards ({ findCard }: MakeGetCardsArgs) {
    return async function getCards ({ body: { serialNumber } }: GetCardsArgs) {
        try {
            const card = await findCard({ serialNumber })

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
