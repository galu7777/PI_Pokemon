import React from 'react';
import { NavLink } from 'react-router-dom';
import Detail from '../Detail/Detail';
import './Card.css'

function Card({ id, name, image, types }) {
  return (
    <div className="card">
      <div className="image-container">
        <img src={image} alt="img" className="card-image" />
      </div>
      <div className="card-content">
        <NavLink to={`/detail/${id}`} element={<Detail/>}>
            <h3 style={{ color: 'white' }}>{name}</h3>
        </NavLink>
        {
            types.map((type) => {
                return <h5 key={type.name} style={{ color: 'red' }}>Type: <span style={{ color: 'white' }}>{type.name}</span></h5>;
            })
        }
      </div>
    </div>
  );
}

export default Card;
