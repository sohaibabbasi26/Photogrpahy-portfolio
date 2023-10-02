import styles from './FourthSection.module.css';
import Image from 'next/image';


const images = [
    {
        id:1,
        url:'/nature-1.jpg'
    },
    {
        id:2,
        url:'/nature-2.jpg'
    },
    {
        id:3,
        url:'/nature-3.jpg'
    },
    {
        id:4,
        url:'/nature-4.jpg'
    },
    {
        id:5,
        url:'/srow-1.jpg'
    },
    {
        id:6,
        url:'/srow-2.jpg'
    },
    {
        id:7,
        url:'/srow-3.jpg'
    },
    {
        id:8,
        url:'/nature-camera.jpg'
    },
]

const FourthSection = () => {

    return (
        <div className={styles.main}>
            <div className={styles.content}>
                <h2>PORTFOLIO</h2>
                <h1>Showcase</h1>

                <span>All   /   Awesome    /    Responsive    /    Creative    /    Animated</span>
            </div>

            <div className={styles.gallery}>

                <div className={styles.gridContainer}>
                {
                    images.map((image)=> {
                        return(
                            <Image src={image.url} width={300} height={300}  />
                        )
                    })
                }
                </div>
            </div>
        </div>
    )
}

export default FourthSection;