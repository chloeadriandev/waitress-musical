import styles from "./contentrow.module.scss";
import { Article, TourDate } from "@/lib/types";
import Image from "next/image";
import Link from "next/link";

const ContentRow = ({ content }: { content: Article | TourDate }) => {
    return (
        <section className={styles.contentrow}>
            <div>
                <Image src={`/images/${content.photo}.jpg`} alt="" fill={true} />
            </div>
            {content.type === "article" ?
                <article>
                    <h2>{content.title}</h2>
                    <p>{content.body}</p>
                    <div>
                        <p data-type="quote">"{content.review.quote}"</p>
                        <p data-type="source">{content.review.source}</p>
                    </div>
                </article>
                :
                <article>
                    <h2>{content.city}</h2>
                    <p>
                        <span>{content.theatre}</span>
                        <span>{content.dates}</span>
                        <span>{content.carrie ? "Starring Carrie Hope Fletcher as Jenna" : "Casting of Jenna to be announced"}</span>
                    </p>
                    <Link href={content.link}>
                        <span>Book now</span>
                    </Link>
                </article>
            }
        </section>
    )
}

export default ContentRow;