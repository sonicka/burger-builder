import React, {Component} from 'react';
import {connect} from 'react-redux';
import Aux from '../Auxx/Auxx';
import Toolbar from '../../components/Navigation/Toolbar/Toolbar';
import SideDrawer from '../../components/Navigation/SideDrawer/SideDrawer';
import classes from './Layout.css'
import { isNull } from 'util';

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
                <Toolbar 
                    isAuth={this.props.isAuthenticated}
                    drawerTogglerClicked={this.sideDrawerHandler}
                    />
                <SideDrawer
                    isAuth={this.props.isAuthenticated}
                    open={this.state.showSideDrawer}
                    closed={this.sideDrawerClosedHandler}/>
                <main className={classes.Content}> {this.props.children} </main>
            </Aux>
        )
    }
}

const mapStateToProps = state => {
    return {
        isAuthenticated: state.auth.token !== null
    };
};

export default connect(mapStateToProps)(Layout);