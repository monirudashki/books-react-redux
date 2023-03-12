import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { createBook } from "../../Services/data";

export const CreateBook = () => {

    const navigateTo = useNavigate();

    //const [errors, setErrors] = useState({});

    const [formValues, setFormValues] = useState({
        title: '',
        description: '',
        imageUrl: '',
        type: ''
    });

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
            await createBook(bookData);
            navigateTo('/');
        } catch (err) {
            console.log(err);
        }
    }

    return (
        <section id="create-page" className="create">
            <form id="create-form" onSubmit={onSubmitHandler}>
                <fieldset>
                    <legend>Add new Book</legend>
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
                    <input className="button submit" type="submit" value="Add Book" />
                </fieldset>
            </form>
        </section>
    );
}