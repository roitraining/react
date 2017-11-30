import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/takeUntil';
import 'rxjs/add/operator/mergeMap';
import 'rxjs/add/operator/catch';
import * as api from '../api';
import * as actionTypes from './actionTypes';

export const searchEpic = action$ =>
    action$.ofType(actionTypes.SEARCH_BOOKS)
        .debounceTime(500)
        .mergeMap((title) => {
            return api.fetchBooksByTitle(title.term)
                .map((res) => ({ type: actionTypes.LIST_BOOKS, response: res }))
                .takeUntil(action$.ofType('SEARCH_CANCELLED'))
                .catch(error => Observable.of({
                    type: 'SEARCH_ERROR'
                }));
        })