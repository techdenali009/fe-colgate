import React from 'react';
// import './search.styles.scss';

export const Icon: React.FC<{ icon: string, className?: string }> = ({ icon, className = '' }) => {
    return <>
       <a href='navigation-logo lg:h-[var(--navigation-logo-height-desk)]
                    h-[var(--navigation-logo-height-mobile)] z-10' className=''> <img src={icon} alt="Site Logo" className={`min-w-min ${className}`} /></a>

    </>
        ;
}

