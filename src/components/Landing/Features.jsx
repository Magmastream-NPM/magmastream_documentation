import clsx from "clsx";
import css from "../../css/Landing/Features.module.css";
import React from "react";

function Features() {
    return (
        <>
            <section className={clsx(css.featuresSection)}>
                <div className={clsx(css.container)}>
                    <h2 className={clsx(css.sectionTitle)}>Features that blows mind</h2>
                    <p className={clsx(css.sectionSubtitle)}>
                        Discover the features that make this module <b>stand out</b> from the rest.
                    </p>


                    <div className={clsx(css.cardsGrid)}>
                        {/* Simple API */}
                        <div className={clsx(css.card)}>
                            <div className={clsx(css.cardHeader)}>
                                <span className={clsx(css.bar, css.barPink)}></span>
                            </div>
                            <h3 className={clsx(css.cardTitle)}>
                                🎯 Simple API
                            </h3>
                            <p className={clsx(css.cardText)}>
                                Intuitive and developer-friendly API for seamless integration.
                            </p>
                        </div>


                        {/* High Performance */}
                        <div className={clsx(css.card)}>
                            <div className={clsx(css.cardHeader)}>
                                <span className={clsx(css.bar, css.barOrange)}></span>
                            </div>
                            <h3 className={clsx(css.cardTitle)}>
                                ⚡ High Performance
                            </h3>
                            <p className={clsx(css.cardText)}>
                                Optimized for low-latency, reliable audio streaming at scale.
                            </p>
                        </div>


                        {/* new librares and nodelink v2 */}
                        <div className={clsx(css.doubleCard)}>
                            <div className={clsx(css.card, css.center)}>
                                <h3 className={clsx(css.cardSmallerTitle)}>
                                    We now support more popular libraries, bringing you even greater compatibility.
                                </h3>
                            </div>
                            <div className={clsx(css.card, css.center)}>
                                <h3 className={clsx(css.cardSmallerTitle)}>
                                    We are open to new solutions — now also with NodeLink v2 support.
                                </h3>
                            </div>
                        </div>

                        {/* Rich features */}
                        <div className={clsx(css.card)}>
                            <div className={clsx(css.cardHeader)}>
                                <span className={clsx(css.bar, css.barSilver)}></span>
                            </div>
                            <h3 className={clsx(css.cardTitle)}>
                                🛠️ Rich Features
                            </h3>
                            <p className={clsx(css.cardText)}>
                                Packed with powerful tools for managing queues, playlists, and playback.
                            </p>
                        </div>

                        {/*  Inactive players and backup nodes */}
                        <div className={clsx(css.doubleCard)}>
                            <div className={clsx(css.card, css.center)}>
                                <h3 className={clsx(css.cardSmallerTitle)}>
                                    You no longer have to worry about inactive players - module will clean them up itself.
                                </h3>
                            </div>
                            <div className={clsx(css.card, css.center)}>
                                <h3 className={clsx(css.cardSmallerTitle)}>
                                    Support for backup nodes to take care of the reliability of your app.
                                </h3>
                            </div>
                        </div>

                        {/* Plugin support */}
                        <div className={clsx(css.card)}>
                            <div className={clsx(css.cardHeader)}>
                                <span className={clsx(css.bar, css.barDark)}></span>
                            </div>
                            <h3 className={clsx(css.cardTitle)}>
                                🔌 Plugin Support
                            </h3>
                            <p className={clsx(css.cardText)}>
                                Extend functionality effortlessly with modular plugin architecture.
                            </p>
                        </div>

                        {/* Advanced Analytics */}
                        <div className={clsx(css.card)}>
                            <div className={clsx(css.cardHeader)}>
                                <span className={clsx(css.bar, css.barBlue)}></span>
                            </div>
                            <h3 className={clsx(css.cardTitle)}>
                                📊 Advanced Analytics
                            </h3>
                            <p className={clsx(css.cardText)}>
                                Real-time insights and metrics to monitor usage and performance.
                            </p>
                        </div>

                        {/* Audio filters */}
                        <div className={clsx(css.card)}>
                            <div className={clsx(css.cardHeader)}>
                                <span className={clsx(css.bar, css.barGray)}></span>
                            </div>
                            <h3 className={clsx(css.cardTitle)}>
                                🎚️ Audio Filters
                            </h3>
                            <p className={clsx(css.cardText)}>
                                Customizable effects and filters to enhance the listening experience.
                            </p>
                        </div>

                        {/* Lyrics & saving players */}
                        <div className={clsx(css.doubleCard)}>
                            <div className={clsx(css.card, css.center)}>
                                <h3 className={clsx(css.cardTitle)}>
                                    Live streaming of song lyrics, together with LavaLyrics
                                </h3>
                            </div>
                            <div className={clsx(css.card, css.center)}>
                                <h3 className={clsx(css.cardTitle)}>
                                    Easily save and resume queues using Memory, JSON, or Redis.
                                </h3>
                            </div>
                        </div>

                    </div>
                </div>
            </section>
        </>

    );
}

export default Features;