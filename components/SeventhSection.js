// "use client"

// import Photographer from './Photographers';
// import styles from './SeventhSection.module.css';
// import OwlCarousel from 'react-owl-carousel';

// // // install Swiper modules
// // SwiperCore.use([Pagination, Navigation]);

// const SeventhSection = () => {
//     const photographers = [
//         {
//             id: 1,
//             name: 'Steve Smith',
//             occupation: 'Photographer',
//             image: '/photographer-3'  // Placeholder image for testing purposes
//         },
//         {
//             id: 2,
//             name: 'Steve Smith',
//             occupation: 'Photographer',
//             image: '/photographer-3'
//         },
//         {
//             id: 3,
//             name: 'Steve Smith',
//             occupation: 'Photographer',
//             image: '/photographer-3'
//         }
//     ]

//     const [currentIdx, setCurrentIdx] = useState(0);

//     const goNext = () => {
//         if (currentIdx >= photographers.length - 1) {
//             setCurrentIdx(0);
//         } else {
//             setCurrentIdx(currentIdx + 1);
//         }
//     }

//     const goPrev = () => {
//         if (currentIdx <= 0) {
//             setCurrentIdx(photographers.length - 1);
//         } else {
//             setCurrentIdx(currentIdx - 1);
//         }
//     }

//     return (
//         <div className={styles.main}>
//             <OwlCarousel >
//                 {
//                     photographers.map((photographer) => (

//                             <Photographer photographer={photographer} />
//                     ))
//                 }
//             </OwlCarousel>
//         </div>
//     )
// }

// export default SeventhSection;

"use client"

import React, { useState } from 'react';
import Photographer from './Photographers';
import styles from './SeventhSection.module.css';
import IconButton from '@mui/material/IconButton';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';



const SeventhSection = () => {
    const photographers = [
        {
            id: 1,
            name: 'Steve Smith',
            occupation: 'Photographer',
            image: '/photographer-3.jpg'  // Placeholder image for testing purposes
        },
        {
            id: 2,
            name: 'Babar Azam',
            occupation: 'Photographer',
            image: '/photographer-1.jpg'
        },
        {
            id: 3,
            name: 'Elyse Perry',
            occupation: 'Photographer',
            image: '/photographer-2.jpg'
        }
    ]

    const [direction, setDirection] = useState(''); // Can be 'left' or 'right'

    const [currentIdx, setCurrentIdx] = useState(0);

    const goNext = () => {
        setDirection('right');
        if (currentIdx >= photographers.length - 1) {
            setCurrentIdx(0);
        } else {
            setCurrentIdx(currentIdx + 1);
        }
        setTimeout(() => setDirection(''), 500);
    }

    const goPrev = () => {
        setDirection('left');
        if (currentIdx <= 0) {
            setCurrentIdx(photographers.length - 1);
        } else {
            setCurrentIdx(currentIdx - 1);
        }
        setTimeout(() => setDirection(''), 500);
    }

    return (
        <div className={styles.main}>
            <div className={styles.carouselContainer}>
                {/* <button className={styles.carouselButton} onClick={goPrev}>Prev</button> */}
                <IconButton className={styles.carouselButton} onClick={goPrev} style={{ backgroundColor: 'transparent', boxShadow: 'none' }}>
                    <ArrowBackIosIcon />
                </IconButton>

                <div className={`${styles.carouselSlide} ${direction === 'left' ? styles.slideLeft : direction === 'right' ? styles.slideRight : ''}`}>
                    <Photographer photographer={photographers[currentIdx]} />
                </div>

                {/* <button className={styles.carouselButton} onClick={goNext}>Next</button> */}
                <IconButton className={styles.carouselButton} onClick={goNext} style={{ backgroundColor: 'transparent', boxShadow: 'none' }}>
                    <ArrowForwardIosIcon />
                </IconButton>
            </div>
        </div>
    )
}

export default SeventhSection;
