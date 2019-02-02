import React from 'react';
import './Toolbar.css';
import Logo from '../../Logo/Logo';
import NaviationItems from '../NavigationItems/NavigationItems';
import DrawerToggle from '../SideDrawer/DrawerToggle/DrawerToggle';

const toolbar=(props)=>
{
return(
<header className='Toolbar'>

<DrawerToggle clicked={props.drawerToggleClicked}/>
<div><Logo/></div>

<nav className='DesktopOnly'>

<NaviationItems></NaviationItems>

</nav>
</header>

);
}
export default toolbar;