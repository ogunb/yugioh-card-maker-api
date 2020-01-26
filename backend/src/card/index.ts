import uuid from 'uuid';
import buildMakeCard from './card';

const makeCard = buildMakeCard({ generateId });

export default makeCard;

function generateId(creator: string) {
    return uuid() + creator;
}
