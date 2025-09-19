import React, { useEffect, useState } from 'react';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';

import styles from '../css/Statistics/Statistics.module.css';

const Usedby = () => {

    const {
        siteConfig: {customFields},
    } = useDocusaurusContext();

    return (
            <main className={styles.main}>
                <div className="container">
                    <h1 style={{
                        textAlign: 'center',
                        marginTop: '2rem',
                        marginBottom: '5rem',
                        color: "var(--ifm-text-color)"
                    }}>
                        Used by
                    </h1>
                    <div className={styles.grid}>
                        {customFields.usedBy && customFields.usedBy.map((usedByItem) => (
                            <>
                                <div className={styles.card}>
                                    <img src={usedByItem.icon} style={{borderRadius: '50%', height: '40%', marginBottom: '1rem' }} alt="icon" />
                                    <h2 style={{ color: "var(--ifm-text-color)"}}>{usedByItem.name}</h2>
                                    <p style={{ color: "var(--ifm-heading-color)"}}><a target={"_blank"} href={`https://discord.com/users/${usedByItem.creatorId}`}>~ {usedByItem.creator} <i className="fa-solid fa-arrow-up-right-from-square fa-xs"/><br/> ({usedByItem.creatorId})</a></p>
                                    <Link
                                        href={usedByItem.link}
                                        className="button button--secondary button--sm"
                                        style={{
                                            margin: '0 1rem',
                                            color: "#fff",
                                            backgroundColor: "#ff6a00",
                                            borderColor: "#ff6a00"
                                        }}
                                    >
                                        Invite <i className="fa-solid fa-arrow-up-right-from-square fa-xs"/>
                                    </Link>
                                </div>
                            </>
                        ))}
                    </div>
                </div>
            </main>
    );
};

import Layout from '@theme/Layout';
import Link from "@docusaurus/Link";

function UsedbyPage() {
    return (
        <Layout>
            <Usedby />
        </Layout>
    );
}

export default UsedbyPage;
