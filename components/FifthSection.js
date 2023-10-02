import styles from './FifthSection.module.css';
import MiniSect from './MiniSect';

const FifthSection = () => {

    const images = [
        {
            id: 1,
            url: '/portrait-1.jpg',
            title: 'Showcases',
            description:`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`
        },
        {
            id: 2,
            url: '/portrait-2.jpg',
            title: 'Coverage',
            description:`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`
        },
        {
            id: 3,
            url: '/portrait-3.jpg',
            title: 'Photography',
            description:`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`
        },
        {
            id: 4,
            url: '/portrait-4.jpg',
            title: 'Occasions',
            description:`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`
        },
    ]


    return (

        <div className={styles.main}>
            <MiniSect images = {images} />
        </div>
    )
}

export default FifthSection;