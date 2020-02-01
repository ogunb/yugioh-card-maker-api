import { Card } from 'card-model'

export default function makeCardDb ({ makeDb }: { makeDb: () => (...args: any) => any }) {
    const sql = makeDb()

    async function findAllCards () {
        const allCards = await sql`SELECT * FROM cards;`
        return allCards
    }

    async function createCard ({
        getCreator,
        getCreationDate,
        getSerialNumber,
        getName,
        getType,
        getAttribute,
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
                Type,
                Attribute,
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
                ${getType()},
                ${getAttribute()},
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
        findAllCards,
        createCard
    })
}
