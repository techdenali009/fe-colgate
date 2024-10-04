import { Logo } from '../Logo/logo'
import logo from '../../../assets/Logo.svg';
import { useNavigate } from 'react-router-dom';

export const HeaderLogo =() =>{
  const navigate = useNavigate()
  return  <Logo src={logo} alt='logo' onClick={()=>{
    console.log('Header Logo clicked')
    navigate('')
  }} className='p-4 mx-[80px] lg:p-0.5!important tm:p-0 tm:m-0'/>
}