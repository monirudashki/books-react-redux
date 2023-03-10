import { useLocation } from "react-router-dom"

export const DashboardItem = ({
    book
}) => {
    const location = useLocation();

    return (
        <li className="otherBooks">
            <h3>{book.title}</h3>
            <p>Type: {book.type}</p>
            <p className="img"><img src={book.imageUrl} alt="sdads" /></p>
            {location.pathname.includes('myBooks')
                &&
                <div className="actions">
                    <a className="button" href="#/">Edit</a>
                    <a className="button" href="#/">Delete</a>
                </div>
            }
        </li>
    )
}