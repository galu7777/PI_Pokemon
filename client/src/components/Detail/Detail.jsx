import { useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import RM from '../../assets/RF.gif'
import './Detail.css'

const BASE_URL = "http://localhost:3001/pokemon/";

export default function Detail() {
  const { id } = useParams();
  const [pokemons, setPokemons] = useState({});

  useEffect(() => {
    axios(`${BASE_URL}/${id}`)
      .then((response) => response.data)
      .then(( data ) => {
        if(data.name) {
          console.log(data)
          setPokemons(data);
        } else {
          window.alert("¡No hay personajes con este ID!");
        }
      });
      return setPokemons({});
  }, [id]);

  return(
    <div className="cont-detail">
      <div className="container-des">
        <div>
          <img src={RM} alt="RM" className="logo-detail"/>
        </div>
        <h5 className="desc">Id: {pokemons?.id}</h5>
        <h5 className="desc">Name: {pokemons?.name}</h5>
        <h5 className="desc">Life: {pokemons?.life}</h5>
        <h5 className="desc">Attack: {pokemons?.attack}</h5>
        <h5 className="desc">Defense: {pokemons?.defense}</h5>
        <h5 className="desc">Height: {pokemons?.height}</h5>
        <h5 className="desc">Speed: {pokemons?.speed}</h5>
        <h5 className="desc">Weight: {pokemons?.weight}</h5>
      </div>
      {/* <div style={{margin: '50px'}}/> */}
      <div className="container-img">
        <img src={pokemons?.image} alt={pokemons?.name} className='img-detail'/>
      </div>        
    </div>
  );
}
