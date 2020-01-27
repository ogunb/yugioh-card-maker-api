import { makeCard } from '../entities'

export default function makeCreateCard () {
    return function createCard (request: MakeCardInfo) {
        const newCard = makeCard(request)
        // TODO: save to db.
        return newCard
    }
}
