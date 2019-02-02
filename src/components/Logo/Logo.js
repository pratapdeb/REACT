import React from 'react';
import BurgerLogo from '../../assets/img/burger-logo.png';
import './Logo.css';
const logo=(props)=>
{

return (

<div className='Logo'>
    <img src={BurgerLogo}></img>
</div>

);

}
export default logo;