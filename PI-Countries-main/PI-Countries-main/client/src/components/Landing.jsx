import React from 'react';
import {Link} from 'react-router-dom'
import styles from './Landing.module.css'

function Landing() {
    return (
        <div className={styles.landing}>
            <h1 className={styles.text} >Welcome to Henry´s individual countries proyect</h1>
            <Link to='/home'>
                <button className={styles.button}>Welcome</button>
            </Link>
        </div>
    );
} 

export default Landing;