import { Card, GetCardsPaging, PlainCard } from 'card-model'

export default function makeCardDb ({ makeDb }: { makeDb: () => (...args: any) => any }) {
    const sql = makeDb()

    async function findCards ({ page, size }: GetCardsPaging): Promise<PlainCard[]> {
        const allCards = await sql`
            SELECT * FROM cards
            ORDER BY creation_date DESC
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
    }: Card): Promise<PlainCard> {
        const [newCard] = await sql`
            INSERT INTO cards (
                serial_number,
                name,
                type_id,
                attribute_id,
                level,
                image_url,
                ability_type,
                description,
                atk,
                def,
                creator,
                creation_date
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

    async function findCard ({ serialNumber }: { serialNumber: string }): Promise<PlainCard> {
        const [card] = await sql`
            SELECT * FROM cards
            WHERE serial_number = ${serialNumber}
        `

        return card
    }

    async function findUserCard ({ creator }: { creator: string }): Promise<PlainCard[]> {
        const cards = await sql`
            SELECT * FROM cards
            WHERE creator = ${creator}
        `

        return cards
    }

    return Object.freeze({
        findCards,
        findCard,
        createCard,
        findUserCard
    })
}
