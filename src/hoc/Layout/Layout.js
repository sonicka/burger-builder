import React, { useState } from 'react';
import { connect } from 'react-redux';

import Aux from '../Auxx/Auxx';
import Toolbar from '../../components/Navigation/Toolbar/Toolbar';
import SideDrawer from '../../components/Navigation/SideDrawer/SideDrawer';
import classes from './Layout.css';

const layout = props => {
    const [isSideDrawerVisible, setIsSideDrawerVisible] = useState(false);

    const sideDrawerClosedHandler = () => {
        // may lead to unexpected behaviour when calling state in set state:
        // this.setState({showSideDrawer: !this.state.showSideDrawer});
        // use functional approach instead, passing the prevstate as an argument
        // this.setState({ showSideDrawer: false });
        setIsSideDrawerVisible(false);
    }

    // ^ v these two chaged (todo?)

    const sideDrawerToggleHandler = () => {
        // this.setState((prevState) => {
        //     return { showSideDrawer: !prevState.showSideDrawer };
        // });
        setIsSideDrawerVisible(!isSideDrawerVisible);
    }

    return (
        <Aux>
            <Toolbar
                isAuth={props.isAuthenticated}
                drawerTogglerClicked={sideDrawerToggleHandler} />
            <SideDrawer
                isAuth={props.isAuthenticated}
                open={isSideDrawerVisible}
                closed={sideDrawerClosedHandler} />
            <main className={classes.Content}>
                {props.children}
            </main>
        </Aux>
    )
}

const mapStateToProps = state => {
    return {
        isAuthenticated: state.auth.token !== null
    };
};

export default connect(mapStateToProps)(layout);