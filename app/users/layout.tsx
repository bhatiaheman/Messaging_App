import { ReactNode } from "react";

export default async function UserLayout({
    children
} : {children: ReactNode}) {
    return (
        <div>
            {children}
        </div>
    )
}