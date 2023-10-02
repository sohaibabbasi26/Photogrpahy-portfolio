import styles from './ThirdSection.module.css';

const ThirdSection = () => {

    return (
        <div className={styles.main}>
            <div className={styles.imageContainer}>
                <img src='/nature-camera.jpg' />
            </div>

            <div className={styles.contentContainer}>

                <div className={styles.content}>
                    <h1><b>My Story</b></h1>
                    <h3>Creative Photography</h3>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.
                    </p>

                    <button>View more</button>
                </div>
            </div>
        </div>
    )
}

export default ThirdSection;