import React from 'react';
import './Burger.css';
import BurgerIngridient from "./BurgerIngridient/BurgerIngridient";
const Burger =(props)=>
{

let transformIngridients=Object.keys(props.ingridients)
.map(igKey=>{

return [...Array(props.ingridients[igKey])].map((_,i)=>

{
return <BurgerIngridient key={igKey+i} type={igKey}/>
});

}).reduce((arr,el)=>{
    return arr.concat(el)
},[])

if(transformIngridients.length===0)
{

transformIngridients=<p>Please start adding ingridients</p>
}

return (

<div className='Burger'> 
<BurgerIngridient type='bread-top'/>

{transformIngridients}
<BurgerIngridient type='bread-bottom'/>

 </div>

);

};

export default Burger;