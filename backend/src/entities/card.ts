import { MakeCardInfo, Card, CardTypes, Attributes } from 'card-model'
import { capitalizeString } from '../utils'
import { cardTypes } from '../enums/card-types'
import { attributes } from '../enums/attributes'

type BuildMakeCardArguments = {
    generateId: () => string
}

export default function buildMakeCard ({ generateId }: BuildMakeCardArguments): (info: MakeCardInfo) => Card {
    return function makeCard ({
        serialNumber,
        creationDate,
        name,
        typeId,
        attributeId,
        level,
        imageUrl,
        abilityType,
        description,
        ATK = 9999,
        DEF = 9999,
        creator
    }: MakeCardInfo): Card {
        if (!creator) {
            throw new Error('Cards must have a creator.')
        }

        // uuid check.
        if (creator.length !== 36) {
            throw new Error('Creator is not valid.')
        }

        if (!(typeId in cardTypes)) {
            throw new Error('Card type id must be valid.')
        }

        if (!(attributeId in attributes)) {
            throw new Error('Attribute id must be valid.')
        }

        if (!level || level < 1 || level > 12) {
            throw new Error('Card level must be between 1 and 12.')
        }

        if (imageUrl && !imageUrl.includes('https://')) {
            throw new Error('Card image url must provide a secure connection. (e.g. https://)')
        }

        if (typeof ATK !== 'number') {
            ATK = parseInt(ATK)
            if (Number.isNaN(ATK)) {
                throw new Error('Attack value must be an integer.')
            }
        }

        if (typeof DEF !== 'number') {
            DEF = parseInt(DEF)
            if (Number.isNaN(DEF)) {
                throw new Error('Defense value must be an integer.')
            }
        }

        const capitalizedType = capitalizeString(cardTypes[typeId]) as CardTypes
        const capitalizedAttribute = attributes[attributeId].toUpperCase() as Attributes

        return Object.freeze({
            getCreator: () => creator,
            getCreationDate: () => creationDate || new Date(),
            getSerialNumber: () => serialNumber || generateId(),
            getName: () => name,
            getTypeId: () => typeId,
            getTypeName: () => capitalizedType,
            getAttributeId: () => attributeId,
            getAttributeName: () => capitalizedAttribute,
            getLevel: () => level,
            getImageUrl: () => imageUrl,
            getAbilityType: () => abilityType,
            getDescription: () => description,
            getAtk: () => ATK,
            getDef: () => DEF
        })
    }
}
