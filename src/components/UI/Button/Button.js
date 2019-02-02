import React from 'react';
import './Button.css';

const button=(props)=>
{
 let classType=props.btnType;

  return ( <button onClick={props.clicked}
  className={['Button',classType].join(' ')}
  >{props.children}</button>
  )
}

export default button;