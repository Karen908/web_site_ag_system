import { useState } from 'react';
import { BiSolidCommentAdd } from "react-icons/bi";
import { BiSolidCommentX } from "react-icons/bi";

const Burbuja = ({ toggleComments }) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleBubble = () => {
        setIsOpen(!isOpen);
        toggleComments();
    };

    return (
        <div className="comment-bubble" onClick={toggleBubble}>
            {isOpen ? <BiSolidCommentX className="icon" /> : <BiSolidCommentAdd className="icon" />}
        </div>
    );
};

export default Burbuja;
