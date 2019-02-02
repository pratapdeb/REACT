import React,{Component} from 'react';
import Aux from '../../hoc/Aux';
import Toolbar from '../Navigation/Toolbar/Toolbar';
import SideDrawer from '../Navigation/SideDrawer/SideDrawer';


class Layout extends Component{

state={
    showSideDrawer:false
}



sideDrawerCloseHandler=()=>
{

this.setState((prevState)=>{return{
    showSideDrawer:!prevState.showSideDrawer}
});
}


sideDrawerToggleHandler=()=>
{
    const oldstate=this.state.showSideDrawer;
    this.setState({showSideDrawer:!oldstate});
}




    render(){
        return(

            <Aux>
            <div>
            
             <Toolbar drawerToggleClicked={this.sideDrawerToggleHandler}/>
             <SideDrawer open={this.state.showSideDrawer} closed={this.sideDrawerCloseHandler}/>
            </div>
            
            <main>
            {this.props.children}
            
            </main>
            </Aux>
        )
    }
        
    
} 


export default Layout;