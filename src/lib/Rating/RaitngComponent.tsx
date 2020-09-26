import React, { FC } from 'react';
import { IRaitingProps } from './Raiting.types';
// import Rating from 'material-ui-rating'
import Rating from '@material-ui/lab/Rating'; 

import './styles.css';

const RatingComponent: FC<IRaitingProps> = (props: IRaitingProps): JSX.Element => {

    const {rating, countRating} = props;

    return (
        <div className='raiting'>
            <p>{rating}</p>
            <Rating 
                precision={0.5}
                value={rating}
                readOnly
            />
            <p>({countRating})</p>
        </div>
    )
}

export {RatingComponent};