// src/components/ToTop.jsx
// rafce / rfce

import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { MdArrowUpward } from "react-icons/md";

function BackToTop() {
    const [scroll, setScroll] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            setScroll(window.scrollY);
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const backToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <Link
            onClick={backToTop}
            className={`fixed right-4 bottom-4 z-[9999] w-10 h-10 bg-[#0a0642] 
            rounded-md flex items-center justify-center opacity-0 invisible 
            transition-all duration-400 hover:bg-blue-600 hover:text-white ${
                scroll > 100 ? 'opacity-100 visible' : ''
            }`}
        >
            <MdArrowUpward className="text-white text-xl" />
        </Link>
    );
}

export default BackToTop;
