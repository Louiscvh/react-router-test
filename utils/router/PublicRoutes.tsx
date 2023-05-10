import {Navigate, Outlet} from "react-router-dom";
import {getCurrentUser} from "../../services/auth.service";

export const PublicRoutes = () => {
    const isAuth = getCurrentUser();
    return isAuth ? <Navigate to="/dashboard"/> : <Outlet/>
};
