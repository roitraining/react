import React from 'react';

const RenderField = ({ input, label, type, controlId, meta: { touched, error, invalid }  }) => (
    <div className={`form-group ${touched && invalid ? 'has-error' : ''}`}>
        <div className="form-inline">
            <label htmlFor={controlId} className="control-label">{label}: &nbsp;</label>
            <input {...input} id={controlId}  className="form-control" placeholder={label} type={type} />
        </div>
        <div className="help-block">
            {touched && error && <span>{error}</span>}
        </div>
    </div>);

export default RenderField;