import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getMyBooksData } from "../../Features/myBooksState/myBooksThunk";
import { Spinner } from "../Shared/Spinner";
import { DashboardItem } from "./DashboardItem";

export const MyBooks = () => {

    const dispatch = useDispatch();
    const myBooksData = useSelector((state) => state.myBooks);

    useEffect(() => {
        dispatch(getMyBooksData());
    }, [dispatch]);

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