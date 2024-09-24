import React, { ReactNode } from "react";

interface IHeading{
    className ?: string,
    children : ReactNode
}

export const Heading: React.FC<IHeading> = ({className='',children}) =>{
    return  <h1 className={className}>{children}</h1>
    
};
