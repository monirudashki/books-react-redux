import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";

export const GuestGuardOnly = () => {

    const currentUser = useSelector((state) => state.user.value);
    console.log('guuest gurad')

    if (currentUser) {
        return <Navigate to="/" replace />
    }

    return <Outlet />
}