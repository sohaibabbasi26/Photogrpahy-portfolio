import styles from './Card.module.css';
import Image from 'next/image';

const Card = ({data}) => {

    console.log("data:",data);

    return(
        <div className={styles.Card}>
            <Image src={data.url} width={150} height={150}/>
            <h1>{data.title}</h1>
            <p>{data.description}</p>

            <button>READ MORE</button>
        </div>
    )
}

export default Card