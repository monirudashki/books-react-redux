import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setErrorMessage } from "../../Features/errorState/error";

export const Error = () => {

    const dispatch = useDispatch();
    const errMessage = useSelector((state) => state.error.value.message);

    useEffect(() => {
        const timeOut = setTimeout(() => {
            dispatch(setErrorMessage(''));
        }, 3000);

        return () => clearTimeout(timeOut);
    }, [dispatch])

    return (
        <div className="error-container">
            <p className="error-message">{errMessage}</p>
        </div>
    );
}