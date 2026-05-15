import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollHandler = () => {
    const location = useLocation();

    useEffect(() => {
        // 1. Check if there is a hash in the URL (e.g., "#location")
        if (location.hash) {
            // 2. Remove the "#" to get the exact ID
            const elementId = location.hash.slice(1);
            const element = document.getElementById(elementId);

            // 3. If the element exists, scroll to it
            if (element) {
                // A tiny timeout ensures the DOM is fully painted before scrolling
                setTimeout(() => {
                    element.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }, 100);
            }
        } else {
            // 4. Optional: If there is no hash, just scroll to the very top smoothly
            window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
        }
    }, [location]); // Only re-runs when the URL changes

    return null;
};

export default ScrollHandler;