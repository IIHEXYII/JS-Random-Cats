import Link from "next/link";
import styles from '../../../../styles/Home.module.scss';


export default function Layout({ children }) {

	return (
		<>
			<nav className={styles.nav}>
                <ul>
                    <il className={styles.nav__item} ><Link href="/">Home |</Link></il>
                    <il className={styles.nav__item} ><Link href="/results">Results |</Link></il>
                    <il className={styles.nav__item} ><Link href="/about">About</Link></il>

                </ul>
			</nav>
			<div className="container">{children}</div>
		</>
	);
}