import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";

export const GuestGuardOnly = () => {

    const currentUser = useSelector((state) => state.user.value);

    if (currentUser) {
        return <Navigate to="/" replace />
    }

    return <Outlet />
}