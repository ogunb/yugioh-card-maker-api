import { User } from 'user-model'

type BuildMakeUserArguments = {
    generateId: () => string
}

export default function buildMakeUser ({ generateId }: BuildMakeUserArguments): (arg0: { userId: string }) => User {
    return function makeUser ({ userId = generateId() }): User {
        return Object.freeze({
            getUserId: () => userId
        })
    }
}
