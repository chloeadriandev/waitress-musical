import styles from "./page.module.scss";
import { articles } from "@/lib/articles";
import Hero from "@/components/Hero/hero";
import ContentRow from "@/components/ContentRow/contentrow";

export default function Home() {
  return (
    <main className={styles.main}>
      <Hero />
      <div>
        {articles.map(article => <ContentRow content={article} key={article.photo} />)}
      </div>
    </main>
  );
}
