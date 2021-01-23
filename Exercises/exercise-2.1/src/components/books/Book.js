function Book() {
    const title = "The Lord Of The Rings";
    const author = "J R R Tolkien";

    return (
        <tr>
            <td>
                {title}
            </td>
            <td>{author}</td>
        </tr>
    )
}

export default Book;