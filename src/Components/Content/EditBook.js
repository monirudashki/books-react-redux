import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { currentBookData, editBook, editModeToggle } from "../../Features/myBooksState/myBooks";
import { editBookById, getBookById } from "../../Services/data";
import { Spinner } from "../Shared/Spinner";

export const EditBook = () => {

    const dispatch = useDispatch();
    const bookId = useSelector((state) => state.myBooks.currentBookId);

    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        setIsLoading(true);
        getBookById(bookId)
            .then((book) => {
                dispatch(currentBookData(book));
                setFormValues({
                    title: book.title,
                    description: book.description,
                    imageUrl: book.imageUrl,
                    type: book.type

                })
            })
            .finally(() => setIsLoading(false));
    }, [bookId, dispatch]);

    const bookData = useSelector((state) => state.myBooks.currentBook);

    //const [error, setError] = useState('');
    //const [errors, setErrors] = useState({});

    const [formValues, setFormValues] = useState({});

    const onChangeValueHandler = (e) => {
        setFormValues(state => ({
            ...state,
            [e.target.name]: e.target.value
        }));
    }

    const onSubmitHandler = async (e) => {
        e.preventDefault();

        const bookData = {
            title: formValues.title,
            description: formValues.description,
            imageUrl: formValues.imageUrl,
            type: formValues.type
        };

        try {
            const result = await editBookById(bookId, bookData);
            dispatch(editModeToggle(false));
            dispatch(editBook(result));
            console.log(result);
        } catch (err) {
            console.log(err); // TODO redux global state for errors
        }
    }

    if (isLoading) {
        console.log('spinner')
        return <Spinner />
    }

    const onCancelHandler = () => {
        dispatch(editModeToggle(false));
    }

    return (
        <section id="create-page" className="create">
            <form id="create-form" onSubmit={onSubmitHandler}>
                <fieldset>
                    <legend>Edit {bookData.title} Book</legend>
                    <p className="field">
                        <label htmlFor="title">Title</label>
                        <span className="input">
                            <input type="text" name="title" id="title" placeholder="Title"
                                value={formValues.title}
                                onChange={onChangeValueHandler}
                            />
                        </span>
                    </p>
                    <p className="field">
                        <label htmlFor="description">Description</label>
                        <span className="input">
                            <textarea name="description" id="description" placeholder="Description"
                                value={formValues.description}
                                onChange={onChangeValueHandler}
                            ></textarea>
                        </span>
                    </p>
                    <p className="field">
                        <label htmlFor="imageUrl">Image</label>
                        <span className="input">
                            <input type="text" name="imageUrl" id="imageUrl" placeholder="ImageUrl"
                                value={formValues.imageUrl}
                                onChange={onChangeValueHandler}
                            />
                        </span>
                    </p>
                    <p className="field">
                        <label htmlFor="type">Type</label>
                        <span className="input">
                            <select id="type" name="type"
                                value={formValues.type}
                                onChange={onChangeValueHandler}
                            >
                                <option value="Fiction">Fiction</option>
                                <option value="Romance">Romance</option>
                                <option value="Mistery">Mistery</option>
                                <option value="Classic">Clasic</option>
                                <option value="Other">Other</option>
                            </select>
                        </span>
                    </p>
                    <button className="button" type="button" onClick={onCancelHandler}>Cancel</button>
                    <input className="button submit" type="submit" value="Edit Book" />
                </fieldset>
            </form>
        </section>
    );
}