// Shared types for the application
export type UserData = {
    name: string
    email: string
    password: string
}

export type RegisterResponse = {
    password: string
    user: {
        name: string
        email: string
    }
}