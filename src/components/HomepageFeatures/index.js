/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * THIRD_PARTY_LICENSE file in the `website` directory of this source tree.
 */
import React, { useState } from 'react';
import Feature from '../Feature/Feature';
import StatisticsFeature from '../Feature/StatisticsFeature';
import styles from './styles.module.css';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Tippy from '@tippyjs/react';
import clsx from 'clsx';
import { ClipboardIcon } from '@heroicons/react/24/outline';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

async function handleClickInstallButton(command) {
	// eslint-disable-next-line @typescript-eslint/no-unsafe-member-access, @typescript-eslint/no-unsafe-call
	await window.navigator.clipboard.writeText(command);
}

const InstallTabButton = ({ installCommand, handleClickInstallButton }) => {
	const [showTippy, setShowTippy] = useState(false);

	const toggleTippy = () => {
		setShowTippy(true);

		setTimeout(() => {
			setShowTippy(false);
		}, 1000);
	};

	return (
		<Tippy arrow content="Copied!" placement="auto" theme="discord" visible={showTippy}>
			<button
				className={clsx('button', 'button--secondary', 'button--lg', styles.button)}
				onClick={() => {
					handleClickInstallButton();
					toggleTippy();
				}}
				type="button"
			>
				<div className={clsx(styles.buttonContent)}>
					{installCommand}
					<ClipboardIcon className={styles.copyIcon} />
				</div>
			</button>
		</Tippy>
	);
};

const InstallTabs = () => {
	const npmInstallCommand = 'npm install magmastream';
	const yarnInstallCommand = 'yarn add magmastream';
	const pnpmInstallCommand = 'pnpm add magmastream';
	const bunInstallCommand = 'bun add magmastream';
	const denoInstallCommand = 'deno install magmastream';

	return (
		<div className={styles.buttons}>
			<Tabs className={styles.tabs} groupId="npm2yarn2pnpm">
				<TabItem default label="npm" value="npm">
					<InstallTabButton
						handleClickInstallButton={() => {
							handleClickInstallButton(npmInstallCommand);
						}}
						installCommand={npmInstallCommand}
					/>
				</TabItem>
				<TabItem label="yarn" value="yarn">
					<InstallTabButton
						handleClickInstallButton={() => {
							handleClickInstallButton(yarnInstallCommand);
						}}
						installCommand={yarnInstallCommand}
					/>
				</TabItem>
				<TabItem label="pnpm" value="pnpm">
					<InstallTabButton
						handleClickInstallButton={() => {
							handleClickInstallButton(pnpmInstallCommand);
						}}
						installCommand={pnpmInstallCommand}
					/>
				</TabItem>
				<TabItem label="bun" value="bun">
					<InstallTabButton
						handleClickInstallButton={() => {
							handleClickInstallButton(bunInstallCommand);
						}}
						installCommand={bunInstallCommand}
					/>
				</TabItem>
				<TabItem label="deno" value="deno">
					<InstallTabButton
						handleClickInstallButton={() => {
							handleClickInstallButton(denoInstallCommand);
						}}
						installCommand={denoInstallCommand}
					/>
				</TabItem>
			</Tabs>
		</div>
	);
};

const HomePageFeatures = ({ siteConfig }) => (
	<section className={styles.features}>
		<div className="container">
			<div className="row">
				<div className={clsx('col', 'col--4', styles.feature)}>
					<div className="text--left padding-horiz--md">
						<h3>About & features</h3>
						<div>
							{siteConfig.tagline}
							<br />
							<i
								className="fa-solid fa-check"
								style={{
									color: '#b85b13',
									marginRight: '0.4rem',
								}}
							></i>
							<a href={'/docs/enums/SearchPlatform'}>Multiple Sources</a> Powered by <a href={'https://github.com/topi314/LavaSrc'}>LavaSrc</a>
							<br />
							<i
								className="fa-solid fa-check"
								style={{
									color: '#b85b13',
									marginRight: '0.4rem',
								}}
							></i>
							Power up your Discord bot with Lavalink - stream audio from anywhere!
						</div>
					</div>
				</div>
				<div className={clsx('col', 'col--5', styles.feature)}>
					<InstallTabs />
				</div>
				<StatisticsFeature />
			</div>
		</div>
	</section>
);

export default HomePageFeatures;
