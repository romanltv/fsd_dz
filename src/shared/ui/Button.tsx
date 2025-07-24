import type { ReactNode } from "react"

type propType = {
    children: ReactNode
}

export function Button({ children }: propType) {
    return <button>{children}</button>
}