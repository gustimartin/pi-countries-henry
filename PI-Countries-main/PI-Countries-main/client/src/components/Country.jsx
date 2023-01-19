import React from "react"
import { Link } from "react-router-dom"
import styles from './Country.module.css'



const Country = ({name, image, continent, capital, population, id}) => {

  
    return(
     
       <ul className={styles.countryCard}>
         <li className={styles.contained}> <Link to={`/detail/${id}`}>
                <h2 className={styles.countryText}>{name}</h2>
              </Link>
            <img className={styles.countryImage} src={image} alt="flag" />
            <h2 className={styles.countryText}>{continent}</h2>
           </li>
        </ul>
    )
}


export default Country