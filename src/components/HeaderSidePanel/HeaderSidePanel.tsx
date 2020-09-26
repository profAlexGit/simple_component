import React, {FC, Fragment} from 'react';
import {RatingComponent} from '../../lib/Rating/RaitngComponent';
import {IHeaderSidePanelProps} from './HeaderSidePanel.types';

import {} from '@material-ui/icons/'

import './style.css';

const HeaderSidePanel: FC<IHeaderSidePanelProps> = (props: IHeaderSidePanelProps): JSX.Element => {
	const {image, title, rating, countRating, description} = props;

	return (
		<Fragment>
			<img src={image} alt={description} />
			<div className="headerContent">
				<h1>{title}</h1>
				<RatingComponent rating={rating} countRating={countRating} />
				<p>{description}</p>
			</div>
		</Fragment>
	);
};

export {HeaderSidePanel};
