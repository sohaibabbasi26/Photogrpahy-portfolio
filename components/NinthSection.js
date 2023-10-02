import styles from './NinthSection.module.css';
import Form from './Form';

const NinthSection = () => {
    return (
        <div className={styles.main}>
            <div className={styles.formContainer}>
                <div className={styles.container}>
                    <Form />
                </div>
            </div>
            <div className={styles.VstUsContainer}>
                <div className={styles.container}>
                    <h1>Visit us</h1>
                    <div className={styles.mainContent}>

                        <h3>WE'D LOVE TO HEAR WHAT YOU THINK</h3>

                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat</p>

                    </div>

                    <div className={styles.AddressDetails}>

                        <h3>OUR ADDRESS</h3>
                        <span>Company Name</span>
                        <span>Address 1, Address 2</span>
                        <span>Street Name, Zip</span>
                        <span>City, Country</span>

                        <span>Tel: +123 456 7890</span>
                    </div>
                </div>

            </div>
        </div>

    )

}

export default NinthSection;