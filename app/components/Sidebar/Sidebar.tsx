import { ReactNode } from "react";
import DesktopSideBar from "./DesktopSideBar";

async function Sidebar({children} : {children: ReactNode}) {
    return (
        <div className="h-full">
            <DesktopSideBar />
            <main className="lg:pl-20 h-full">
                {children}
            </main>
            
        </div>
    )
}

export default Sidebar;