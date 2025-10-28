import styles from "./hero.module.scss";
import Image from "next/image";

const Hero = () => {
    return (
        <section className={styles.hero}>
            <Image src="/images/marble.jpg" fill={true} alt="" priority={true} />
            <div>
                <header>
                    <Image src="/images/logo.png" fill={true} alt="Waitress" priority={true} />
                    <h1>10th anniversary tour</h1>
                </header>
                <div>
                    <Image src="/images/pie.png" fill={true} alt="" priority={true} />
                    <p>Everyone deserves a slice of happiness</p>
                </div>
                <button>
                    <div data-breakpoint="desktop">
                        <span>Come inside</span>
                        <svg width="79" height="43" viewBox="0 0 79 43" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M2.5 2.5L39.5 40.5L76.5 2.5" stroke="white" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </div>
                    <div data-breakpoint="mobile">
                        <span>Tap to come inside</span>
                    </div>
                </button>
            </div>
        </section>
    )
}

export default Hero;