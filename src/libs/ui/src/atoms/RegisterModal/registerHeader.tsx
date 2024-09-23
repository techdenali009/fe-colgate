import React from "react";

interface registerHeaderProps {
    heading : string
}

const registerHeader: React.FC<registerHeaderProps> = ({ heading }) => {
    return(
        <div className="register-body">
            <h1>{heading}</h1>
        </div>
    )
}

export default registerHeader;