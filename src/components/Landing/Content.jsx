import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import clsx from "clsx";
import css from '../../css/Landing/Content.module.css';
import React from "react";
import Link from "@docusaurus/Link";

//The best music apps start here.

function Content() {

    const { siteConfig: {customFields} } = useDocusaurusContext();

    return (
        <>
            <div className={clsx(css.titleSection)}>
                {/* Release badge */}
                <Link
                    to="/docs/changes"
                    className={clsx(css.badgeButton)}
                >
                    <span className={clsx(css.badgeIcon)}>🎉</span>
                    New Release v2.9.1 →
                </Link>
                <h1 className={clsx(css.title)}>The best music apps start here...</h1>
                <p className={css.p}>Powering the next generation of Discord music bots</p>

                <img alt={"carousel with text"} src="https://readme-typing-svg.herokuapp.com?font=Fira+Code&duration=3000&pause=1000&color=00DDB3&center=true&vCenter=true&width=435&lines=Powerful+Audio+Streaming;Optimized+for+Lavalink+v4;Feature-Rich+API;Seamless+Integration" />
            </div>


            <div className={css.buttonsContainer}>
                <Link
                    className={clsx(css.gettingStartedButton)}
                    to="/docs/intro"
                >
                    Get Started <i className="fa-solid fa-chevron-right fa-sm" style={{ marginLeft: "2px"}}></i>
                </Link>
                <Link
                    className={clsx(css.githubButton)}
                    to={customFields.repo}
                >
                    <i className="fa-brands fa-github fa-lg" style={{ marginRight: "2px"}}/> Github
                </Link>
            </div>
        </>
    );
}

export default Content;