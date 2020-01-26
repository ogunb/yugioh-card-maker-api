interface MakeCardRequest {
    name: string,
    type: 'Monster' | 'Trap' | 'Spell',
    attribute: 'DARK' | 'DIVINE' | 'EARTH' | 'FIRE' | 'LIGHT' |	'WATER' | 'WIND',
    level: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12,
    imageURL: string,
    abilityType: string,
    description: string,
    ATK: number,
    DEF: number,
    creator: string,
}

interface Card extends MakeCardRequest {
    creationDate: Date,
    serialNumber: string,
}