import { User } from 'user-model'

type BuildMakeUserArguments = {
    generateId: () => string
}

export default function buildMakeUser ({ generateId }: BuildMakeUserArguments): () => User {
    return function makeUser (): User {
        const userId = generateId()

        return Object.freeze({
            getUserId: () => userId
        })
    }
}
