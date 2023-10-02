import styles from './Photographers.module.css';
import Image from 'next/image';

const Photographer = ({photographer}) => {

    console.log('my photographer data:',photographer)
    return (

        <div className={styles.main}>
            <div className={styles.imageDiv}>
                <Image src={photographer.image} width={200} height={50} alt={photographer.name}/>
            </div>
            <h1>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h1>

            <span>{photographer.name}</span>
            <span>{photographer.occupation}</span>
        </div>
    )
}

export default Photographer;