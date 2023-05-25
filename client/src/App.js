import { useEffect, useState } from 'react';
import { Routes, Route, useLocation, useNavigate } from 'react-router-dom';
import Detail from './components/Detail/Detail';
import Pokemons from './components/Pokemons/Pokemons';
import Nav from './components/Nav/Nav';
import Search from './components/Search/Search';
import './App.css';
import CreatePokemon from './components/CreatePokemon/CreatePokemon';
import LandingPage from './components/LandingPage/LandingPage';



function App() {
  
  const location = useLocation();
  const navigate = useNavigate();
  const [access, setAccess] = useState(false)
  
  useEffect(() => {
    if(access === false) {
      navigate('/')
    } else {
      navigate('/home')
    }
  }, [access])

  return (
    <div>
      
      {
        location.pathname !== '/' && <Nav/>
      }
        
        <Routes>
          {/* <Route path="/about" element={<About/>}/>
          <Route path="/detail" element={<Detail/>}/> */}
          <Route path="/" element={<LandingPage setAccess={setAccess}/>}/>
          <Route path="/home" element={<Pokemons/>}/>
          <Route path="/detail/:id" element={<Detail/>}/>
          <Route path="/create" element={<CreatePokemon/>}/>
          <Route path="/search" element={<Search/>}/>
        </Routes> 
      
    </div>
  );
}

export default App;
