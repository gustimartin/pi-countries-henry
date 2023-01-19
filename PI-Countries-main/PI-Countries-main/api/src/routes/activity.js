const { Router } = require('express');
const { Activities, Country} = require('../db');
const router = Router();
 

router.post('/', async (req, res, next ) => { 
    const {name, dificulty, duration, season,  countries} = req.body
  try{
  const newAct = await Activities.create({ name, dificulty, duration, season,})

  newAct.addCountries(countries) 
  const aux = Activities.findByPk(newAct.id, {include: [{ model: Country}]})
   res.status(200).send(aux) 
  }catch(error){
   next(error) 
  } });

  router.get('/', async (req, res, next) => { 
    const{ name }= req.query
   try{
    if(!name) {
   const allActivities = await Activities.findAll({include: Country,
  atributes:['name','continent','population' ],
  through: {
    attributes: [],
  }
  })
   console.log(allActivities)
   res.status(200).send(allActivities)
  }else{
    const activityName = await Activities.findAll({
      where: {
      name: {
        [Op.iLike]: "%" + name + "%"
      },
    },
    include: [{model: Country}]
  })
  res.send(activityName)
  }
   } catch(error) {
    next(error)
   }
  })

module.exports = router; 