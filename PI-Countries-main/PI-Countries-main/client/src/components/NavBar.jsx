import React from "react"
import { Link, useHistory } from "react-router-dom";
import styles from './NavBar.module.css'
import { useEffect} from "react";
import { getCountries } from "../redux/actions";
import { useDispatch, useSelector } from "react-redux";




function NavBar() {
 const dispatch=useDispatch()
const countries = useSelector (state =>state.countries)
const history= useHistory()
useEffect(()=> {
  dispatch(getCountries()
  )},[dispatch])

  const handleOnClick = (e) => {
   e.preventDefault()
   dispatch(getCountries(countries))
   history.push('/home')
  }

    return (
      <div className={styles.header}>
        <div className={styles.logo} >
          <h1>Henry Countries</h1>
        </div>
     
       <nav className={styles.nav}>
          <Link to="/Home">
            <button className={styles.button} onClick={(e) => {handleOnClick(e)}}>Home</button>
            </Link>
          <Link to="/activities"><button className={styles.button}>Activities</button></Link>
          <Link to="/activities/all"><button className={styles.button}>All Activities</button></Link>
       </nav>
       
      </div>
    );
}

export default NavBar; 