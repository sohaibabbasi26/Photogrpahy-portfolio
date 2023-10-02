import Gallery from "./Gallery";
import styles from "./TenthSection.module.css";

const TenthSection = () => {

    const images = [
        {
            id:1,
            image:'/nature-1.jpg'
        },
        {
            id:2,
            image:'/nature-2.jpg'
        },
        {
            id:3,
            image:'/nature-3.jpg'
        },
        {
            id:4,
            image:'/nature-2.jpg'
        },
        {
            id:5,
            image:'/nature-1.jpg'
        },
        {
            id:6,
            image:'/nature-2.jpg'
        },
        {
            id:7,
            image:'/nature-3.jpg'
        },
        {
            id:8,
            image:'/nature-2.jpg'
        },
        {
            id:9,
            image:'/nature-1.jpg'
        },
        {
            id:10,
            image:'/nature-2.jpg'
        },
        {
            id:11,
            image:'/nature-3.jpg'
        },
        {
            id:12,
            image:'/nature-2.jpg'
        },
        {
            id:13,
            image:'/nature-1.jpg'
        },
        {
            id:14,
            image:'/nature-2.jpg'
        },
        {
            id:15,
            image:'/nature-3.jpg'
        },
        {
            id:16,
            image:'/nature-2.jpg'
        },
    ]

    return(
        <div className={styles.main}>
            <button> FOLLOW US </button>
            <Gallery images={images} />

            <span>© Copyright 2023 Mobrise - All Rights Reserved</span>
        </div>
    )
}

export default TenthSection;