import React from 'react';
import PropTypes from 'prop-types';

class BookForm extends React.Component {

    constructor() {
        super();
        this.state = {
            title: "",
            author: ""
        };

    }

    setTitle(e) {
        this.setState({ title: e.target.value });
    }

    setAuthor(e) {
        this.setState({ author: e.target.value });
    }

    addBook = (e) => {
        e.preventDefault();
        this.props.addBook(this.state.title, this.state.author);
        this.setState({
            title: "",
            author: ""
        });
    }

    render() {
        return (
            <form className="form-group form-inline" onSubmit={this.addBook}>
                <label className="control-label">Title:
				<input type="text" className="form-control" value={this.state.title} onChange={e => this.setTitle(e)} />
                </label>
                <label className="control-label">Author:
				<input type="text" className="form-control" value={this.state.author} onChange={e => this.setAuthor(e)} />
                </label>
                <button type="submit" className="btn btn-primary">Add Book</button>
            </form>
        );

    }
}

BookForm.propTypes = { addBook: PropTypes.func.isRequired };

export default BookForm;
