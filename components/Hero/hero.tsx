"use client"

import Link from "next/link";
import styles from "./hero.module.scss";
import Image from "next/image";
import { useState } from "react";

const Hero = () => {
    const [backgroundLoaded, setBackgroundLoaded] = useState(false);
    const [cherryPieLoaded, setCherryPieLoaded] = useState(false);
    const [lemonMeringuePieLoaded, setLemonMeringuePieLoaded] = useState(false);
    const [logoLoaded, setLogoLoaded] = useState(false);

    return (
        <section className={styles.hero} data-images-loaded={backgroundLoaded && cherryPieLoaded && lemonMeringuePieLoaded && logoLoaded}>
            <div data-container="loading">
                <Image src="/images/favicon.png" alt="Loading" width={100} height={100} priority={true} />
            </div>
            <Image src="/images/marble.jpg" fill={true} alt="" priority={true} onLoad={() => setBackgroundLoaded(true)} sizes="(max-width: 500px) 100vw, 100vw"/>
            <div data-container="content">
                <div>
                    <Image src="/images/cherrypie.png" fill={true} alt="" priority={true} onLoad={() => setCherryPieLoaded(true)} sizes="(max-width: 500px) 100vw, 50vw" />
                    <header>
                        <Image src="/images/logo.png" fill={true} alt="Waitress" priority={true} onLoad={() => setLogoLoaded(true)} sizes="(max-width: 500px) 100vw, 100vw" />
                        <h1>10th anniversary tour</h1>
                    </header>
                    <Image src="/images/lemonmeringuepie.png" fill={true} alt="" priority={true} onLoad={() => setLemonMeringuePieLoaded(true)} sizes="(max-width: 500px) 100vw, 50vw" />
                </div>
                <Link href="#content">
                    <span>Visit the diner</span>
                </Link>
            </div>
        </section>
    )
}

export default Hero;