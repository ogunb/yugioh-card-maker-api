export type CardTypes = 'Monster' | 'Trap' | 'Spell';
export type Attributes = 'DARK' | 'DIVINE' | 'EARTH' | 'FIRE' | 'LIGHT' | 'WATER' | 'WIND';

export interface PlainCard {
    name: string,
    typeId: number,
    attributeId: number,
    level: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12,
    imageUrl: string,
    abilityType: string,
    description: string,
    ATK: number,
    DEF: number,
    creator: string,
    serialNumber?: string,
    creationDate?: Date,
}

export interface Card {
    getName: () => string,
    getTypeId: () => number,
    getTypeName: () => CardTypes,
    getAttributeId: () => number,
    getAttributeName: () => Attributes,
    getLevel: () => 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12,
    getImageUrl: () => string,
    getAbilityType: () => string,
    getDescription: () => string,
    getAtk: () => number,
    getDef: () => number,
    getCreator: () => string,
    getCreationDate: () => Date,
    getSerialNumber: () => string,
}

export interface GetCardsPaging {
    page: number
    size: number
}

export interface CardResponse {
    name: string,
    type: {
        id: number,
        name: string
    },
    attribute: {
        id: number,
        name: string
    },
    level: number,
    imageUrl: string,
    abilityType: string,
    description: string,
    atk: number,
    def: number,
    creator: string,
    creationDate: Date,
    serialNumber: string
}
