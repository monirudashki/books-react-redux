
//import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteBook, deleteModeToggle } from "../../Features/myBooksState/myBooks";
import { deleteBookById } from "../../Services/data";
//import { Spinner } from "../Shared/Spinner";

export const DeleteBook = () => {
    const dispatch = useDispatch();

    const bookId = useSelector((state) => state.myBooks.currentBookId);

    const onDeleteConfirm = () => {
        deleteBookById(bookId)
            .then(() => {
                dispatch(deleteModeToggle(false));
                dispatch(deleteBook(bookId));
            })
    }

    const onDeleteCancel = () => {
        dispatch(deleteModeToggle(false));
    }

    return (
        <div className="delete-container">
            <div className="delete-wrapper">
                <div>
                    <h2>Confirm delete book?</h2>
                </div>
                <div>
                    <button onClick={onDeleteCancel} className="buttons-delete" type="button">CANCEL</button>
                    <button onClick={onDeleteConfirm} className="buttons-delete" type="button">DELETE</button>
                </div>
            </div>
        </div>
    );
}