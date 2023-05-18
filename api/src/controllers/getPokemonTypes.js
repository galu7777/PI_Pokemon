require('dotenv').config();
const axios = require("axios");
const { URL } = process.env;
const { Type } = require("../db");


const getPokemonTypes = async (req, res) => {
  try {
    const type = await Type.findAll()
    if(type.length === 0){
      const data = await axios(URL)
      const Types = data.data.results.map((type) => {
        return { name: type.name }
      })
      const newType = await Type.bulkCreate(Types);
      return res.status(200).json(newType);
    }
    return res.status(200).json(type)
    
  } catch (error) {
    return res.status(404).send({ message: error.message });
  }
};



module.exports = {
    getPokemonTypes
};
