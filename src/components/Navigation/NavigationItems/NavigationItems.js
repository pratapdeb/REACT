import React from 'react';
import './NavigationItems.css';
import NavigationItem from './NavigationItem/NavigationItem';


const naviationItems=(props)=>
{
return (



    <ul className='NavigationItems'>

        <NavigationItem link='' active={true} >Burger Builder </NavigationItem>
        <NavigationItem link='' active={true}>Checkout</NavigationItem>

    </ul>
);

}

export default naviationItems;