import axios from "axios";
import { useState } from "react";
import Card from "../Card/Card";
import './Search.css'

const BASE_URL = "http://localhost:3001/pokemon";

export default function Search() {
  const [searchQuery, setSearchQuery] = useState("");
  const [pokemons, setPokemons] = useState([]);
  const [showCard, setShowCard] = useState(false);

  const handleChangeSearchQuery = (e) => {
    setSearchQuery(e.target.value);
  };

  const onSearch = async () => {
    try {
      if (isNaN(searchQuery)) {
        const response = await axios.get(`${BASE_URL}/search?name=${searchQuery}`);
        const pokemons = response.data;
        setPokemons(pokemons);
      } else {
        const response = await axios.get(`${BASE_URL}/${searchQuery}`);
        const pokemon = response.data;
        setPokemons([pokemon]);
      }
      setShowCard(true);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="cont-search">
      <div className="cont-input">
        <input type="search" value={searchQuery} onChange={handleChangeSearchQuery} className="input" />
        <button onClick={onSearch} className="btn-search">
          <span>Search</span>
        </button>
      </div>
      
      <div className="card-container">
            {showCard && pokemons.length > 0 ? (
            pokemons.map((pokemon) => (
                <Card
                key={pokemon?.id}
                id={pokemon?.id}
                name={pokemon?.name}
                image={pokemon?.image}
                types={pokemon?.types}
                />
            ))
            ) : (
            <p className="parrafo">Busca un Pokémon por ID o nombre</p>
            )}
        </div>
    </div>
  );
}
