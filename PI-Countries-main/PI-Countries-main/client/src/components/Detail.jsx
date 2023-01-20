
import { useDispatch, useSelector } from 'react-redux';
import { getCountriesDetail } from '../redux/actions';
import { useEffect } from 'react';
import styles from './Detail.module.css'
import NavBar from './NavBar';
import { Link } from 'react-router-dom';

function Detail(props) {

  const dispatch = useDispatch()
  const detail = useSelector (state =>state.detail)

 
  useEffect(()=> {
    dispatch(getCountriesDetail(props.match.params.id))
  
   return () => {
    dispatch(getCountriesDetail())
    }
  },[dispatch, props.match.params.id])
 
  const act= detail.activities
 
    return (
      <div >   
        <NavBar />
        <div  className={styles.cards}>
        <div className={styles.card}> 
          <ul className={styles.list}>  
            <img className={styles.flag} src={detail.image} alt="flag" />
            <li>id: {detail.id}</li>
            <li>name: {detail.name}</li>
            <li>continent: {detail.continent}</li>
            <li>capital: {detail.capital}</li>
            <li>subregion: {detail.subregion}</li>
            <li>population: {detail.population}</li>
           </ul>
          </div>
          <div className={styles.card2}>
        <ul className={styles.list2}>
            <fieldset className={styles.fieldset}><legend><li>Activities:</li></legend> 
             {!act?.length ?  <Link to='/activities'> <button>Create activity</button>       
               </Link> : act.map((el) => {
               return (
                 <ul>
                 <li >
                  activity: {el.name},
                 dificulty: {el.dificulty},
                 season: {el.season},
                 duration: {el.duration}</li>     
           </ul>
             )})  
            } </fieldset>
             {console.log(detail.activities)}
          </ul>
        </div>
      </div>
      </div>
  );
}
  
   


export default Detail;