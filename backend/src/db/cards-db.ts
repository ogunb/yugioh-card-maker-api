export default function makeCardDb ({ makeDb }: { makeDb: () => () => any }) {
    return {
        findAllCards: () => console.log('find all cards...')
    }
}
