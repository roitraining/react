import React from 'react';

const allow = (e) => {
    e.stopPropagation();
    e.preventDefault();
}

const handleDrop = (e, dropped, target, prop) => {
    allow(e);
    dropped(e, target, prop);
}

const DropWrapper = ({dropped, target, prop, children}) => (<div className="dropTarget" 
    onDragOver={(e) => { allow(e) } }
    onDragEnter={(e) => { allow(e) } }
    onDrop={(e) => { handleDrop(e, dropped, target, prop) } }>
    {children}
</div>);

export default DropWrapper;