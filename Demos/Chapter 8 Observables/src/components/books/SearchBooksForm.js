import React from 'react';
import { connect } from 'react-redux';
import {searchBooks } from '../../actions';

const SearchBooksForm = ({searchBooks}) => {

 	let title;

    const search = (title) => {
        searchBooks(title);
    }

    return (<tr>
                <th colSpan="3">
                <label  className="control-label">Filter:
                <input type="text" className="form-control" ref={node => {
					title = node
				} }
                        onChange={(e) => {  search(title.value) } } /></label>
                </th>
            </tr>);
}

//export default SearchBooksForm;

const mapDispatchToProps = ({
    searchBooks
 })
 
export default connect(null, mapDispatchToProps)(SearchBooksForm);