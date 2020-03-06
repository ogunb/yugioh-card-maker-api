import { HttpRequest } from '../models/http-request'
import { MakeCardInfo } from '../models/card-model'
import { CreateCardUseCase } from '../use-cases/create-card'

interface makeCreateCardArgs {
    createCard: CreateCardUseCase
}

interface CreateCardArgs extends HttpRequest {
    body: MakeCardInfo
}

export default function makeCreateCard ({ createCard }: makeCreateCardArgs) {
    return async function ({ body }: CreateCardArgs) {
        try {
            const {
                getName,
                getTypeId,
                getTypeName,
                getAttributeId,
                getAttributeName,
                getLevel,
                getImageUrl,
                getAbilityType,
                getDescription,
                getAtk,
                getDef,
                getCreator,
                getCreationDate,
                getSerialNumber
            } = await createCard(body)

            return {
                statusCode: 200,
                body: {
                    name: getName(),
                    type: {
                        id: getTypeId(),
                        name: getTypeName()
                    },
                    attribute: {
                        id: getAttributeId(),
                        name: getAttributeName()
                    },
                    level: getLevel(),
                    imageUrl: getImageUrl(),
                    abilityType: getAbilityType(),
                    description: getDescription(),
                    atk: getAtk(),
                    def: getDef(),
                    creator: getCreator(),
                    creationDate: getCreationDate(),
                    serialNumber: getSerialNumber()
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
