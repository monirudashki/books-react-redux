import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";

export const UsersOnlyGuard = () => {

    const currentUser = useSelector((state) => state.user.value);

    if (!currentUser) {
        return <Navigate to="/auth/login" replace />
    }

    return <Outlet />
}