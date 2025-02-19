import useIsBrowser from '@docusaurus/useIsBrowser';
import React, { useEffect, useState } from 'react';
import Skeleton, {SkeletonTheme} from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

import styles from './Statistics.module.css';

const formatNumber = (number) => number.toLocaleString();

const formatDate = (isoString) => {
    const date = new Date(isoString);
    return new Intl.DateTimeFormat('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
    }).format(date);
};

const Statistics = () => {
    const isBrowser = useIsBrowser();

    const [repoData, setRepoData] = useState(null);
    const [registryData, setRegistryData] = useState(null);
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

                const registryResponse = await fetch('https://registry.npmjs.org/magmastream');
                const registryJson = await registryResponse.json();

                const npmResponse = await fetch('https://api.npmjs.org/downloads/range/2020-01-01:2100-12-31/magmastream');
                const npmJson = await npmResponse.json();

                setRegistryData(registryJson);
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
            <main className={styles.main}>
                <div className="container">
                    <Heading as="h1" style={{
                        textAlign: 'center',
                        marginTop: '2rem',
                        marginBottom: '5rem',
                    }}>
                        Statistics
                    </Heading>
                    <SkeletonTheme baseColor="#0a0a0a" highlightColor="#111112">
                        <div className={styles.grid}>
                            <div className={styles.card}>
                                {loading ? <Skeleton height={75} /> : (
                                    <>
                                        <h2>⭐ Stars</h2>
                                        <p>{formatNumber(repoData.stargazers_count)} stars</p>
                                    </>
                                )}
                            </div>
                            <div className={styles.card}>
                                {loading ? <Skeleton height={75} /> : (
                                    <>
                                        <h2>👀 Watchers</h2>
                                        <p>{formatNumber(repoData.subscribers_count)} watchers</p>
                                    </>
                                )}
                            </div>
                            <div className={styles.card}>
                                {loading ? <Skeleton height={75} /> : (
                                    <>
                                        <h2>🍴 Forks</h2>
                                        <p>{formatNumber(repoData.forks_count)} forks</p>
                                    </>
                                )}
                            </div>
                            <div className={styles.card}>
                                {loading ? <Skeleton height={75} /> : (
                                    <>
                                        <h2>🚨 Open issues/pull requests</h2>
                                        <p>{formatNumber(repoData.open_issues_count)} issues</p>
                                    </>
                                )}
                            </div>

                        </div>
                        <div className={styles.grid}>
                            <div className={styles.card}>
                                {loading ? <Skeleton height={75} /> : (
                                    <>
                                        <h2>⌚ Github Created at</h2>
                                        <p>{formatDate(repoData.created_at)}</p>
                                    </>
                                )}
                            </div>
                            <div className={styles.card}>
                                {loading ? <Skeleton height={75} /> : (
                                    <>
                                        <h2>⬆️ Github Updated at</h2>
                                        <p>{formatDate(repoData.updated_at)}</p>
                                    </>
                                )}
                            </div>
                            <div className={styles.card}>
                                {loading ? <Skeleton height={75} /> : (
                                    <>
                                        <h2>➡️ Github Pushed at</h2>
                                        <p>{formatDate(repoData.pushed_at)}</p>
                                    </>
                                )}
                            </div>
                        </div>
                        <div className={styles.grid}>
                            <div className={styles.card}>
                                {loading ? <Skeleton height={75} /> : (
                                    <>
                                        <h2>⌚ NPM Created at</h2>
                                        <p>{formatDate(registryData.time.created)}</p>
                                    </>
                                )}
                            </div>
                            <div className={styles.card}>
                                {loading ? <Skeleton height={75} /> : (
                                    <>
                                        <h2>⬆️ NPM Modified at</h2>
                                        <p>{formatDate(registryData.time.modified)}</p>
                                    </>
                                )}
                            </div>
                        </div>
                        <div className={styles.grid}>
                                <div className={styles.card}>
                                    {loading ? <Skeleton height={75} /> : (
                                        <>
                                            <h2>👥 Contributors</h2>
                                            <p>{formatNumber(contributorsData.length)} contributors</p>
                                        </>
                                    )}
                                </div>
                                <div className={styles.card}>
                                    {loading ? <Skeleton height={75} /> : (
                                        <>
                                            <h2>⬇️ Downloads</h2>
                                            <p>{formatNumber(npmData.downloads.reduce((acc, curr) => acc + curr.downloads, 0))}+ downloads</p>
                                        </>
                                    )}
                                </div>
                        </div>
                    </SkeletonTheme>
                </div>
            </main>
    );
};

import Layout from '@theme/Layout';
import Heading from "@theme/Heading";

function StatisticsPage() {
    return (
        <Layout>
            <Statistics />
        </Layout>
    );
}

export default StatisticsPage;
