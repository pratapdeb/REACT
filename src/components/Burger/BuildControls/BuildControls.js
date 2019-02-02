import React from 'react';
import './BuildControls.css';
import BuildControl from './BuildControl/BuildControl';



const controls =[

    {label:'Salad',type:'salad'},
    {label:'Bacon',type:'bacon'},
    {label:'Cheese',type:'cheese'},
    {label:'Meat',type:'meat'},
    
];

const BuildControls=(props)=>
(

    <div className='BuildControls'>
    <h3 className=''>Total Price : {props.price.toFixed(2)}</h3>
    {controls.map(ctrl=>(
        
       <BuildControl key={ctrl.label} 
       label={ctrl.type}
       
       added={()=>props.ingridientsAdded(ctrl.type)}
       
       remove={()=>props.ingridientsRemove(ctrl.type)}
       
       disabled={props.disabled[ctrl.type] }


       />
     

    ))}
    <button className='OrderButton' disabled={!props.purchasable}
    onClick={props.ordered}
    
    >ORDER NOW</button>
    </div>
 
);

export default BuildControls;