import axios from "axios";


const url = "http://localhost:3030/api/bookreactions";

const headers = {
    accept: 'application/json',
    'content-type': 'application/json'
};

export const fetchAllBooks = async () => {
    const response = await axios.get(`${url}/books`);
    return response.data;
}

export const addBook = async (book) => {
    const response = await axios.post(`${url}/books`, book, headers);
    return response.data;
}


export const fetchReviews = async (bookId) => {
    const response = await axios.get(`${url}/reviews/${bookId}`);
    return response.data;
}

export const addReview = async (review) => {
    const response = await axios.post(`${url}/reviews`, review, headers);
    return response.data;
}

