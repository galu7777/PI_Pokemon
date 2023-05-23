import React from "react";
import { NavLink } from "react-router-dom";
import CreatePokemon from "../CreatePokemon/CreatePokemon";
import Pokemons from "../Pokemons/Pokemons";
import Search from "../Search/Search";
import logo from '../../assets/logo.png'
import "./Nav.css";

export default function Nav() {
  // <SearchBar onSearch={onSearch} setAccess={setAccess}/>
 
  return (
    <nav>
      <input type="checkbox" id="check"/>
      <label for="check" class="checkbtn">
        <i class="fas fa-bars" id="btn"></i>
      </label>
      <NavLink class="enlance" href="#">
        <img src={logo}  alt="logo" class="logo" />
      </NavLink>
      <ul>
        <li><NavLink to="/" element={<Pokemons/>}><a>home page</a></NavLink></li>
        <li><NavLink><a>Create Pokemon</a></NavLink></li>
        <li><NavLink to="/search" element={<Search/>}><a>Search</a></NavLink></li>
      </ul>
      {/* <section></section> */}
  </nav>
  );
}
