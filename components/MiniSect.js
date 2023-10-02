import styles from './MiniSect.module.css';
import Image from 'next/image';

const MiniSect = ({ images }) => {



    return (
        <>
            {
                images.map((image) => {
                    return (
                        <div className={styles.imagePortrait} >
                            <Image src={image.url} width={200} height={200} />

                            <div className={styles.content}>
                                <h2>{image.title}</h2>

                                <p>
                                    {image.description}
                                </p>

                                <button>View More</button>
                            </div>
                        </div>
                    )
                })

            }
        </>
    )
}

export default MiniSect;