import { TfiClose } from 'react-icons/tfi';

interface modalHeaderProps {
    onClose: () => void;
    className?: string;
    children : React.ReactNode;
}

const ModalHeader : React.FC<modalHeaderProps> = ({ onClose,className,children }) => {
  return (
    <div className={`text-right col-start-12 lg:col-span-1 lg:self-end mt-[2px] pr-[10px] absolute right-0 top-0 flex items-end justify-end signin-close-button ${className}`}>
      
      {children}
      
      <button 
        onClick={onClose} 
        className=" group sign-close-icon focus-visible:bg-primary-400 p-2 rounded-full focus-visible:bg-primary-400 primary light false"
        aria-label="close_icon_title"
      >
        <span className="flex group:focus:[&:not(:focus-visible)]:flex group-focus-visible:[&:not(:focus)]:hidden sign-close-icon"></span>
        <TfiClose className='h-[33px] w-[19px] mt-1 font-bold' />
        
      </button>
    </div>
  );
}
export default ModalHeader;