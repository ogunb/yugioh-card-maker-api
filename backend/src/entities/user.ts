import { User } from 'user.model'

type BuildMakeUserArguments = {
    generateId: () => string
}

export default function buildMakeUser ({ generateId }: BuildMakeUserArguments): () => User {
    return function makeUser (): User {
        const userId = generateId()
        let cards: string[] = []

        return Object.freeze({
            getUserId: () => userId,
            getCards: () => cards,
            addCard: (cardSerialNumber) => {
                cards.push(cardSerialNumber)

                return {
                    newCardId: cardSerialNumber,
                    cards
                }
            },
            removeCard: (cardSerialNumber) => {
                cards = cards.filter(cardId => cardId === cardSerialNumber)

                return {
                    removedCard: cardSerialNumber,
                    cards
                }
            }
        })
    }
}
