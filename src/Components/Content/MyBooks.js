import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { getMyBooksData } from "../../Features/myBooksState/myBooksThunk";
import { Spinner } from "../Shared/Spinner";
import { DashboardItem } from "./DashboardItem";
import { DeleteBook } from "./DeleteBook";
import { EditBook } from './EditBook';

export const MyBooks = () => {

    const dispatch = useDispatch();
    const navigateTo = useNavigate();

    const myBooksData = useSelector((state) => state.myBooks);
    const currentUser = useSelector((state) => state.user.value);
    const { id } = useParams();

    useEffect(() => {
        dispatch(getMyBooksData());
    }, [dispatch]);

    useEffect(() => {
        if (id !== currentUser._id) {
            navigateTo('/');
        }
    }, [id, currentUser._id, navigateTo]);

    if (myBooksData.isEditMode === true) {
        return <EditBook />
    }
    if (myBooksData.isDeleteMode === true) {
        return <DeleteBook />
    }

    return (
        <>
            {myBooksData.isLoading
                ?
                <Spinner />
                :
                <section id="my-books-page" className="my-books">
                    <h1>My Books</h1>
                    <ul className="my-books-list">
                        {!myBooksData.isLoading && myBooksData.data.length > 0
                            ?
                            <ul className="other-books-list">
                                {myBooksData.data.map(x => <DashboardItem
                                    key={x._id}
                                    book={x}
                                />)}
                            </ul>
                            :
                            <p className="no-books">No books in database!</p>
                        }
                    </ul>
                </section>
            }
        </>
    );
}