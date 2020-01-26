import makeCard from '../card';

export default function makeCreateCard() {
    return function createCard(request: MakeCardRequest) {
        const newCard = makeCard(request);
        // TODO: save to db.
        return newCard;
    }
}