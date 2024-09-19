import React from 'react';
import logo from "../../../assets/Logo.svg"; // Adjust path according to your file structure
// Adjust the relative path based on your file structure
import './logo.css'

const Logo: React.FC = () => (

  <a href="/" className='focus:outline-none focus:ring-2 focus:ring-blue-500'>
    <img src={logo} alt="Site Logo" className="p-6 mx-[92px] " />

  </a>

);

export default Logo;
