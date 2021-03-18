import React,{useState} from 'react';
import styles from '../../styles/Home.module.scss';

function Cat() {
    const [url, setUrl] = useState('')
    function fetch_Data(){
        fetch('http://api.thecatapi.com/v1/images/search').then(res => {
            if (res.ok){
                return res.json();
            }
            throw new Error ('Request Failed');
        },networkError => console.log(networkError.message)
        ).then(jsonRes => {
            setUrl(jsonRes[0].url)
        })
    }
    return (
        <div className={styles.cat__main}>
            <img src={url} className={styles.cat__img} />
                <button className={styles.cat__btn} onClick={fetch_Data}>
                    give me a cat
                </button>
        </div>
        
    )
}
export default Cat