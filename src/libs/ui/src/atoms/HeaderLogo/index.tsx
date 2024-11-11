
import logo from '../../../assets/logo.svg';
import { useNavigate } from 'react-router-dom';
import { Logo } from '../Logo/logo';

export const HeaderLogo =() =>{
  const navigate = useNavigate()
  return  <Logo src={logo} alt='logo' onClick={()=>{
    console.log('Header Logo clicked')
    navigate('')
  }} className='tl:scale-x-[1] scale-x-[1.5] scale-y-[1.3] tl:scale-y-[1]    lg:p-0.5!important tm:p-0 tm:m-0  max-w-[63.75em]  lg:w-[145px] w-24  '   />
}