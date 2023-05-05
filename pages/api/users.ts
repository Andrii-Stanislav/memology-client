import type {User} from '../../types'

// TODO - delete it later
export const getUsers = async (): Promise<User[]> => {
    const response = await fetch('https://jsonplaceholder.typicode.com/users')
    return await response.json()
}

// TODO - delete it later
export const getOneUser = async (id: string): Promise<User> => {
    const response = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
    return await response.json()
}
