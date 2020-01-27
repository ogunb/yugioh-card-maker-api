type CardIds = string[];

interface User {
    getUserId: () => string,
    getCards: () => CardIds,
    addCard: (cardSerialNumber: string) => {
        newCardId: string,
        cards: CardIds
    },
    removeCard: (cardSerialNumber: string) => {
        removedCard: string,
        cards: CardIds
    },
}
