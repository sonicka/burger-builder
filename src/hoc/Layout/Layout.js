import React, {Component} from 'react';
import Aux from '../Auxx/Auxx';
import Toolbar from '../../components/Navigation/Toolbar/Toolbar';
import SideDrawer from '../../components/Navigation/SideDrawer/SideDrawer';
import classes from './Layout.css'

class Layout extends Component {
    state = {
        showSideDrawer: false
    };

    sideDrawerClosedHandler = () => {
        this.setState({showSideDrawer: false});
    };

    sideDrawerHandler = () => {
        // may lead to unexpected behaviour when calling state in set state:
            // this.setState({showSideDrawer: !this.state.showSideDrawer});
            // use functional approach instead, passing the prevstate as an argument
        this.setState((prevState) => {
           return {showSideDrawer: !prevState.showSideDrawer};
        });
    };

    render() {
        return (
            <Aux>
                <Toolbar drawerTogglerClicked={this.sideDrawerHandler}/>
                <SideDrawer
                    open={this.state.showSideDrawer}
                    closed={this.sideDrawerClosedHandler}/>
                <main className={classes.Content}> {this.props.children} </main>
            </Aux>
        )
    }
}

export default Layout;