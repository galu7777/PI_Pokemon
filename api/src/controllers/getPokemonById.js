require('dotenv').config();
const axios = require("axios");
const { URL, URL_IMAGE } = process.env;
const { Pokemon, Type } = require('../db');


const getPokemon = async (req, res) => {
  try {
    /// respuesta de la Api
    const data = await axios(URL)
    const resApi = data.data.results;

    const pokemonsApi = resApi.map(({name, url}) => {
      const urlParts = url.split('/');
      const id = urlParts[urlParts.length - 2];
      const image = `${URL_IMAGE}/${id}.png`;
      
      return { id, name, image }
    })
    
    // Respuesta de la DB
    const allPokemons = await Pokemon.findAll({
      include: Type
    })

    const pokemonsDB = allPokemons.map(({ id, name, image }) => {
      return { id, name, image }
    })

    //Destructuring de los 2 array
    const allPoke = [...pokemonsDB, ...pokemonsApi ]
    return res.status(200).json(allPoke)
    
  } catch (error) {
    res.status(404).send({ message: error.message });
  }
};

const getPokemonById = async (req, res) => {
  const { id } = req.params;

  try {
   
    if(id.length < 5){
      const data = await axios(`${URL}/${id}`)
      const { name, stats, height, weight, types } = data.data;
      if (name) {
        const statsHp = stats.find((stat) => stat.stat.name === "hp");
        const statsAttack = stats.find((stat) => stat.stat.name === "attack");
        const statsDefense = stats.find((stat) => stat.stat.name === "defense");
        const statsSpeed = stats.find((stat) => stat.stat.name === "speed");
        const type = types.map((type) => ({
          name: type.type.name,
          url: type.type.url,
        }));

        const hp = statsHp.base_stat;
        const attack = statsAttack.base_stat;
        const defense = statsDefense.base_stat;
        const speed = statsSpeed.base_stat;
        const image = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`;
        const typeName = type.map((type) => ({
          name: type.name,
          typeNumber: Number(type.url.match(/\/(\d+)\/$/)[1])
        }));

        const pokemon = {
          id,
          name,
          image,
          life: hp,
          attack: attack,
          defense: defense,
          speed: speed,
          height,
          weight,
          types: typeName
        };
        return res.status(200).json(pokemon);
      }
    } else {
      const pokemonDB = await Pokemon.findAll({
        where: {
          id: { [Op.like]: `${id}%` }
        },
        include: Type
      })
     
      return res.status(200).json(pokemonDB)
    }   
      
  } catch (error) {
    res.status(404).send({ message: error.message });
  }
};



module.exports = {
  getPokemonById,
  getPokemon,
};
