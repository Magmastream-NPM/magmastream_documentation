import useIsBrowser from '@docusaurus/useIsBrowser';
import React, { useEffect, useState } from 'react';
import Skeleton, {SkeletonTheme} from 'react-loading-skeleton'
import {useColorMode} from '@docusaurus/theme-common';
import 'react-loading-skeleton/dist/skeleton.css'

import styles from '../css/Statistics/Statistics.module.css';

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

    const { colorMode } = useColorMode();

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
                        color: "var(--ifm-text-color)"
                    }}>
                        Statistics
                    </Heading>
                    <SkeletonTheme baseColor={colorMode === "dark" ? "#0a0a0a" : "#f9f9f9"} highlightColor={colorMode === "dark" ? "#111112" : "#e8e8e8"}>
                        <div className={styles.gridStats}>
                            <div className={styles.card}>
                                {loading ? <Skeleton height={75} /> : (
                                    <>
                                        <h2 style={{ color: "var(--ifm-text-color)"}}>⭐ Stars</h2>
                                        <p style={{ color: "var(--ifm-heading-color)"}}>{formatNumber(repoData.stargazers_count)} stars</p>
                                    </>
                                )}
                            </div>
                            <div className={styles.card}>
                                {loading ? <Skeleton height={75} /> : (
                                    <>
                                        <h2 style={{ color: "var(--ifm-text-color)"}}>👀 Watchers</h2>
                                        <p style={{ color: "var(--ifm-heading-color)"}}>{formatNumber(repoData.subscribers_count)} watchers</p>
                                    </>
                                )}
                            </div>
                            <div className={styles.card}>
                                {loading ? <Skeleton height={75} /> : (
                                    <>
                                        <h2 style={{ color: "var(--ifm-text-color)"}}>🍴 Forks</h2>
                                        <p style={{ color: "var(--ifm-heading-color)"}}>{formatNumber(repoData.forks_count)} forks</p>
                                    </>
                                )}
                            </div>
                            <div className={styles.card}>
                                {loading ? <Skeleton height={75} /> : (
                                    <>
                                        <h2 style={{ color: "var(--ifm-text-color)"}}>🚨 Open issues/pull requests</h2>
                                        <p style={{ color: "var(--ifm-heading-color)"}}>{formatNumber(repoData.open_issues_count)} issues</p>
                                    </>
                                )}
                            </div>

                        </div>
                        <div className={styles.gridStats}>
                            <div className={styles.card}>
                                {loading ? <Skeleton height={75} /> : (
                                    <>
                                        <h2 style={{ color: "var(--ifm-text-color)"}}>⌚ Github Created at</h2>
                                        <p style={{ color: "var(--ifm-heading-color)"}}>{formatDate(repoData.created_at)}</p>
                                    </>
                                )}
                            </div>
                            <div className={styles.card}>
                                {loading ? <Skeleton height={75} /> : (
                                    <>
                                        <h2 style={{ color: "var(--ifm-text-color)"}}>⬆️ Github Updated at</h2>
                                        <p style={{ color: "var(--ifm-heading-color)"}}>{formatDate(repoData.updated_at)}</p>
                                    </>
                                )}
                            </div>
                            <div className={styles.card}>
                                {loading ? <Skeleton height={75} /> : (
                                    <>
                                        <h2 style={{ color: "var(--ifm-text-color)"}}>➡️ Github Pushed at</h2>
                                        <p style={{ color: "var(--ifm-heading-color)"}}>{formatDate(repoData.pushed_at)}</p>
                                    </>
                                )}
                            </div>
                        </div>
                        <div className={styles.gridStats}>
                            <div className={styles.card}>
                                {loading ? <Skeleton height={75} /> : (
                                    <>
                                        <h2 style={{ color: "var(--ifm-text-color)"}}>⌚ NPM Created at</h2>
                                        <p style={{ color: "var(--ifm-heading-color)"}}>{formatDate(registryData.time.created)}</p>
                                    </>
                                )}
                            </div>
                            <div className={styles.card}>
                                {loading ? <Skeleton height={75} /> : (
                                    <>
                                        <h2 style={{ color: "var(--ifm-text-color)"}}>⬆️ NPM Modified at</h2>
                                        <p style={{ color: "var(--ifm-heading-color)"}}>{formatDate(registryData.time.modified)}</p>
                                    </>
                                )}
                            </div>
                        </div>
                        <div className={styles.gridStats}>
                                <div className={styles.card}>
                                    {loading ? <Skeleton height={75} /> : (
                                        <>
                                            <h2 style={{ color: "var(--ifm-text-color)"}}>👥 Contributors</h2>
                                            <p style={{ color: "var(--ifm-heading-color)"}}>{formatNumber(contributorsData.length)} contributors</p>
                                        </>
                                    )}
                                </div>
                                <div className={styles.card}>
                                    {loading ? <Skeleton height={75} /> : (
                                        <>
                                            <h2 style={{ color: "var(--ifm-text-color)"}}>⬇️ Downloads</h2>
                                            <p style={{ color: "var(--ifm-heading-color)"}}>{formatNumber(npmData.downloads.reduce((acc, curr) => acc + curr.downloads, 0))}+ downloads</p>
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
