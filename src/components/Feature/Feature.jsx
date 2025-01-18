import clsx from 'clsx';
import React, { memo } from 'react';
import styles from './Feature.module.css';
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";

const Feature = ({ title, description, tagline }) => {

	const {siteConfig} = useDocusaurusContext();

	return (
		<div className={clsx('col', 'col--4', styles.feature)}>
			<div className="text--left padding-horiz--md">
				<h3>{title}</h3>
				<div>{tagline && siteConfig.tagline} {description}</div>
			</div>
		</div>
	);
}
export default memo(Feature);