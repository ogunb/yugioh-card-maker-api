import { Card } from 'card.model'

export default function makeCardDb ({ makeDb }: { makeDb: () => (...args: any) => any }) {
    const sql = makeDb()

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
        findAllCards: () => console.log('find all cards...'),
        createCard
    })
}
