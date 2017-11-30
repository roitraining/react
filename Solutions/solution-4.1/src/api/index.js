import fetch from "isomorphic-fetch";

const url = "http://localhost:3030/api/bookreactions/";

export const fetchAllBooks = () => {
    return fetch(url + 'Books').then((response) => {
        return response.json();
    });
}


