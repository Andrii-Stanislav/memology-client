export type User = {
    id: number
    email: string
    banned: boolean
    banReason: null | string
    createdAt: string
    updatedAt: string
    createdGames: []
}
