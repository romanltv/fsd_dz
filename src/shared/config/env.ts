export type Config = {
    API_URL: string
}

export const CONFIG: Config = {
    API_URL: import.meta.env.VITE_API_URL
}