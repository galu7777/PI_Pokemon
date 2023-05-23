import { Routes, Route } from 'react-router-dom';
import Detail from './components/Detail/Detail';
import Pokemons from './components/Pokemons/Pokemons';
import Nav from './components/Nav/Nav';
import Search from './components/Search/Search';
import './App.css';
import CreatePokemon from './components/CreatePokemon/CreatePokemon';



function App() {
  
  
  

  return (
    <div>
      
        <Nav/>
        
        <Routes>
          {/* <Route path="/about" element={<About/>}/>
          <Route path="/detail" element={<Detail/>}/> */}
          <Route path="/" element={<Pokemons/>}/>
          <Route path="/detail/:id" element={<Detail/>}/>
          <Route path="/create" element={<CreatePokemon/>}/>
          <Route path="/search" element={<Search/>}/>
        </Routes> 
      
    </div>
  );
}

export default App;
