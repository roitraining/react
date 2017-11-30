import React from 'react';

const RenderField = ({ input, label, type, controlId }) => (
    <div className="form-group">
        <div className="form-inline">
            <label htmlFor={controlId} className="control-label">{label}: &nbsp;</label>
            <input {...input} id={controlId}  className="form-control" placeholder={label} type={type} />
        </div>
    </div>);

export default RenderField;