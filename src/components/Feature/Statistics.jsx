import useIsBrowser from '@docusaurus/useIsBrowser';
import React, { useEffect, useState } from 'react';
import styles from './Statistics.module.css';
import Link from "@docusaurus/Link";
import LoadingSkeleton from "../../Common/LoadingSkeleton";
import Skeleton, {SkeletonTheme} from "react-loading-skeleton";

const formatNumber = (number) => number.toLocaleString();

const Statistics = () => {
	const isBrowser = useIsBrowser();

	const [repoData, setRepoData] = useState(null);
	const [contributorsData, setContributorsData] = useState(null);
	const [npmData, setNpmData] = useState(null);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		if (!isBrowser) return;

		const fetchData = async () => {
			try {
				const storedRepoData = localStorage.getItem('repoData');
				const storedContributorsData = localStorage.getItem('contributorsData');

				let repoJson = null;
				let contributorsJson = null;

				if (storedRepoData) {
					const cachedRepoData = JSON.parse(storedRepoData);
					if (Date.now() - cachedRepoData.timestamp < 3600000) {
						repoJson = cachedRepoData.data;
					}
				}

				if (storedContributorsData) {
					const cachedContributorsData = JSON.parse(storedContributorsData);
					if (Date.now() - cachedContributorsData.timestamp < 3600000) {
						contributorsJson = cachedContributorsData.data;
					}
				}

				if (!repoJson) {
					const repoResponse = await fetch('https://api.github.com/repos/Magmastream-NPM/magmastream');
					repoJson = await repoResponse.json();
					localStorage.setItem('repoData', JSON.stringify({ data: repoJson, timestamp: Date.now() }));
				}

				if (!contributorsJson) {
					const contributorsResponse = await fetch('https://api.github.com/repos/Magmastream-NPM/magmastream/contributors');
					contributorsJson = await contributorsResponse.json();
					localStorage.setItem('contributorsData', JSON.stringify({ data: contributorsJson, timestamp: Date.now() }));
				}

				const npmResponse = await fetch('https://api.npmjs.org/downloads/range/2020-01-01:2100-12-31/magmastream');
				const npmJson = await npmResponse.json();

				setRepoData(repoJson);
				setContributorsData(contributorsJson);
				setNpmData(npmJson);
			} catch (error) {
				console.error('Błąd podczas pobierania danych:', error);
			} finally {
				setTimeout(() => {
					setLoading(false);
				}, 4000)
			}
		};

		fetchData();
	}, [isBrowser]);

	return (
		<ul>
			<SkeletonTheme baseColor="#0a0a0a" highlightColor="#111112">
				{loading ? <Skeleton count={4} style={{
					marginLeft: '-2rem'
				}} /> : (
					<>
						<li className={styles.downloads}>{formatNumber(npmData.downloads.reduce((acc, curr) => acc + curr.downloads, 0))}+ downloads</li>
						<li className={styles.stars}>{formatNumber(repoData.stargazers_count)}+ stars</li>
						<li className={styles.forks}>{formatNumber(repoData.forks_count)}+ forks</li>
						<li className={styles.contributors}>{formatNumber(contributorsData.length)}+ contributors</li>
					</>
				)}
			</SkeletonTheme>
			<li className={styles.more}>
				<Link to="/statistics">More statistics <i className="fa-solid fa-arrow-up-right-from-square fa-xs"/></Link>
			</li>
		</ul>
	);
};

export default Statistics;
