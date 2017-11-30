import fetch from "isomorphic-fetch";
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/dom/ajax';
import 'rxjs/add/operator/map';

const url = "http://localhost:3030/api/bookreactions/";

const headers = {
    accept: 'application/json',
    'content-type': 'application/json'
};


export const fetchBooksByTitle = (title) => 
Observable.ajax.getJSON(url + "BooksByTitle/" + title)
      .catch(handleObservableError);

const handleObservableError = (error) => {
return Observable.throw(this.logMe(error));
}


export const fetchAllBooks = () => {
    return fetch(url + 'Books').then((response) => {
        return response.json();
    });
}

export const addBook = (book) => {
    return fetch(url + 'Books', {
        method: 'post',
        mode: 'cors',
        headers: headers,
        body: JSON.stringify(book)
    }).then(function (response) {
        return response.json();
    });
}

export const fetchReviews = (bookId) => {
    return fetch(url + "Reviews/" + bookId)
        .then(function (response) {
            return response.json();
        });
}

export const addReview = (review) => {
    return fetch(url + "Reviews", {
        method: 'post',
        mode: 'cors',
        headers: headers,
        body: JSON.stringify(review)
    })
        .then(function (response) {
            return response.json();
        });
}
