import styles from './Gallery.module.css';
import Image from 'next/image';

const Gallery = ({images}) => {
    return(
        <div className={styles.gallContainer}>
            {
                images.map((image)=>{
                    return(
                        <Image src={image.image} width={300} height={600} className={styles.gridItem} />
                    )
                })
            }
        </div>
    )
}

export default Gallery;