import React from 'react';
import styles from './Page.module.css'


function Page({countriePerPage, countries, page}) {
    
   const pageNum = []
   
   for( let i=1; i<= Math.ceil(countries/countriePerPage);i++){
    pageNum.push(i)
   }


    return ( 
          <nav className={styles.nav}>
            <ul className={styles.ul} >
                { pageNum && pageNum.map(number =>(
                    <li className={styles.li} key={number.id}>                  
                          <a onClick={() => page(number)}>{number}</a>
                    </li>
               ))}
            </ul>
          </nav>
       
    );
}

export default Page;