export interface MakeCardInfo {
    name: string,
    type: 'Monster' | 'Trap' | 'Spell',
    attribute: 'DARK' | 'DIVINE' | 'EARTH' | 'FIRE' | 'LIGHT' | 'WATER' | 'WIND',
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
    getType: () => 'Monster' | 'Trap' | 'Spell',
    getAttribute: () => 'DARK' | 'DIVINE' | 'EARTH' | 'FIRE' | 'LIGHT' | 'WATER' | 'WIND',
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
