export type CardTypes = 'Monster' | 'Trap' | 'Spell';
export type Attributes = 'DARK' | 'DIVINE' | 'EARTH' | 'FIRE' | 'LIGHT' | 'WATER' | 'WIND';

export interface MakeCardInfo {
    name: string,
    typeId: number,
    attributeId: number,
    level: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12,
    imageURL: string,
    abilityType: string,
    description: string,
    ATK: number,
    DEF: number,
    creator: string,
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
