import React, { useState, useContext } from 'react';
import Button from 'react-bootstrap/Button';
import { useNavigate} from 'react-router-dom';
import { Context } from "../context/Context.jsx";

const Pokemones = () => {

  const {name, setName} = useContext(Context);
  const navigate = useNavigate();
  const [value, setValue] = useState('');

   const handleChange = (event) => {
    setValue(event.target.value);
  };

  const handleClick = (e) => {
    e.preventDefault();
    navigate(`/Pokemones/${value}`);
  };

  return (
    <>
          <div className='pokemones'>
                <div><h1>Selecciona un pokemon</h1></div>
                <div>
                    <select className="form-select form-select-lg mb-3" value={value} onChange={handleChange}>
                      <option>Pokemones</option>
                          { name.map( (dato, i) => { 
                              return ( <option key={i} value={dato.name}>{dato.name}</option>)
                            })
                          }
                    </select>
                </div>
                <div>
                  <Button variant="dark" onClick={handleClick}>Ver Detalles</Button>
                </div>
          </div>
    </>
  )
}

export default Pokemones
