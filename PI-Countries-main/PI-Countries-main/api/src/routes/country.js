const { Router } = require('express');
const { Country, Activities } = require('../db');
const router = Router(); 
const axios = require('axios')
const { Op } = require('sequelize')



  router.get('/:id', async (req, res, next )=> {
    const { id } = req.params
    if(!id) res.status(400).send({msg:"missing id"})
    try{
      const countryId = await Country.findByPk(id, {include: [{model: Activities}]})
        res.status(201).send(countryId)
  }catch(error){
    next(error)
  } });



  router.get('/', async (req, res, next )=> {
    const { name } = req.query
    try{
      if(!name){
        const allCountries = await Country.findAll({
          include: { model: Activities,
          attributes: ['name', 'season', 'dificulty', 'duration'], 
          through: {
            attributes: [],
          },
          },
            order:[
              ['name', 'ASC']
            ]
         
        }); 
        res.status(200).send([...allCountries])
        // console.log(allCountries)
      } else {
    const countryName = await Country.findAll({
      where: {
      name: {
        [Op.iLike]: "%" + name + "%"
      },
    },
    include: [{model: Activities}]
  })
  res.send(countryName)
  }
}catch(error){
  next(error)
} 
});


module.exports = router;
