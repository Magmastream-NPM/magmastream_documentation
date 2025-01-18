import BrowserOnly from '@docusaurus/BrowserOnly';
import clsx from 'clsx';
import React, { memo, Suspense } from 'react';
import LoadingSkeleton from '../../Common/LoadingSkeleton';
import Statistics from './Statistics';

const StatisticsFeature = () => (
	<div className={clsx('col col--3')}>
		<div className="text--left padding-horiz--md">
			<h3>Statistics</h3>
			<div>
				<BrowserOnly fallback={<LoadingSkeleton />}>
					{() => (<Statistics />)}
				</BrowserOnly>
			</div>
		</div>
	</div>
);

export default memo(StatisticsFeature);
