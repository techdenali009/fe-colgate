import React, { ReactNode } from "react";

interface IHeading{
    type: 'h1' ,
    className ?: string,
    children : ReactNode
}

export const Heading: React.FC<IHeading> = ({type ,className='',children}) =>{
    return  <h1 className={className}> {children}</h1>
    
};
