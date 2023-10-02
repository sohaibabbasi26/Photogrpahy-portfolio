import styles from './AboutSection.module.css'
import Navbar from './Navbar';

const AboutSection = () => {

    return (
        <div className={styles.main}>
            <Navbar />


            <div className={styles.container}>
                <h1>Photographer</h1>
                <h2>About me</h2>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                </p>
            </div>
        </div>
    )
}

export default AboutSection;