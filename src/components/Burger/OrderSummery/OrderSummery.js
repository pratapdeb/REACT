import React,{Component} from 'react';
import Aux from '../../../hoc/Aux';
import Button from '../../UI/Button/Button';

class  OrderSummery extends Component
{



    componentWillUpdate()
    {

//check the render

    }
    
 render()
 {

   



    const ingridientsSummery=Object.keys(this.props.ingridients)
    .map(igKey=>{

        return (

            <li key={igKey}>
                <span style={{textTransform:'capitalize'}}>{igKey} </span>
                {this.props.ingridients[igKey]}
            </li>
        )
    });

    return(
 
   


 

    <Aux>
<h3>Your Order</h3>
<p>Burgeer with Ingridiends</p>
<p>Total Price : {this.props.price.toFixed(2)}</p>
<ul>{ingridientsSummery}</ul>
<Button clicked={this.props.purchaseCancel} btnType='Danger'>Cancel</Button>
<Button clicked={this.props.purchaseContinue} btnType='Success'>Continue</Button>
    </Aux>
)
 }
}
export default OrderSummery;