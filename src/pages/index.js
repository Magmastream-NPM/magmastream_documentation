import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';

import Heading from '@theme/Heading';
import styles from './index.module.css';
import Tabs from "@theme/Tabs";
import TabItem from "@theme/TabItem";
import React, {useState} from "react";
import Tippy from "@tippyjs/react";
import {ClipboardIcon} from "@heroicons/react/24/outline";

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
          <img
            src="https://i.imgur.com/piWkPK6.png"
            height="250"
          />
          <h1 className="fire-header_nye2">
              {siteConfig.title}
          </h1>
      </div>
    </header>
  );
}

export default function Home() {
    const {siteConfig} = useDocusaurusContext();

  return (
    <Layout
      title={`🔥 ${siteConfig.title}`}
    >
      <HomepageHeader />
      <main>
          <div className={"container"}>
              <p className={styles.p}>
                  Embark on an Epic Musical Journey: Explore the Boundless Potential of Magmastream! Immerse Yourself in Seamless Streaming Across Deezer, Spotify, SoundCloud, and Beyond.
              </p>
              <div className={styles.buttons}>
                  <Link
                      className="button button--secondary button--lg"
                      style={{
                          margin: '0 1rem',
                          color: "#fff",
                          backgroundColor: "#ff6a00",
                          borderColor: "#ff6a00"
                      }}
                      to="/docs/intro">
                      Get Started
                  </Link>
                  <Link
                      className="button button--secondary button--lg"
                      style={{
                          margin: '0 1rem',
                          color: "#fff",
                          backgroundColor: "transparent",
                          borderColor: "transparent"
                      }}
                      to="/docs/intro">
                      Github <i className="fa-solid fa-arrow-right-from-bracket fa-xs"></i>
                  </Link>
              </div>
              <HomepageFeatures siteConfig={siteConfig} />
          </div>
      </main>
    </Layout>
  );
}