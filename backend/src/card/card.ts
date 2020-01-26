type BuildMakeCardArguments = {
    generateId: (creator: string) => string
}

export default function buildMakeCard({ generateId }: BuildMakeCardArguments): (info: MakeCardRequest) => Card {
    return function makeCard({
        name,
        type,
        attribute,
        level,
        imageURL,
        abilityType,
        description,
        ATK,
        DEF,
        creator,
    }: MakeCardRequest): Card {
        const creationDate = new Date();
        const serialNumber = generateId(creator);

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
        DEF,
        })
    }
}
