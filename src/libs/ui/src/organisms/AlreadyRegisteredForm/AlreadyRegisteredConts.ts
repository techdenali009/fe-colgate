export const AlreadyRegisteredConstants = (mode: string) => {
  let formClassName = ' ';
  let textClassName = '';
  let buttonClassName = '';
  let modalButtonClassName = ''
  let mainDivClass = '';
  let LoginButton = ''; 
  let LoginForgotPassword='';
  let welcomepagebutton='';
  if (mode === 'modal') {
    formClassName = 'grid pb-2 mt-[29px]';
    textClassName = 'text-[32px] font-HeroNewRegular';
    modalButtonClassName = 'hidden'
    mainDivClass = 'mb-8 inline-grid'
    buttonClassName = 'flex !flex-row justify-between items-center w-full'
    LoginButton = ' bg-appTheme text-white float-right p-4 mt-[12px] lg:m-1 mb-[8px] mt-[10px] hover:bg-black hover:underline text-sm font-HeroNewBold'
    LoginForgotPassword='mt-2 p-0 text-start'
    LoginForgotPassword ='bg-none text-appTheme text-sm font-HeroNewRegular font-medium hover:underline hover:font-bold';

  } else {
    formClassName = 'flex flex-col lg:grid grid-cols-2 gap-2 mt-4'; // Example for other modes like 'page'
    textClassName = 'text-2xl font-HeroNewRegular pt-[5px]';
    buttonClassName = 'flex flex-row gap-4 row-span-1  justify-self-end lg:flex-row-reverse lg:items-center lg:row-span-1 col-span-2 lg:justify-self-end'
    mainDivClass = '!mb-2 inline-grid'
    LoginButton = ' bg-appTheme text-white !p-[15px] mt-[12px] lg:m-1 mb-[10px] mt-[10px] hover:bg-black hover:underline text-sm font-HeroNewBold'
    LoginForgotPassword ='bg-none text-appTheme text-sm font-HeroNewRegular font-medium hover:underline hover:font-bold';
    welcomepagebutton='hidden'
  }
  return { formClassName, textClassName, buttonClassName,welcomepagebutton, modalButtonClassName, mainDivClass, LoginButton,LoginForgotPassword }
}