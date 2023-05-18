const { Pokemon } = require('../db');

const postPokemon = async (req, res) => {
    const { name, image, id_Type, life, attack, defense, speed, height, weight, } = req.body;

    try {
        if(!name) {
            throw new Error('The name of the Pokemon is required')
        }

        if(!image) {
            throw new Error('The url of the Pokemon image is required')
        }

        if(name.length > 15) {
            throw new Error('Pokemon name must not be longer than 15 characters')
        }

        if(id_Type.length > 2){
            throw new Error('The type id must not be more than 2')
        }

        if(
            life < 1 ||
            attack < 1 ||
            defense < 1 ||
            speed < 1 ||
            height < 1 ||
            weight < 1
        ) {
            throw new Error("Pokemon's attributes must be greater than or equal to 1")
        }

        //Create Pokemon
        const pokemon = {
            name, image, life, attack, defense, speed, height, weight,
        }

        
        const pokemonCreated = await Pokemon.create(pokemon);
        // console.log("n", pokemonCreated.__proto__);
        // console.log(pokemon.__proto__);
        await pokemonCreated.addTypes(id_Type)
        

        // const pokemons = await Pokemon.findAll();
        return res.status(200).json(pokemonCreated)
    } catch (error) {
        return res.status(404).send({message: error.message})
    }
}


module.exports = {
    postPokemon
}