// import React, { ReactNode } from 'react';
// import Logo from '../Logo';

// interface ModalProps {
//   isOpen: boolean; // indicates whether the modal is open or not
//   onClose: () => void; // function to close the modal
//   children: ReactNode; // content to be displayed inside the modal
// }

// const Modal: React.FC<ModalProps> = ({ isOpen, onClose, children }) => {
//   return (
//     <>
//       {isOpen && (
//         <div className="fixed inset-0 flex items-start justify-center z-50">
//           <div className="  absolute inset-0" onClick={onClose} />
//           <div className={`bg-white w-[100%] rounded-lg shadow-lg mt-12 transition-transform transform ${isOpen ? 'translate-y-0' : '-translate-y-full'} duration-300 ease-in-out`}>
//             <div className="p-4">
//               {children}
//             </div>
            
//             {/* <button className="mt-2 p-2 bg-red-500 text-white rounded" onClick={onClose}>
//               Close 
//             </button> */}
//           </div>
//         </div>
//       )}
//     </>
//   );
// };

// export default Modal;
