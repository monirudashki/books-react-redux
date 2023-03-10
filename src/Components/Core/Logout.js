import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { logoutUser } from "../../Features/userState/user";
import { logout } from "../../Services/api";

export const Logout = () => {

    const dispatch = useDispatch();

    const navigate = useNavigate();

    useEffect(() => {
        logout()
        dispatch(logoutUser());
        navigate('/auth/login')

    }, [dispatch, navigate])

    return null;
}