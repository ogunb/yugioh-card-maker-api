import { Card } from 'card.model'

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
        console.log(getCreationDate())
        const newCard = await sql`INSERT INTO cards (
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
                ${getCreationDate()})`
        return newCard
    }

    return Object.freeze({
        findAllCards,
        createCard
    })
}
