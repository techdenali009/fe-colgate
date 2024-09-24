import React from 'react';
import logo from "../../../assests/Logo.svg"; // Adjust path according to your file structure
// Adjust the relative path based on your file structure
// import './logo.scss'

const Logo: React.FC = () => (

  <a href="/" className=''>
    <img src={logo} alt="Site Logo" className="p-4 mx-[80px] lg:p-0.5!important" />

  </a>

);

export default Logo;
