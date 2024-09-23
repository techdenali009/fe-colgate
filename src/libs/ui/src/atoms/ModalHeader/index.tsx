import React from "react";

interface modalHeaderProps {
    onClose: () => void;
    heading : string;
    classname ?: string
}

const ModalHeader : React.FC<modalHeaderProps> = ({ onClose,heading, classname }) => {
    return (
        <div className="text-right col-start-12 lg:col-span-1 lg:self-end mt-[2px] pr-[10px] absolute right-0 top-0 flex items-end justify-end signin-close-button">
            <button 
                onClick={onClose} 
                className=" group sign-close-icon focus-visible:bg-primary-400 p-2 rounded-full focus-visible:bg-primary-400 primary light false"
                aria-label="close_icon_title"
            >
                <span className="sign-in_close-icon__4BNoR flex group:focus:[&:not(:focus-visible)]:flex group-focus-visible:[&:not(:focus)]:hidden sign-close-icon"></span>
                {/* Button content is not needed since we're using a background image */}
            </button>
        </div>
    );
}
export default ModalHeader;