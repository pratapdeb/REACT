import React from 'react';
import './SideDrawer.css';
import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';
import Aux from '../../../hoc/Aux';
import Backdrop from '../../UI/Backdrop/Backdrop';

const sideDrawer=(props)=>{

let attachedClassed=['SideDrawer','Close'];

if(props.open===true)
{

    attachedClassed=attachedClassed=['SideDrawer','Open'];
}
    return (

        <Aux>

        <Backdrop  clicked={props.closed} show={props.open}/>
       <div className={attachedClassed.join(' ')}>
        
           
        <div style={{'height':'11%','marginBottom':'100px;'}}>
        <Logo/>
        </div>
        <nav>
            <NavigationItems/>
        </nav>
     </div>
     </Aux>
    )
}
export default sideDrawer;

