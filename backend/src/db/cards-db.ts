import { Card, GetCardsPaging } from 'card-model'

export default function makeCardDb ({ makeDb }: { makeDb: () => (...args: any) => any }) {
    const sql = makeDb()

    async function findCards ({ page, size }: GetCardsPaging) {
        const allCards = await sql`
            SELECT * FROM cards
            ORDER BY creationDate DESC
            OFFSET ${page}
            LIMIT ${size};
        `

        return allCards
    }

    async function createCard ({
        getCreator,
        getCreationDate,
        getSerialNumber,
        getName,
        getTypeId,
        getAttributeId,
        getLevel,
        getImageUrl,
        getAbilityType,
        getDescription,
        getAtk,
        getDef
    }: Card) {
        const newCard = await sql`
            INSERT INTO cards (
                SerialNumber,
                Name,
                TypeId,
                AttributeId,
                Level,
                ImageUrl,
                AbilityType,
                Description,
                Atk,
                Def,
                Creator,
                CreationDate
            ) VALUES (
                ${getSerialNumber()},
                ${getName()},
                ${getTypeId()},
                ${getAttributeId()},
                ${getLevel()},
                ${getImageUrl()},
                ${getAbilityType()},
                ${getDescription()},
                ${getAtk()},
                ${getDef()},
                ${getCreator()},
                ${getCreationDate()}
            )

            RETURNING *
        `
        return newCard
    }

    return Object.freeze({
        findCards,
        createCard
    })
}
