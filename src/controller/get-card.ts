import { HttpRequest } from '../models/http-request'
import { FindCard } from '../use-cases/find-card'
import { generateCardResponse } from './../responses/generate-card-response'

interface MakeGetCardsArgs {
    findCard: FindCard
}

interface GetCardsArgs extends HttpRequest {
    params: {
        serialNumber: string,
    }
}

export default function makeGetCardController ({ findCard }: MakeGetCardsArgs) {
    return async function getCardController ({ params: { serialNumber } }: GetCardsArgs) {
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
