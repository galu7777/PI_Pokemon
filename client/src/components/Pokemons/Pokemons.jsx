import axios from 'axios';
import { useState, useEffect } from 'react';
import Card from '../Card/Card';
import './Pokemons.css';

function Pokemons() {
  const [pokemons, setPokemons] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get('http://localhost:3001/pokemon');
        const data = response.data;
        setPokemons(data);
        console.log(pokemons);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    }

    fetchData();
  }, []); // El arreglo de dependencias está vacío para que se ejecute solo una vez al cargar el componente.

  return (

    <div className='card-container'>
      
      {
        pokemons.map((pokemon) => {
          return (
            <Card
              key={pokemon?.id}
              id={pokemon?.id}
              name={pokemon?.name}
              image={pokemon?.image}
              types={pokemon?.types}
            />
          )
        })
      }
    </div>
  );
}

export default Pokemons;
