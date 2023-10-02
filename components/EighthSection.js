import styles from './EighthSection.module.css';
import ImageSect from './ImageSect';

const EighthSection = () => {


    const images = [
        {
            id: 1,
            url: '/portrait-1.jpg',
        },
        {
            id: 2,
            url: '/portrait-2.jpg',
        },
        {
            id: 3,
            url: '/portrait-3.jpg',
        },
        {
            id: 4,
            url: '/portrait-4.jpg',
        },
    ]

    return(
        <div className={styles.main}>
            <ImageSect images={images} />
        </div>
    )
}

export default EighthSection;