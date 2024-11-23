function DropWrapper({ dropped, children }) {
    return (
        <div
            onDragOver={(e) => { e.preventDefault(); }}
            onDragEnter={(e) => { e.preventDefault(); }}
            onDrop={(e) => {
                e.preventDefault();
                dropped(e);
            }}
        >
            {children}
        </div>
    );
}

export default DropWrapper;