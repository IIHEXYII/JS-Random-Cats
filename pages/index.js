// import Card from './src/components/Card';
import Layout from './src/components/layout/Layout'
import styles from '../styles/Home.module.scss';
import Link from "next/link";

export default function Home() {
  return (
    <Layout>
      <div  className={styles.container}>
            <div className={styles.main}>
            <h1 className={styles.title}>Cute Cats 🐱</h1>
            <Link href="/results">
              <img className={styles.cat__hero} src="https://www.thewowstyle.com/wp-content/uploads/2015/04/6891272-cats.jpg"/>
            </Link>
            </div>
        </div>
    </Layout>

  )
}
