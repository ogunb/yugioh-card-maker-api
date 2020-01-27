type BuildMakeCardArguments = {
    generateId: (creator: string) => string
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
        const creationDate = new Date()
        const serialNumber = generateId(creator)

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
