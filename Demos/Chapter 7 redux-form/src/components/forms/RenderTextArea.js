import React from 'react';
import RenderField from './RenderField'

const RenderTextArea = ({ input, label, controlId, meta }) => (
    <RenderField label={label} meta={meta} controlId={controlId}>
        <textarea {...input} rows="3" cols="90" id={controlId}
        className="form-control" placeholder={label} >using me</textarea>
    </RenderField>
);

export default RenderTextArea;