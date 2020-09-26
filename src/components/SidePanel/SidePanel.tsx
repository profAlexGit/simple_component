import React, {FC, useState} from 'react';
import { HeaderSidePanel } from '../HeaderSidePanel/HeaderSidePanel';

import './style.css';

const SidePanel: FC = (): JSX.Element => {
	const [showSide, toggleShowSide] = useState<boolean>(false);

	return (
		<div className={showSide ? 'expanded' : 'collapsed'}>
			<div className="showButton" onClick={() => toggleShowSide(!showSide)}>></div>
			{showSide && (
				<HeaderSidePanel
					image="https://lh5.googleusercontent.com/p/AF1QipOZ0karkKVWE08NGijcYcLLOXVF_6NfUzb_j2PL=w408-h250-k-no"
					title="Воронежский областной краеведческий музей"
					rating={4.5}
					countRating={397}
					description="Краеведческий музей"
				/>
			)}
		</div>
	);
};

export {SidePanel}
