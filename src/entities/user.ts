import { User, PlainUser } from 'user-model'

type BuildMakeUserArguments = {
    generateId: () => string
}

export default function buildMakeUser ({ generateId }: BuildMakeUserArguments): (arg0?: PlainUser) => User {
    return function makeUser ({ userId = generateId() } = {}): User {
        return Object.freeze({
            getUserId: () => userId
        })
    }
}
