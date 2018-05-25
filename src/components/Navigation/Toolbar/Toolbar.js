import React from 'react';
import classes from './Toolbar.css';
import Logo from '../../Logo/Logo'
import NavigationItems from '../NavigationItems/NavigationItems';
import DrawerToggler from '../SideDrawer/DrawerToggler/DrawerToggler';

const toolbar = (props) => (
    <header className={classes.Toolbar}>
        {/*
        <div onClick={props.drawerState}>MENU</div>
        */}
        <DrawerToggler clicked={props.drawerTogglerClicked}/>
        <div className={classes.Logo}>
            <Logo/>
        </div>
        <nav className={classes.DesktopOnly}>
            <NavigationItems/>
        </nav>
    </header>
);

export default toolbar;