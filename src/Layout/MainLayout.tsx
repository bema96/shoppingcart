import { Outlet } from "react-router-dom";
import Navigation from "../Components/Navigation/navigation";

export const MainLayout = () => {

    return (
        <div>
            <Navigation />
            <Outlet />
        </div>
    )
}