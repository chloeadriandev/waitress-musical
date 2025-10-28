import styles from "./contentrow.module.scss";
import { Article } from "@/lib/types";
import Image from "next/image";

const ContentRow = ({ content }: { content: Article }) => {
    return (
        <section className={styles.contentrow}>
            <div>
                <Image src={`/images/${content.photo}.jpg`} alt="" fill={true} />
            </div>
            <article>
                <h2>{content.title}</h2>
                <p>{content.body}</p>
                <div>
                    <p data-type="quote">"{content.review.quote}"</p>
                    <p data-type="source">{content.review.source}</p>
                </div>
            </article>
        </section>
    )
}

export default ContentRow;