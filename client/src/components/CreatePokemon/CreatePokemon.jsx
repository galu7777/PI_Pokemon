import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { createPokemons, getAllTypes } from "../../redux/actions";

function CreatePokemon() {
   
  const [newPokemon, setNewPokemon] = useState({
    name: "",
    image: "",
    life: 0,
    attack: 0,
    defense: 0,
    speed: 0,
    height: 0,
    weight: 0,
    types: [],
  });

   const handleChangeName = (e) => {
    setNewPokemon({ ...newPokemon, name: e.target.value });
   }

   const handleChangeImage = (e) => {
    setNewPokemon({ ...newPokemon, image: e.target.value });
   }

   const handleChangeLife = (e) => {
    setNewPokemon({ ...newPokemon, life: e.target.value });
   }

   const handleChangeAttack = (e) => {
    setNewPokemon({ ...newPokemon, attack: e.target.value });
   }

   const handleChangeDefense = (e) => {
    setNewPokemon({ ...newPokemon, defense: e.target.value });
   }

   const handleChangeSpeed = (e) => {
    setNewPokemon({ ...newPokemon, speed: e.target.value });
   }

   const handleChangeHeight = (e) => {
    setNewPokemon({ ...newPokemon, height: e.target.value });
   }
   
   const handleChangeWeight = (e) => {
    setNewPokemon({ ...newPokemon, weight: e.target.value });
   }

   const handleChangeTypes = (e) => {
    const typeId = e.target.value;
    const typeName = e.target.name;

    if(e.target.checked) {
      setNewPokemon({ ...newPokemon, types: [...newPokemon.types, { id: typeId, name: typeName }] });
    } else {
      setNewPokemon({...newPokemon.types.filter((type) => type.id !== typeId)})
    }
   }

   const submitHandler = () => {
    const pokemonToCreate = {
      ...newPokemon,
      name: newPokemon.name.trim(),
      types: newPokemon.types.map((type) => Number(type.id))
    }
    dispatch(createPokemons(pokemonToCreate))
    setNewPokemon({
      name: "",
      image: "",
      life: 0,
      attack: 0,
      defense: 0,
      speed: 0,
      height: 0,
      weight: 0,
      types: [],
    })
    navigate('/')
   }

   const dispatch = useDispatch();
   const navigate = useNavigate();

    // Get all Types
    const allTypes = useSelector((state) => state.types);
    useEffect(() => {
        !allTypes.length && dispatch(getAllTypes());
    }, [dispatch]);
    
  return (
    <div>
        <h1 style={{ color: 'white' }}>Create Pokemon</h1>
        <form onSubmit={submitHandler}>
            <label htmlFor="name">Name: </label>
            <input 
              type="text"
              id="name"
              name="name"
              placeholder="Pikachu"
              value={newPokemon.name}
              onChange={handleChangeName}
              autoFocus 
            />

            <label htmlFor="life">life: </label>
            <input 
              type="text"
              id="name"
              name="name"
              value={newPokemon.life}
              onChange={handleChangeLife}
              autoFocus 
             />
            
            <label htmlFor="image">image: </label>
            <input 
              type="text"
              id="name"
              name="name"
              value={newPokemon.image}
              onChange={handleChangeImage}
              autoFocus 
            />

            <label htmlFor="attack">attack: </label>
            <input 
              type="text"
              id="name"
              name="name"
              value={newPokemon.attack}
              onChange={handleChangeAttack}
              autoFocus 
            />

            <label htmlFor="defense">defense: </label>
            <input 
              type="text"
              id="name"
              name="name"
              value={newPokemon.defense}
              onChange={handleChangeDefense}
              autoFocus
            />

            <label htmlFor="speed">Speed </label>
            <input 
              type="text"
              id="name"
              name="name"
              value={newPokemon.speed}
              onChange={handleChangeSpeed}
              autoFocus
             />

            <label htmlFor="height">Height: </label>
            <input 
              type="text"
              id="name"
              name="name"
              value={newPokemon.height}
              onChange={handleChangeHeight}
              autoFocus
            />

            <label htmlFor="weight">Weight: </label>
            <input 
              type="text"
              id="name"
              name="name"
              value={newPokemon.weight}
              onChange={handleChangeWeight}
              autoFocus
            />

            {
              allTypes.length ? (
                  <div>
                    {
                      allTypes.length &&
                        allTypes.map((type) => (
                          <div key={type.id}>
                            <label>
                              <input 
                                type="checkbox"
                                id={type.id}
                                value={type.id}
                                name={type.name}
                                onChange={handleChangeTypes}
                              />
                            </label>
                          </div> 
                        ))
                    }
                  </div>
              ) : (
                <div>
                  <span>Error</span>
                </div>
              )
            }
            <button>
              create
            </button>
        </form>
    </div>
  );
}

export default CreatePokemon;
