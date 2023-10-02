import styles from './Offers.module.css';

const Offers = ({data}) => {

    console.log('data in offers:', data)
    return(
        <div className={styles.Offer}>
            <div className={styles.priceContainer}>
                <h1>{data.category}</h1>
                <h2>$ <span>{data.price}</span> 99</h2>
                <p>MONTHLY</p>
            </div>

            <div className={styles.featuresList}>
                {
                    data.offers.map((feature) => {
                        return(
                            <p>{feature}</p>
                        )
                    })
                }

                <button>Purchase</button>

            </div>
        </div>
    )
}

export default Offers;