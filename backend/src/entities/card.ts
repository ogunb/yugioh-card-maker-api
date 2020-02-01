import { MakeCardInfo, Card } from 'card-model'

type BuildMakeCardArguments = {
    generateId: () => string
}

export default function buildMakeCard ({ generateId }: BuildMakeCardArguments): (info: MakeCardInfo) => Card {
    return function makeCard ({
        name,
        type,
        attribute,
        level,
        imageURL,
        abilityType,
        description,
        ATK,
        DEF,
        creator
    }: MakeCardInfo): Card {
        const creationDate = new Date(Date.now())
        const serialNumber = generateId()
        // TODO: Validations.
        return Object.freeze({
            getCreator: () => creator,
            getCreationDate: () => creationDate,
            getSerialNumber: () => serialNumber,
            getName: () => name,
            getType: () => type,
            getAttribute: () => attribute,
            getLevel: () => level,
            getImageUrl: () => imageURL,
            getAbilityType: () => abilityType,
            getDescription: () => description,
            getAtk: () => ATK,
            getDef: () => DEF
        })
    }
}
