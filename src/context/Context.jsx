import { createContext, useState, useEffect, useContext } from "react";

export const Context = createContext();

const Provider = ({ children }) => {

  const [name, setName] = useState([]);
  
  useEffect(() => {
    consultarApi();
  }, []);

  const consultarApi = async () => {

    const url = "https://pokeapi.co/api/v2/pokemon/";
    const response = await fetch(url);
    
    if (response.ok) {
        const datos = await response.json();
          //console.log(datos.results);
          setName(datos.results);
            } else {
              <div><h3>Cargando...</h3></div>
        }
    };

  return (
    <Context.Provider value={{ name, setName, }} >
      {children}
    </Context.Provider>
  );
};
export default Provider;