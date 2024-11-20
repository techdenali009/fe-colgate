// src/utils/toastUtils.ts
import { toast, ToastOptions } from 'react-toastify';

const showToast = (message: string, position: 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right', type: 'success' | 'error') => {
  const toastOptions: ToastOptions = {
    position,
    autoClose: 2000, // 2 seconds
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
  };

  if (type === 'success') {
    toast.success(message, toastOptions);
  } else {
    toast.error(message, toastOptions);
  }
};

export const showSuccessToast = (message: string, position: 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right') => {
  showToast(message, position, 'success');
};

export const showErrorToast = (message: string, position: 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right') => {
  showToast(message, position, 'error');
};
