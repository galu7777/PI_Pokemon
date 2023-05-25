import { useEffect } from 'react';
import { connect } from 'react-redux';
import { getAllPokemons } from '../../redux/actions';
import Card from '../Card/Card';
import './Pokemons.css';

function Pokemons({ pokemons, getAllPokemons }) {

  
  useEffect(() => {
    getAllPokemons();
  }, [getAllPokemons]);


  return (

    <div className='container'>
      <h1 style={{ color: 'white' }}>Home <span style={{ color: 'red' }}>Page</span></h1>
      <div className='card-container'>

          {
            pokemons && pokemons.map((pokemon) => {
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
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    pokemons: state.allPokemons,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getAllPokemons: () => dispatch(getAllPokemons()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Pokemons);
