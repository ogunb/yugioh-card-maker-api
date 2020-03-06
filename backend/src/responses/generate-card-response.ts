import { Card, CardResponse } from '../models/card-model'

export function generateCardResponse (card: Card): CardResponse {
    return {
        name: card.getName(),
        type: {
            id: card.getTypeId(),
            name: card.getTypeName()
        },
        attribute: {
            id: card.getAttributeId(),
            name: card.getAttributeName()
        },
        level: card.getLevel(),
        imageUrl: card.getImageUrl(),
        abilityType: card.getAbilityType(),
        description: card.getDescription(),
        atk: card.getAtk(),
        def: card.getDef(),
        creator: card.getCreator(),
        creationDate: card.getCreationDate(),
        serialNumber: card.getSerialNumber()
    }
}
