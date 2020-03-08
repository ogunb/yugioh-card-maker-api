type CardIds = string[];

export interface PlainUser {
    userId?: string,
}

export interface User {
    getUserId: () => string,
}
