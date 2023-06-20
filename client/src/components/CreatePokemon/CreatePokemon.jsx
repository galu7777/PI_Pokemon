import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { createPokemons, getAllPokemons, getAllTypes } from '../../redux/actions';
import './CreatePokemon.css';

function CreatePokemon() {
  const [newPokemon, setNewPokemon] = useState({
    name: '',
    image: '',
    life: null,
    attack: null,
    defense: null,
    speed: null,
    height: null,
    weight: null,
    id_Type: [],
  });
  const [error, setError] = useState('');

  const handleChangeName = (e) => {
    setNewPokemon({ ...newPokemon, name: e.target.value });
  };

  const handleChangeImage = (e) => {
    setNewPokemon({ ...newPokemon, image: e.target.value });
  };

  const handleChangeLife = (e) => {
    setNewPokemon({ ...newPokemon, life: e.target.value });
  };

  const handleChangeAttack = (e) => {
    setNewPokemon({ ...newPokemon, attack: e.target.value });
  };

  const handleChangeDefense = (e) => {
    setNewPokemon({ ...newPokemon, defense: e.target.value });
  };

  const handleChangeSpeed = (e) => {
    setNewPokemon({ ...newPokemon, speed: e.target.value });
  };

  const handleChangeHeight = (e) => {
    setNewPokemon({ ...newPokemon, height: e.target.value });
  };

  const handleChangeWeight = (e) => {
    setNewPokemon({ ...newPokemon, weight: e.target.value });
  };

  const handleChangeTypes = (e) => {
    const selectedType = parseInt(e.target.value);
    const isChecked = e.target.checked;

    if (isChecked) {
      if (newPokemon.id_Type.length < 2) {
        setNewPokemon((prevState) => ({
          ...prevState,
          id_Type: [...prevState.id_Type, selectedType],
        }));
        setError('');
      } else {
        e.target.checked = false;
        setError('Solo se pueden seleccionar 2 tipos máximo');
      }
    } else {
      setNewPokemon((prevState) => ({
        ...prevState,
        id_Type: prevState.id_Type.filter((type) => type !== selectedType),
      }));
      setError('');
    }
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    // Validar el campo 'numbers'
    dispatch(createPokemons(newPokemon));
    navigate('/home');
  };


  const validateName = () => {
    // const name = dispatch(getAllPokemons)

    // const namePoke = newPokemon.name;

    // const nameValidate = namePoke !==
  }

  const dispatch = useDispatch();
  const navigate = useNavigate();

  // Get all Types
  const allTypes = useSelector((state) => state.types);
  useEffect(() => {
    !allTypes.length && dispatch(getAllTypes());
  }, [dispatch]);

  return (
    <div className="create-pokemon-container">
      <div className='cnt'>
        <h1 style={{ color: 'white' }}>Create <span style={{ color: 'red' }}>Pokemon</span></h1>
        <form onSubmit={submitHandler} className="create-pokemon-form">
          
          <div className='ctn-input'>
            
            
              <div className='input-container'>
                <label htmlFor="name" className='top-label'>Name: </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Pikachu"
                  value={newPokemon.name}
                  onChange={handleChangeName}
                  className="input"
                  autoFocus
                />
              </div>
            
            <div className='input-container'>
              <label htmlFor="image" className="top-label">Image: </label>
              <input
                type="text"
                id="image"
                name="image"
                value={newPokemon.image}
                onChange={handleChangeImage}
                className="input"
                autoFocus
              />
            </div>

            <div className='input-container'>
              <label htmlFor="life" className="top-label">Life: </label>
              <input
                type="number"
                id="life"
                name="life"
                value={newPokemon.life}
                onChange={handleChangeLife}
                className="input"
                autoFocus
              />
            </div>

            <div className='input-container'>
              <label htmlFor="attack" className="top-label">Attack: </label>
              <input
                type="number"
                id="attack"
                name="attack"
                value={newPokemon.attack}
                onChange={handleChangeAttack}
                className="input"
                autoFocus
              />
            </div>

            <div className='input-container'>
              <label htmlFor="defense" className="top-label">Defense: </label>
              <input
                type="number"
                id="defense"
                name="defense"
                value={newPokemon.defense}
                onChange={handleChangeDefense}
                className="input"
                autoFocus
              />
            </div>

            <div className='input-container'>
              <label htmlFor="speed" className="top-label">Speed </label>
              <input
                type="number"
                id="speed"
                name="speed"
                value={newPokemon.speed}
                onChange={handleChangeSpeed}
                autoFocus
                className="input"
              />
            </div>

            <div className='input-container'>
              <label htmlFor="height" className="top-label">Height: </label>
              <input
                type="number"
                id="height"
                name="height"
                value={newPokemon.height}
                onChange={handleChangeHeight}
                className="input"
                autoFocus
              />
            </div>

            <div className='input-container'>
              <label htmlFor="weight" className="top-label">Weight: </label>
              <input
                type="number"
                id="weight"
                name="weight"
                value={newPokemon.weight}
                onChange={handleChangeWeight}
                className="input"
                autoFocus
              />
            </div>
          </div>

          <div className='ctn-checkbox'>
            {
              allTypes.map((type) => (
                <div key={type.id} style={{ marginBottom: '4px' }}>
                  <input
                    type="checkbox"
                    id={`type-${type.id}`}
                    name={`type-${type.id}`}
                    value={type.id}
                    checked={newPokemon.id_Type.includes(type.id)}
                    onChange={handleChangeTypes}
                  />
                  <label htmlFor={`type-${type.id}`} className="label-check">{type.name}</label>
                </div>
              ))
            }
          </div>
          
          {error && <p style={{color: 'red'}}>{error}</p>}

          <div 
            className='ctn-button'
            disabled={error === true}
          >
            <button type="submit" className='btn-landing'><span>Create</span><i></i></button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default CreatePokemon;
