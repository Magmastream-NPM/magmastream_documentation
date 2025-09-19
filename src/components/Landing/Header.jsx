import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import clsx from "clsx";
import css from "../../css/Landing/Header.module.css";
import React from "react";

function HomepageHeader() {
    const { siteConfig } = useDocusaurusContext();

    return (
        <header className={clsx('hero hero--primary', css.heroBanner)}>
            <div className="container">
                <img src="/img/logo.ico" height="250" alt={"Logo"} draggable={false}/>
                <h1 className={clsx(css.fireHeader)}>{siteConfig.title}</h1>
            </div>
        </header>
    );
}

export default HomepageHeader;