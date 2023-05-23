require('dotenv').config();
const axios = require('axios');
const { Op } = require('sequelize');
const { URL, URL_IMAGE } = process.env;
const { Pokemon, Type } = require('../db');


const getPokemonByName = async (req, res) => {
    const {name} = req.query;
    try {
      const data = await axios(`${URL}?limit=1009`);
      const resApi = data.data.results;

      const nameMin = name.toLowerCase();
      const pokeFilterOut = resApi.filter((poke) => poke.name.toLowerCase().startsWith(nameMin))
      const pokeFound = await Promise.all(pokeFilterOut.map(async({name, url}) => {
        const urlParts = url.split('/');
        const id = urlParts[urlParts.length - 2];
        const image = `${URL_IMAGE}/${id}.png`;

        const pokemonDetails = await axios.get(`${URL}/${id}`);
        const { types } = pokemonDetails.data;
        const TP = types.map(({ type }) => ({
          name: type.name,
          typeNumber: Number(type.url.match(/\/(\d+)\/$/)[1])
        }));

        return { id, name, image, types: TP};
      }))
      if(pokeFilterOut.length > 0) return res.status(200).json(pokeFound)
      else {
        const pokemonDB = await Pokemon.findAll({
          where: {
            name: { [Op.like]: `${nameMin}%` }
          },
          include: Type
        })
       
        if(pokemonDB.length > 0 ) return res.status(200).json(pokemonDB);
        else return res.status(404).send({ message: 'there was an error pokemon not found' });
      }
            
    } catch(error) {
      res.status(404).send({ message: error.message });
    }
  };


  module.exports = {
    getPokemonByName
  };