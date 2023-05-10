import {Navigate, Outlet} from "react-router-dom";
import {getCurrentUser} from "../../services/auth.service";

export const PrivateRoutes = () => {
    const isAuth = getCurrentUser();
    return isAuth ? <Outlet/> : <Navigate to="/login"/>
};
