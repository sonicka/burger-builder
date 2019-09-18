import React from 'react';
import classes from './Modal.css';
import Aux from '../../../hoc/Auxx/Auxx';
import Backdrop from '../Backdrop/Backdrop';

const modal = props => {
    // shouldComponentUpdate(nextProps, nextState) {
    //     return nextProps.show !== this.props.show || nextProps.child !== this.props.children;
    // }

    return (
        <Aux>
            <Backdrop show={props.show} clicked={props.modalClosed} />
            <div
                style={{
                    transform: props.show ? 'translateY(0)' : 'translateY(-100vh)',
                    opacity: props.show ? '1' : '0'
                }}
                className={classes.Modal}>
                {props.children}
            </div>
        </Aux>
    );
}

export default React.memo(modal, (prevProps, nextProps) => nextProps.show === prevProps.show && nextProps.child === prevProps.children);