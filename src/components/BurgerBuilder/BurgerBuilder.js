import React,{Component} from 'react';
import Aux from '../../hoc/Aux';
//import BurgerIngridient from '../Burger/BurgerIngridient/BurgerIngridient';
import Burger from '../Burger/Burger';
import BuildControls from '../Burger/BuildControls/BuildControls';
import Modal from '../UI/Modal/Modal';
import OrderSummery from '../Burger/OrderSummery/OrderSummery';

const INGRIDIENTS_PRICE=

{
    salad:0.5,
    cheese:0.4,
    meat:1.3,
    bacon:0.7
};

class BurgerBuilder extends Component
{


/*constructor(props)
super(props);
this.state={}
*/


    state ={

        ingridients:
        {
            salad:0,
            bacon:0,
            cheese:0,
            meat:0
        }
,totalPrice:4,
purchasable:false,
purchasing:false
    }



purchaseCancelHandler=()=>
{ this.setState({purchasing:false});

}


    purchaseHandler=()=>
    {
        this.setState({purchasing:true});

    }

    updatePurchasable=(ingridients)=>
    {

        const sum =Object.keys(ingridients)
        .map(igKey=>{
                return ingridients[igKey];
                
                }).reduce((sum,el)=>{return sum +el;},0);
        
                this.setState({purchasable:sum>0});

    }

addIngridientHandler=(type)=>
{
const oldcount=this.state.ingridients[type];
const updatedCount =oldcount+1;
const updatedIngridients={

    ...this.state.ingridients
};

updatedIngridients[type]=updatedCount;

const priceAddition =INGRIDIENTS_PRICE[type];

const oldPrice =this.state.totalPrice;
const newPrice =oldPrice+priceAddition; 
this.setState({

    totalPrice:newPrice,ingridients:updatedIngridients
});

this.updatePurchasable(updatedIngridients);
}



removeIngridientHandler=(type)=>
{
    
    const oldcount=this.state.ingridients[type];

    //to handles negative remove
    if(oldcount<=0)
    return;


    const updatedCount =oldcount-1;
    const updatedIngridients={
    
        ...this.state.ingridients
    };
    
    updatedIngridients[type]=updatedCount;
    
    const priceDeduction=INGRIDIENTS_PRICE[type];
    
    const oldPrice =this.state.totalPrice;
    const newPrice =oldPrice-priceDeduction; 
    this.setState({
    
        totalPrice:newPrice,ingridients:updatedIngridients
    }); 
    this.updatePurchasable(updatedIngridients);
}


purchaseContinueHandler=()=>
{



alert('Order Placed');

}













    render(){

        const disabledInfo={...this.state.ingridients};

    
        for(let key in disabledInfo)
            {
                disabledInfo[key]= disabledInfo[key]<=0

                
            }






return(

<Aux>

<Modal clicked={this.purchaseCancelHandler} show={this.state.purchasing} >

    <OrderSummery 
    purchaseCancel={this.purchaseCancelHandler}
    purchaseCcontinue={this.purchaseContinueHandler}
    ingridients={this.state.ingridients}
    price={this.state.totalPrice}/>

</Modal>
    <Burger ingridients={this.state.ingridients}></Burger>
    <BuildControls 
    ingridientsAdded={this.addIngridientHandler}
    ingridientsRemove={this.removeIngridientHandler} 
    disabled={disabledInfo}
    price={this.state.totalPrice}
    purchasable={this.state.purchasable}
    ordered={this.purchaseHandler}
    />
    
    
    
    
    />

</Aux>
    );
}


}




export default BurgerBuilder;