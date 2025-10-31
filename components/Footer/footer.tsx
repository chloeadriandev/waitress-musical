import styles from "./footer.module.scss";
import Link from "next/link";

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <span data-type="text">Made with</span>
            <span data-type="heart">♥︎</span>
            <span data-type="text">by</span>
            <Link href="https://chloeadrian.dev">Chloé Adrian</Link>
            <span data-type="text">in 2025</span>
        </footer>
    )
}

export default Footer;