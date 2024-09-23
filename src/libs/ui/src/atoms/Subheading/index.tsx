import React from "react";

interface ISubheading {
    text: string;
    className?: string;
}

export const Subheading: React.FC<ISubheading> = ({ text, className = "" }) => {
   return (
    <p className={className}>
        {text}
    </p>
   );
};
