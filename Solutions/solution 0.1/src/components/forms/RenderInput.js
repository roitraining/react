import React from 'react';
import RenderField from './RenderField'

const RenderInput = ({ input, label, type, controlId, meta }) => (
    <RenderField label={label} meta={meta}>
        <input {...input}  id={controlId} type={type}
        className="form-control" placeholder={label} />
    </RenderField>
);

export default RenderInput;