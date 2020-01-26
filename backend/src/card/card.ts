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
            creator,
            creationDate,
            serialNumber,
            name,
            type,
            attribute,
            level,
            imageURL,
            abilityType,
            description,
            ATK,
            DEF
        })
    }
}
