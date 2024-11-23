import axios from "axios";


const url = "http://localhost:3030/api/bookreactions";

export const fetchAllBooks = async () => {
    const response = await axios.get(`${url}/books`);
    return response.data;
}

export const fetchReviews = async (bookId) => {
    const response = await axios.get(`${url}/reviews/${bookId}`);
    return response.data;
}

