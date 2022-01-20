import React, {Fragment, memo} from 'react';
import { Snackbar } from '@material-ui/core';
import StyledCard from './styles';

function Card({message, priority, clear, isAlert}:cardProps){
    return (
        <Fragment>
            <StyledCard className={`card card--${priority}`}>
                <div>{message}</div>
                <button onClick={() => clear()}>clear</button>
            </StyledCard>

            <Snackbar anchorOrigin={{ vertical: 'top', horizontal: 'right' }} 
                      open={isAlert}
                      message={message} />
        </Fragment>
    );
}

interface cardProps {
    message: string,
    priority: number,
    clear: Function,
    isAlert: boolean,
}


export default memo(Card);