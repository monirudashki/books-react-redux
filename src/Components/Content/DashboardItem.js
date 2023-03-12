import { useDispatch } from "react-redux";
import { useLocation } from "react-router-dom"
import { deleteModeToggle, editModeToggle, getCurrentBookId } from "../../Features/myBooksState/myBooks";

export const DashboardItem = ({
    book
}) => {
    const location = useLocation();

    const dispatch = useDispatch();

    const onEditHandler = () => {
        dispatch(getCurrentBookId(book._id));
        dispatch(editModeToggle(true));
    }

    const onDeleteHandler = () => {
        dispatch(getCurrentBookId(book._id));
        dispatch(deleteModeToggle(true));
    }

    return (
        <li className="otherBooks">
            <h3>{book.title}</h3>
            <p>Type: {book.type}</p>
            <p className="img"><img src={book.imageUrl} alt="sdads" /></p>
            {location.pathname.includes('myBooks')
                &&
                <div className="actions">
                    <button onClick={onEditHandler} className="button" type="button">Edit</button>
                    <button onClick={onDeleteHandler} className="button" type="button">Delete</button>
                </div>
            }
        </li>
    )
}