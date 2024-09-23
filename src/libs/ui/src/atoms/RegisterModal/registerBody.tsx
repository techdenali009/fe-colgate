import React from "react";

interface registerBodyProps {
    children: React.ReactNode;
}

const registerBody: React.FC<registerBodyProps> = ({ children }) => {
    return (
        <div>
            <h2>Body</h2>
        </div>
    )
}

export default registerBody;