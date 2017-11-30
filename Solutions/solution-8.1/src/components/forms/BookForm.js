import React from 'react';
import { Field, reduxForm } from 'redux-form';
import RenderInput from './RenderInput';
import DropWrapper from '../common/DropWrapper';

const handleImageChosen = (e, target, prop) => {
	let size = 160;
	let newHeight;
	let newWidth;
	let files = e.target.files || e.dataTransfer.files;
	if (files && files.length > 0) {
		let f = files[0];
		let reader = new FileReader();
		reader.onload = (function (theFile) {
			return function (e2) {
				let image = new Image();
				image.onload = function () {
					newHeight = this.height;
					newWidth = this.width;
					if (this.height > size) {
						newHeight = size;
						newWidth = (newHeight * this.width) / this.height;
					}
					if (newWidth > size) {
						let oldWidth = newWidth;
						newWidth = size;
						newHeight = (newWidth * newHeight) / oldWidth;
					}
					let canvas = document.createElement("canvas");
					let ctx = canvas.getContext("2d");
					canvas.width = newWidth;
					canvas.height = newHeight;
					ctx.drawImage(image, 0, 0, newWidth, newHeight);
                    //your code here
					target.change(prop, canvas.toDataURL(f.type));

				};
				image.src = e2.target.result;
			};
		})(f);
		reader.readAsDataURL(f);
	}
}


const validate = values => {
    const errors = {};
    if(required(values.title, errors, 'title')) {
        size(values.title, errors, 'title', 3, 256);
    }
    if (required(values.author, errors, 'author')) {
        size(values.author, errors, 'author', 4, 100);  
    }
    return errors;
}

const required = (value, errors, prop) => {
    if (!value || value.trim() === '') {
        errors[prop] = 'Cannot be empty';
        return false;
    }
    return true;
}

const size = (value, errors, prop, min, max) => {
    if (value.length > max || value.length < min) {
        errors[prop] = `must be between ${min} and ${max} characters`;
    }
}

const BookForm = props => {
    const { handleSubmit, cover } = props;

    return (<form className="form-group form-inline" onSubmit={handleSubmit}>
        <div className="row vertical-align">
            <div className="col-xs-3">
                <Field
                    component={RenderInput}
                    name="title"
                    type="text"
                    controlId="title"
                    label="Title*" />
            </div>
            <div className="col-xs-3">
                <Field
                    component={RenderInput}
                    name="author"
                    type="text"
                    controlId="author"
                    label="Author*" />
            </div>
            <div className="col-xs-3">
                <DropWrapper dropped={handleImageChosen} target={props} prop="cover">
                    <img src={cover}  />
                </DropWrapper>
            </div>            
            <button type="submit" className="btn btn-default btn-primary" >Submit</button>
        </div>
    </form>);
}

export default reduxForm({
    form: 'book',
    validate
})(BookForm);