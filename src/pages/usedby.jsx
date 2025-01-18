import useIsBrowser from '@docusaurus/useIsBrowser';
import React, { useEffect, useState } from 'react';

import styles from './Statistics.module.css';
import indexStyles from './index.module.css'

const Usedby = () => {

    const usedBy = [
        {
            name: "Lava Jukebox",
            icon: "https://cdn.discordapp.com/app-icons/887651843742793779/ca2f7807a0fff70a99d259d12b3fe7b1.png",
            link: "https://discord.com/api/oauth2/authorize?client_id=887651843742793779&permissions=-1&redirect_uri=https%3A%2F%2Fdiscord.gg%2F4ZaXbbYSTZ&response_type=code&scope=guilds.join%20bot%20applications.commands",
            creator: "Abel Purnwasy"
        },
        {
            name: "Stal",
            icon: "https://cdn.discordapp.com/app-icons/923938180263182356/4ab0694b0cc3aa26f0b88b1de0101c3e.png",
            link: "https://discord.com/oauth2/authorize?client_id=923938180263182356&scope=bot%20applications.commands&permissions=27648861246",
            creator: "memte"
        },
        {
            name: "Lunio",
            icon: "https://cdn.discordapp.com/app-icons/945030475779551415/c1ee9a12c0c110b5fa7e97f45aaaccb3.png",
            link: "https://discord.com/oauth2/authorize?client_id=945030475779551415&permissions=61991952&scope=bot+applications.commands",
            creator: "vexi"
        },
        {
            name: "JukeDisc",
            icon: "https://cdn.discordapp.com/app-icons/1109751797549105176/38ad87871d9ff78bcddd34cb0842b6af.png",
            link: "https://discord.com/oauth2/authorize?client_id=1109751797549105176&permissions=968552214080&scope=bot+applications.commands",
            creator: "Theo"
        },
        {
            name: "Cool Music",
            icon: "https://cdn.discordapp.com/app-icons/923529398425096193/c263b5ad17c0f3149ae03a5edc07f410.png",
            link: "https://discord.com/oauth2/authorize?client_id=923529398425096193&permissions=12888394808&redirect_uri=https%3A%2F%2Fdiscord.gg%2Fcool-music-support-925619107460698202&response_type=code&scope=bot%20identify%20applications.commands",
            creator: "Itz Random"
        },
        {
            name: "Soundy",
            icon: "https://cdn.discordapp.com/app-icons/1168385371294420992/8c1f04453b27e177ce77fcfee34ca9ed.png",
            link: "https://discord.com/oauth2/authorize?client_id=1168385371294420992&scope=bot&permissions=298818334009",
            creator: "iaMJ"
        },
        {
            name: "Bot muzyczny",
            icon: "https://cdn.discordapp.com/app-icons/840892428613320726/13bc9a272a34d857ab0e8c32350686b9.png",
            link: "https://discord.com/oauth2/authorize?client_id=840892428613320726&permissions=8&scope=bot%20applications.commands",
            creator: "kwelo"
        },
        {
            name: "HamBot",
            icon: "https://cdn.discordapp.com/app-icons/1049314312776335390/2dec2f1b47473ac6c70ef58a8a61013b.png",
            link: "https://discord.com/oauth2/authorize?client_id=1049314312776335390",
            creator: "yanishamburger"
        },
    ]

    return (
            <main className={styles.main}>
                <div className="container">
                    <h1 className={"fire-header_nye2"} style={{
                        textAlign: 'center',
                        fontSize: '3rem',
                        textTransform: 'none',
                        marginTop: '2rem',
                        marginBottom: '5rem'
                    }}>Used by</h1>
                    <div className={styles.grid}>
                        {usedBy && usedBy.map((usedByItem) => (
                            <>
                                <div className={styles.card}>
                                    <img src={usedByItem.icon} style={{borderRadius: '50%', height: '40%', marginBottom: '1rem' }} alt="icon" />
                                    <h2>{usedByItem.name}</h2>
                                    <p className={styles.p}>~ {usedByItem.creator}</p>
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
import {useColorMode} from "@docusaurus/theme-common";
import Link from "@docusaurus/Link";

function UsedbyPage() {
    return (
        <Layout>
            <Usedby />
        </Layout>
    );
}

export default UsedbyPage;
