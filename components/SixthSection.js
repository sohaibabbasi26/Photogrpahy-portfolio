import styles from './SixthSection.module.css'
import Offers from './Offers';

const SixthSection = () => {

    const data = [
        {
            id: 1,
            price: 10,
            offers: [
                'Engagement Session',
                '20 - 8x10 prints of your choosing',
                '16x20 gallery wrapped canvas!',
                 'High-resolution digital images',
                'Full rights to print'
        ],
            category: 'Basic'
        },
        {
            id: 2,
            price: 30,
            offers: [
                'Engagement Session',
                'Photo Album',
                '20 - 8x10 prints of your choosing',
                 '16x20 gallery wrapped canvas!',
                'High-resolution digital images',
                'Full rights to print',
                'Free retouching!'
            ],
            category: 'Premium'
        },
        {
            id: 3,
            price:20,
            offers: [
                'Engagement Session',
                'Photo Album',
                '20 - 8x10 prints of your choosing',
                '16x20 gallery wrapped canvas!',
                'Full rights to print',
                'Free retouching!',
            ],
            category: 'Standard'
        },
    ]

    return(
        <div className={styles.main}>
            {
                data.map((data)=>{
                    return(
                        <Offers data={data} />
                    )
                })
            }
        </div>
    )
}

export default SixthSection;