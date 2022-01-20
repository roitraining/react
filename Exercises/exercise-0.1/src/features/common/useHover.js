import { useCallback, useState } from 'react';

function useHover() {
    const [isHovering, setIsHovering] = useState(false);

    const handleDragOver = useCallback(() => {
        setIsHovering(true);
    }, []);

    const handleDragLeave = useCallback(() => {
        setIsHovering(false);
    }, []);


    const ref = useCallback(node => {
        if (node) {
            node.addEventListener('dragover', handleDragOver);
            node.addEventListener('dragleave', handleDragLeave);
            node.addEventListener('drop', handleDragLeave);
        }
    },
        [handleDragOver, handleDragLeave]
    );

    return [ref, isHovering];
}

export default useHover;