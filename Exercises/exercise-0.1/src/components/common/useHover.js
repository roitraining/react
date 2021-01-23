import { useEffect, useRef, useState } from 'react';
export default function useHover() {
    const [isHovering, setIsHovering] = useState(false);
    const ref = useRef(null);
    
    const handleDragOver = () => {
        setIsHovering(true);
    }
    const handleDragLeave = () => {
        setIsHovering(false);
    }

    useEffect(
        () => {
            const node = ref.current;
            if (node) {
                node.addEventListener('dragover', handleDragOver);
                node.addEventListener('dragleave', handleDragLeave);
                node.addEventListener('drop', handleDragLeave);
                return () => {
                    node.removeEventListener('dragover', handleDragOver);
                    node.removeEventListener('dragleave', handleDragLeave);
                    node.removeEventListener('drop', handleDragLeave);
                }
            }   
        },
        [ref]
    );

    return [ref, isHovering];
}