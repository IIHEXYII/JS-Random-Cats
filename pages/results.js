// import Card from './src/components/Card';
import Cat from './src/Cats'
// import Header from './src/components/layout/Header'
import Layout from './src/components/layout/Layout'
import styles from '../styles/Home.module.scss';

export default function Home() {
  return (
    <>
      <Layout>
      <div  className={styles.container}>
            <div className={styles.main}>
            <h1 className={styles.title}>Random Cats 🐱</h1>
            <Cat />
            </div>
        </div>
     </Layout>
  
</>

  )
}
{/* <div className={styles.cat}>
       <Cat />
</div> */}