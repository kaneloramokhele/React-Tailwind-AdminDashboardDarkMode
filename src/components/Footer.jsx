// src/components/Footer.jsx
// rafce / rfce





import { Link } from 'react-router-dom';
import { IoMdHeart } from "react-icons/io";

function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer
            id="footer"
            className="py-5 text-sm border-t border-gray-200 text-gray-700 w-full mt-auto">
            <div className="text-center max-w-4xl mx-auto">
                &copy; {currentYear} - 
                <strong className="font-bold">
                    <span> Aliens Imperium</span>
                </strong>
                . All Rights Reserved
            </div>
            <div className="pt-2 text-center text-sm mt-2">
                <span>Developed with </span> 
                <IoMdHeart className="text-red-500 mx-1 text-lg inline-block align-middle" />
                <span> by </span>
                <Link
                    to=""
                    className="text-blue-600 hover:underline font-medium"
                >
                    Aliens Imperium PTY (LTD)
                </Link>
            </div>
        </footer>
    );
}

export default Footer;







// import { Link } from 'react-router-dom';
// import { IoMdHeart } from "react-icons/io";

// function Footer() {
//     const currentYear = new Date().getFullYear();

//     return (
//         <footer
//             id="footer"
//             className="py-5 text-sm border-t border-gray-200 text-gray-700 absolute bottom-0 left-0 w-4/5">

//             <div className="text-center">
//                 &copy; {currentYear} - 
//                 <strong className="font-bold">
//                     <span> Aliens Imperium</span>
//                 </strong>
//                 . All Rights Reserved
//             </div>
//             <div className="pt-2 text-center text-xs">
//                 <span>Developed with </span> 
//                 <IoMdHeart className="text-red-500 mx-1 text-base inline-block align-middle" />
//                 <span> by </span>
//                 <Link
//                     to=""
//                     className="text-blue-600 hover:underline font-medium"
//                 >
//                     Aliens Imperium PTY (LTD)
//                 </Link>
//             </div>
//         </footer>
//     );
// }

// export default Footer;

