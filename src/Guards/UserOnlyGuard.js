import { useSelector } from "react-redux";
import { Navigate, Outlet, useLocation } from "react-router-dom";

export const UsersOnlyGuard = () => {

    const location = useLocation();

    const currentUser = useSelector((state) => state.user.value);

    if (!currentUser) {
        return <Navigate to="/auth/login" state={{ previousPath: location.pathname }} replace />
    }

    return <Outlet />
}