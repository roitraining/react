const url = "http://localhost:3030/api/bookreactions/";

export const fetchAllBooks = () => {
    return fetch(url + 'Books').then((response) => {
        return response.json();
    });
}

export const fetchReviews = (bookId) => {
    return fetch(url + "Reviews/" + bookId)
        .then(function (response) {
            return response.json();
        });
}
