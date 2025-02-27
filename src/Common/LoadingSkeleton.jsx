import { useColorMode } from '@docusaurus/theme-common';
import clsx from 'clsx';
import React, { memo } from 'react';
import styles from './LoadingSkeleton.module.css';

const LoadingSkeleton = (props) => {
	const { colorMode } = useColorMode();

	return (
		<div
			className={clsx(styles.loadingSkeleton, {
				[styles.lightLoadingSkeleton]: colorMode !== 'dark',
				[styles.darkLoadingSkeleton]: colorMode === 'dark'
			})}
			style={props}
		/>
	);
};

export default memo(LoadingSkeleton);
