import Link from "next/link";
import styles from "./hero.module.scss";
import Image from "next/image";

const Hero = () => {
    return (
        <section className={styles.hero}>
            <Image src="/images/marble.jpg" fill={true} alt="" priority={true} />
            <div>
                <div>
                    <Image src="/images/cherrypie.png" fill={true} alt="" priority={true} />
                    <header>
                        <Image src="/images/logo.png" fill={true} alt="Waitress" priority={true} />
                        <h1>10th anniversary tour</h1>
                    </header>
                    <Image src="/images/lemonmeringuepie.png" fill={true} alt="" priority={true} />
                </div>
                <Link href="#content">
                    <span>Visit the diner</span>
                </Link>
            </div>
        </section>
    )
}

export default Hero;