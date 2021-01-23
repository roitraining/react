import { Field, reduxForm } from 'redux-form';
import RenderInput from './RenderInput';
const BookForm = ({ handleSubmit }) => {
    return (
        <form className="form-group form-inline" onSubmit={ handleSubmit }> 
            <Field component={RenderInput} name="title" type="text" label="Title*" />
            <Field component={RenderInput} name="author" type="text" label="Author*" />

            <button type="submit" className="btn btn-primary">Add Book</button>
        </form>
    );

}

export default reduxForm({
    form: 'book'
})(BookForm);

