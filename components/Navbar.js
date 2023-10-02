import styles from './Navbar.module.css'

const Navbar = () => {

    return (
        <div className={styles.navbar}>
            <span>PhotoM4</span>

            <div className={styles.navsContainer}>
                <ul>
                    <li>Home</li>
                    <li>Live Demo</li>
                    <li>Live Demo Blocks</li>
                    <button>Buy Now</button>
                </ul>
            </div>
        </div>
    )
}

export default Navbar;