"use client"

import styles from "./contentrow.module.scss";
import { Article, TourDate } from "@/lib/types";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect, useRef } from "react";

const ContentRow = ({ content }: { content: Article | TourDate }) => {
    const [rowVisible, setRowVisible] = useState(false);
    const rowRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.target === rowRef.current && entry.isIntersecting) {
                        setRowVisible(true);
                    }
                });
            },
            { threshold: 0.2 }
        );

        if (rowRef.current) {
            observer.observe(rowRef.current);
        }

        return () => observer.disconnect();
    }, []);

    return (
        <section ref={rowRef} className={styles.contentrow} data-visible={rowVisible}>
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