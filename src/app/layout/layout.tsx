import { Outlet } from "react-router";

export function Layout() {
    return ( 
        <div>
            <div>Header</div>
            <div><Outlet/></div>
            <div>Footer</div>
        </div>
     );
}