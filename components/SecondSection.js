import styles from './SecondSection.module.css';
import Card from './Card'

const SecondSection = () => {

    const data = [
        {
            id: 1,
            url: '/camera.png',
            title: 'Photo Sessions',
            description:`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.`
        },
        {
            id: 2,
            url: '/bulb.png',
            title: 'Occasions',
            description:`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.`
        },
        {
            id: 3,
            url: '/wifi.png',
            title: 'Coverage',
            description:`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.`
        },
    ]


    return(
        <div className={styles.main}>
            <div className={styles.content}>
            {data.map((element) => {
                return(
                    <Card data={element} />
                )
            })}
            </div>
        </div>
    )
}

export default SecondSection