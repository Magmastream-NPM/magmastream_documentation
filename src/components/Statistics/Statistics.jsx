import clsx from "clsx";
import css from "../../css/Statistics/Statistics.module.css";
import React, { useCallback, useEffect, useMemo, useState } from "react";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import {useColorMode} from '@docusaurus/theme-common';
import useIsBrowser from '@docusaurus/useIsBrowser';

function Statistics() {
    const { colorMode } = useColorMode();

    const START_SECONDS = 30 * 60; // 30 minut
    const REFRESH_COOLDOWN = 120 * 60; // 2 godziny
    const LS_KEY_COOLDOWN = "stats_refresh_last_ts";
    const LS_KEY_COUNTDOWN_START = "stats_countdown_start_ts";
    const LS_KEY_DATA = "stats_cached_data"; // nowe: cache danych

    const isBrowser = useIsBrowser();

    const [repoData, setRepoData] = useState(null);
    const [docsRepoData, setDocsRepoData] = useState(null);
    const [registryData, setRegistryData] = useState(null);
    const [contributorsData, setContributorsData] = useState(null);
    const [docsContributorsData, setDocsContributorsData] = useState(null);
    const [npmData, setNpmData] = useState(null);

    const [loading, setLoading] = useState(true);
    const [timeLeft, setTimeLeft] = useState(START_SECONDS);
    const [hoverRefresh, setHoverRefresh] = useState(false);
    const [cooldown, setCooldown] = useState(0);

    const pad2 = (n) => n.toString().padStart(2, "0");
    const formatMMSS = (timeSec) => {
        const m = Math.floor(timeSec / 60);
        const s = timeSec % 60;
        return `${pad2(m)}:${pad2(s)}`;
    };
    const formatHMS = (totalSec) => {
        const h = Math.floor(totalSec / 3600);
        const m = Math.floor((totalSec % 3600) / 60);
        const s = totalSec % 60;
        return h > 0 ? `${h}:${pad2(m)}:${pad2(s)}` : `${pad2(m)}:${pad2(s)}`;
    };
    const formatNum = (n) => {
        if (n == null || isNaN(n)) return "—";
        if (n >= 1_000_000) return `${(n / 1_000_000).toFixed(2)}M`;
        if (n >= 1_000) return `${(n / 1_000).toFixed(2)}K`;
        return `${n}`;
    };

    const setCountdownStartNow = () => {
        try {
            localStorage.setItem(LS_KEY_COUNTDOWN_START, String(Date.now()));
        } catch {}
    };

    const getCountdownElapsedSec = () => {
        try {
            const tsStr = localStorage.getItem(LS_KEY_COUNTDOWN_START);
            const ts = tsStr ? parseInt(tsStr, 10) : NaN;
            if (isNaN(ts)) return null;
            const elapsed = Math.floor((Date.now() - ts) / 1000);
            return Math.max(0, elapsed);
        } catch {
            return null;
        }
    };

    const saveDataToLocalStorage = (data) => {
        try {
            localStorage.setItem(LS_KEY_DATA, JSON.stringify({ data, ts: Date.now() }));
        } catch {}
    };

    const loadDataFromLocalStorage = () => {
        try {
            const str = localStorage.getItem(LS_KEY_DATA);
            if (!str) return null;
            return JSON.parse(str).data;
        } catch {
            return null;
        }
    };

    const fetchData = useCallback(async () => {
        if (!isBrowser) return;
        setLoading(true);
        try {
            const repoResponse = await fetch(
                "https://api.github.com/repos/Magmastream-NPM/magmastream"
            );
            const docsRepoResponse = await fetch(
                "https://api.github.com/repos/Magmastream-NPM/magmastream_documentation"
            );
            const docsRepoJson = await docsRepoResponse.json();
            const repoJson = await repoResponse.json();

            const contributorsResponse = await fetch(
                "https://api.github.com/repos/Magmastream-NPM/magmastream/contributors"
            );
            const docsContributorsResponse = await fetch(
                "https://api.github.com/repos/Magmastream-NPM/magmastream_documentation/contributors"
            );
            const contributorsJson = await contributorsResponse.json();
            const docsContributorsJson = await docsContributorsResponse.json();

            const registryResponse = await fetch(
                "https://registry.npmjs.org/magmastream"
            );
            const registryJson = await registryResponse.json();

            const npmResponse = await fetch(
                "https://api.npmjs.org/downloads/range/2020-01-01:2100-12-31/magmastream"
            );
            const npmJson = await npmResponse.json();

            setRepoData(repoJson);
            setDocsRepoData(docsRepoJson);
            setContributorsData(contributorsJson);
            setDocsContributorsData(docsContributorsJson);
            setRegistryData(registryJson);
            setNpmData(npmJson);

            saveDataToLocalStorage({
                repoJson,
                docsRepoJson,
                contributorsJson,
                docsContributorsJson,
                registryJson,
                npmJson,
            });
        } catch (e) {
            console.error("Błąd podczas pobierania danych:", e);
        } finally {
            setTimeout(() => setLoading(false), 400);
        }
    }, [isBrowser]);

    useEffect(() => {
        if (!isBrowser) return;

        try {
            const tsStr = localStorage.getItem(LS_KEY_COOLDOWN);
            const lastTs = tsStr ? parseInt(tsStr, 10) : NaN;
            if (!isNaN(lastTs)) {
                const remainSec = Math.max(
                    0,
                    Math.ceil((lastTs + REFRESH_COOLDOWN * 1000 - Date.now()) / 1000)
                );
                setCooldown(remainSec);
            }
        } catch {}

        const elapsed = getCountdownElapsedSec();
        const cached = loadDataFromLocalStorage();

        if (elapsed == null) {
            setTimeLeft(START_SECONDS);
            setCountdownStartNow();
            if (cached) {
                setRepoData(cached.repoJson);
                setDocsRepoData(cached.docsRepoJson);
                setContributorsData(cached.contributorsJson);
                setDocsContributorsData(cached.docsContributorsJson);
                setRegistryData(cached.registryJson);
                setNpmData(cached.npmJson);
                setLoading(false);
            } else {
                fetchData();
            }
        } else if (elapsed >= START_SECONDS) {
            setTimeLeft(START_SECONDS);
            setCountdownStartNow();
            fetchData();
        } else {
            setTimeLeft(START_SECONDS - elapsed);
            if (cached) {
                setRepoData(cached.repoJson);
                setDocsRepoData(cached.docsRepoJson);
                setContributorsData(cached.contributorsJson);
                setDocsContributorsData(cached.docsContributorsJson);
                setRegistryData(cached.registryJson);
                setNpmData(cached.npmJson);
                setLoading(false);
            } else {
                fetchData();
            }
        }
    }, [fetchData, isBrowser]);

    useEffect(() => {
        if (!isBrowser) return;
        const interval = setInterval(() => {
            setTimeLeft((prev) => {
                if (prev <= 1) {
                    setCountdownStartNow();
                    fetchData();
                    return START_SECONDS;
                }
                return prev - 1;
            });
            setCooldown((c) => (c > 0 ? c - 1 : 0));
        }, 1000);
        return () => clearInterval(interval);
    }, [fetchData, isBrowser]);

    const handleRefresh = async () => {
        if (cooldown > 0) return;
        setTimeLeft(START_SECONDS);
        setCooldown(REFRESH_COOLDOWN);
        try {
            localStorage.setItem(LS_KEY_COOLDOWN, String(Date.now()));
        } catch {}
        setCountdownStartNow();
        fetchData();
    };

    const last7DaysDownloads = useMemo(() => {
        if (!npmData?.downloads) return null;
        const list = npmData.downloads;
        if (!list.length) return null;
        const last7 = list.slice(-7);
        const total = last7.reduce((acc, day) => acc + (day.downloads ?? 0), 0);
        return total;
    }, [npmData]);

    const stats = useMemo(() => {
        if (loading) return null;
        const stars = repoData?.stargazers_count;
        const contribCount = Array.isArray(contributorsData)
            ? contributorsData.length
            : contributorsData?.length;

        const getLastPublishedVersion = (registryData) => {
            if (!registryData?.time) return null;
            const entries = Object.entries(registryData.time)
                .filter(([key]) => key !== "created" && key !== "modified");
            entries.sort((a, b) => new Date(b[1]) - new Date(a[1]));
            return entries[0][0];
        };

        return [
            {
                value: formatNum(stars),
                label: "GitHub Stars",
                desc: "Number of stars in our repository.",
            },
            {
                value: formatNum(contribCount),
                label: "Contributors",
                desc: "Contributors to Magmastream.",
            },
            {
                value: formatNum(npmData.downloads.reduce((acc, curr) => acc + curr.downloads, 0)),
                label: "Downloads (All-time)",
                desc: "Total downloads of the package over the last 30 days.",
            },
            {
                value: getLastPublishedVersion(registryData) || "—",
                label: "Last Version",
                desc: "Latest version published in npm.",
            },
        ];
    }, [loading, repoData, docsRepoData, contributorsData, registryData, last7DaysDownloads, npmData]);

    const mmss = formatMMSS(timeLeft);
    const cooldownText =
        cooldown > 0
            ? `Refresh available for ${formatHMS(cooldown)}`
            : "Click to refresh (1 click/2 hours)";

    return (
        <SkeletonTheme
            baseColor={colorMode === "dark" ? "#0a0a0a" : "#f9f9f9"}
            highlightColor={colorMode === "dark" ? "#111112" : "#e8e8e8"}
        >
            <section className={clsx(css.statsSection)} id={"statistics"}>
                <div className={clsx(css.container)}>
                    <h2 className={clsx(css.sectionTitle)}>Statistics</h2>
                    <p className={clsx(css.sectionSubtitle)}>
                        Are you curious about the numbers? Check it out.
                    </p>

                    <div className={clsx(css.cardContainer)}>
                        {/* TOP CARD */}
                        <div className={clsx(css.card, css.top)}>
                            <header className={clsx(css.cardHead)}>
                                <div>
                                    <h2 className={clsx(css.title)}>How are we progressing?</h2>

                                </div>

                                <div
                                    className={clsx(css.cta)}
                                    style={{ display: "flex", gap: 12, alignItems: "center" }}
                                >
                                    <button className={clsx(css.btn)} style={{ cursor: "default" }}>
                                        <span className={clsx(css.dot)} /> {mmss}
                                    </button>
                                    <div
                                        onMouseEnter={() => setHoverRefresh(true)}
                                        onMouseLeave={() => setHoverRefresh(false)}
                                        className={clsx(css.toolTipWrapper)}
                                    >
                                        <button
                                            className={clsx(css.btn)}
                                            onClick={handleRefresh}
                                            disabled={cooldown > 0}
                                            aria-disabled={cooldown > 0}
                                        >
                                            <i className="fa-solid fa-arrows-rotate" style={{ marginRight: 8 }} />
                                            Refresh
                                        </button>

                                        {hoverRefresh && (
                                            <div className={clsx(css.toolTip)} role="tooltip">
                                                {cooldownText}
                                                <span aria-hidden className={clsx(css.toolTipArrow)} />
                                            </div>
                                        )}
                                    </div>
                                </div>
                            </header>

                            <div className={clsx(css.stats)}>
                                {loading
                                    ? Array.from({ length: 4 }).map((_, i) => (
                                        <div key={i} className={clsx(css.statBlock)}>
                                            <Skeleton height={75} />
                                            <div style={{ marginTop: 8 }}>
                                                <Skeleton width={120} />
                                            </div>
                                            <div style={{ marginTop: 8 }}>
                                                <Skeleton count={2} />
                                            </div>
                                        </div>
                                    ))
                                    : stats.map((s) => (
                                        <StatBlock
                                            key={s.label}
                                            value={s.value}
                                            label={s.label}
                                            desc={s.desc}
                                        />
                                    ))}
                            </div>
                        </div>

                        {/* BOTTOM CARD */}
                        <div className={clsx(css.card, css.bottom)}>
                            <div className={clsx(css.bottomGrid)}>
                                <div className={clsx(css.intro)}>
                                    <h3 className={clsx(css.title)}>Let’s build something great.</h3>
                                    <p className={clsx(css.sub)}>
                                        there will be a description here, but at the moment I have no idea what to write o.o
                                    </p>
                                </div>
                                <div className={clsx(css.tileGroupLeft)}>
                                    {loading ? (
                                        <>
                                            <MiniStatSkeleton />
                                            <MiniStatSkeleton />
                                        </>
                                    ) : (
                                        <>
                                            <MiniStat
                                                icon={<i className="fa-brands fa-github fa-sm" />}
                                                value={timeAgo(docsRepoData?.pushed_at)}
                                                label="Docs latest update"
                                            />
                                            <MiniStat
                                                icon={<i className="fa-solid fa-users fa-xs" />}
                                                value={
                                                    Array.isArray(docsContributorsData) && docsContributorsData.length
                                                        ? [...docsContributorsData].sort((a, b) => b.contributions - a.contributions)[0].login
                                                        : "—"
                                                }
                                                label="The best docs contributor"
                                            />
                                        </>
                                    )}
                                </div>
                                <div className={clsx(css.tileGroupRightTop)}>
                                    {loading ? (
                                        <>
                                            <MiniStatSkeleton />
                                            <MiniStatSkeleton />
                                        </>
                                    ) : (
                                        <>
                                            <MiniStat
                                                icon={<i className="fa-brands fa-github fa-sm" />}
                                                value={timeAgo(repoData?.pushed_at)}
                                                label="Module latest update"
                                            />
                                            <MiniStat
                                                icon={<i className="fa-brands fa-npm fa-sm" />}
                                                value={timeAgo(registryData?.time?.modified)}
                                                label="Module last publish"
                                            />
                                        </>
                                    )}
                                </div>
                                <div className={clsx(css.tileGroupRightBottom)}>
                                    {loading ? (
                                        <>
                                            <MiniStatSkeleton />
                                            <MiniStatSkeleton />
                                        </>
                                    ) : (
                                        <>
                                            <MiniStat
                                                icon={<i className="fa-solid fa-download fa-sm" />}
                                                value={formatNum(last7DaysDownloads)}
                                                label="Downloads (last 7 days)"
                                            />
                                            <MiniStat
                                                icon={<i className="fa-solid fa-users fa-xs" />}
                                                value={
                                                    Array.isArray(contributorsData) && contributorsData.length
                                                        ? [...contributorsData].sort((a, b) => b.contributions - a.contributions)[0].login
                                                        : "—"
                                                }
                                                label="The best module contributor"
                                            />
                                        </>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </SkeletonTheme>
    );
}

function StatBlock({ value, label, desc }) {
    return (
        <div className={clsx(css.statBlock)}>
            <div className={clsx(css.value)}>{value}</div>
            <div className={clsx(css.label)}>{label}</div>
            <p className={clsx(css.desc)}>{desc}</p>
        </div>
    );
}

function MiniStat({ icon, value, label }) {
    return (
        <div className={clsx(css.mini)}>
            <span className={clsx(css.miniIcon)}>{icon}</span>
            <div className={clsx(css.miniValue)}>{value}</div>
            <div className={clsx(css.miniLabel)}>{label}</div>
        </div>
    );
}

function MiniStatSkeleton() {
    return (
        <div className={clsx(css.mini)}>
      <span className={clsx(css.miniIcon)}>
        <Skeleton circle width={16} height={16} />
      </span>
            <div className={clsx(css.miniValue)}>
                <Skeleton width={80} />
            </div>
            <div className={clsx(css.miniLabel)}>
                <Skeleton width={100} />
            </div>
        </div>
    );
}

function timeAgo(dateString) {
    if (!dateString) return "—";
    const diffMs = Date.now() - new Date(dateString).getTime();
    const diffSec = Math.floor(diffMs / 1000);

    const minutes = Math.floor(diffSec / 60);
    const hours = Math.floor(diffSec / 3600);
    const days = Math.floor(diffSec / 86400);

    if (days > 0) return `${days} day${days > 1 ? "s" : ""} ago`;
    if (hours > 0) return `${hours} hour${hours > 1 ? "s" : ""} ago`;
    if (minutes > 0) return `${minutes} min${minutes > 1 ? "s" : ""} ago`;
    return "just now";
}

export default Statistics;
