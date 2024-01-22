import { ReactNode } from "react";
import Sidebar from "../components/Sidebar/Sidebar";

export default async function UserLayout({
    children
} : {children: ReactNode}) {
    return (
        <Sidebar>
            <div className="h-full">
                    {children}
            </div>
        </Sidebar>
    )
}