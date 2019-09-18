import React from 'react';
import Aux from '../Auxx/Auxx';
import Modal from '../../components/UI/Modal/Modal';
import useHttpErrorHadler from '../../hooks/http-error-handler';

const withErrorHandler = (WrappedComponent, axios) => { //lower case because not used in JSX, only as a wrapper with a function
    return props => {
        const [error, clearError] = useHttpErrorHadler(axios);

        return (
            <Aux>
                <Modal
                    show={error}
                    modalClosed={clearError}>
                    {error ? error.message : null}
                </Modal>
                <WrappedComponent {...props} />
            </Aux>
        );
    }
}

export default withErrorHandler;