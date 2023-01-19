import React from 'react'; 
import { useEffect } from 'react';
import { useState } from 'react';
import {postActivity } from '../redux/actions'
import {useDispatch, useSelector } from 'react-redux'
import styles from './Activities.module.css'
import NavBar from './NavBar';
import { getCountries } from '../redux/actions';
import { useHistory } from 'react-router-dom';

function Activities() {  
  const dispatch = useDispatch()
  const countries = useSelector (state =>state.countries)
  const history = useHistory()
  useEffect(() => {
    dispatch(getCountries())
}, [dispatch])
 
const[input, setInput] = useState({
    name:'',
    dificulty:'',
    season:'',
    duration:'',
    countries:[] 
  })
   
  const [errors, setErrors] = useState({})

  const handleSubmit = (event) => {
event.preventDefault() 
if(!Object.keys(errors).length) {
  event.preventDefault()
 dispatch(postActivity(input))
 console.log(input)
  setInput({
    name:'',
    dificulty:'',
    season:'',
    duration:'',
    countries:[]
  })
history.push('/activities/all')
}else{
  alert('more information needed')
}

 } 

  const validate = (input) => {
    const errors = {}
    if(!input.name.length) errors.name = 'name required'
    if(!input.dificulty.length) errors.dificulty= 'choose dificulty'
    if(!input.season.length ) errors.season= 'choose season'
    if(!input.duration.length) errors.duration= 'duration required'
    return errors
  }
  useEffect(()=> {
    setErrors(validate(input))
  },[input])

  const handleChange = (event) => { 
    setInput({
      ...input,
      [event.target.name]: event.target.value
    }) }

     const handleCheck2  = (event) => {
       if(event.target.checked){
       setInput({
         ...input,
         season: event.target.value,
      })}
}
const handleCheck3  = (event) => {
  if(event.target.checked){
  setInput({
    ...input,
    duration: event.target.value,
 })}
}
const handleCheck = (event) => {
  if(event.target.checked){
  setInput({
    ...input,
    dificulty: event.target.value
 })}
}
      const handleSelect = (event) => {
        setInput({
          ...input,
          countries:[...input.countries, event.target.value]
        })
      }
    const handleDelete = (el) => {
      setInput ({ 
        ...input,
        countries: input.countries.filter(co => co !== el)
      })
    } 
    

    return ( 
      <div >
        <NavBar />
        
        <div >
          <form  onSubmit={(event) =>handleSubmit(event)}>
            <fieldset className={styles.container}>  
               <legend> 
                <h3 className={styles.activity}> Add Activity</h3>
</legend>  
        <div>
           <label className={styles.label} htmlFor="name">name:
           <input className={styles.input} type="text" name='name' placeholder='Activity name' value={input.name} onChange={(event) => handleChange(event)} /></label>
            <p>{errors.name && errors.name}</p> 
        </div>
        <div>
            <label className={styles.label}  htmlFor="dificulty">dificulty: </label>
           <label> <input 
            type="radio" 
            name='dificulty'
             value='1' 
           onChange={(event) => handleCheck(event)}/>1</label>      
           <label> <input 
            type="radio" 
            name='dificulty'
             value='2' 
             onChange={(event) => handleCheck(event)}/>2</label>
             
           <label> <input 
            type="radio" 
            name='dificulty'
             value='3'
             onChange={(event) => handleCheck(event)} />3</label>
             
           <label> <input 
            type="radio" 
            name='dificulty'
             value='4'
             onChange={(event) => handleCheck(event)} />4</label>
             
           <label> <input 
            type="radio" 
            name='dificulty'
             value='5' 
             onChange={(event) => handleCheck(event)}/>5</label>
               <p>{errors.dificulty && errors.dificulty}</p> 
           
        </div>
        <div>
            <label className={styles.label} htmlFor="season">season:</label >
            <label> <input 
            type="checkbox" 
            name='season'
             value='summer' 
             onChange={(event) => handleCheck2(event)}/>summer</label>
             
           <label> <input 
            type="checkbox" 
            name='season'
             value='autumn'
             onChange={(event) => handleCheck2(event)} />autumn</label>
             
           <label> <input 
            type="checkbox" 
            name='season'
             value='winter'
             onChange={(event) => handleCheck2(event)} />winter</label>
              
           <label> <input 
            type="checkbox" 
            name='season'
             value='spring'
             onChange={(event) => handleCheck2(event)} />spring</label> 
               <p>{errors.season && errors.season}</p> 
           
        </div>
        <div>
    <div>
    <label className={styles.label} htmlFor="duration">duration:</label>
      <label for="30min">
        <input type="radio"  name="duration" value='30min' onChange={(event) => handleCheck3(event)}/>
      30min</label>
  <label for="1hs-2hs">
      <input type="radio"  name="duration" value='1hr-2hrs' onChange={(event) => handleCheck3(event)}/>
      1hr-2hrs</label>
   <label for="duration">
      <input type="radio"name="duration" value='2hrs-4hrs' onChange={(event) => handleCheck3(event)}/>
     2hs-4hs</label> 
   <label for="duration">
      <input type="radio" name="duration" value='4hrs+' onChange={(event) => handleCheck3(event)}/>
      4hrs+</label> 
      <p>{errors.duration && errors.duration}</p> 
    </div>
    </div>
        <div>
            <label className={styles.label} htmlFor="countryId">Country: 
            <select className={styles.select}   onChange={(event) => handleSelect( event)}>
                <option value="" hidden>country</option> 
                {countries.map((el)=>(
                  <option value={el.id} name='countries' key={el.id}>{el.name}</option>
                ))}
              </select>
            </label>  
        </div>
        <button className={styles.button} type='submit'>Add</button> </fieldset>
        </form>  
          
        </div >     
          {input.countries.map(el => 
            <div className={styles.del}>
              <p>{el}</p>
          
              <button className={styles.x} onClick={(() => handleDelete(el))} >delete</button>
              </div> )}
      </div>
    );
}

export default Activities;