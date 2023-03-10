export const DashboardItem = ({
    book
}) => {
    return (
        <li className="otherBooks">
            <h3>{book.title}</h3>
            <p>Type: {book.type}</p>
            <p className="img"><img src={book.imageUrl} alt="sdads" /></p>
            <a className="button" href="#/">Details</a>
        </li>
    )
}