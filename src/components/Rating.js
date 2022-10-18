import React from 'react';
import './stylee.scss';


const Rating = props => {
    const { rating } = props;
    return (
        <React.Fragment>          
            {[...Array(5 - rating)].map((e, i) => <i fa fa-star  key={i} color="primary"/>)}
        </React.Fragment>
    )
};

export default Rating;