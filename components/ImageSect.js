import styles from './ImageSect.module.css';
import Image from 'next/image';

const ImageSect = ({images}) => {
    return(
        <>
            {
                images.map((image) => {
                    return (
                        <div className={styles.imagePortrait} >
                            <Image src={image.url} width={200} height={200} />
                        </div>
                    )
                })

            }
        </>
    )
}

export default ImageSect;