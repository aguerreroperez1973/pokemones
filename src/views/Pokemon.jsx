import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom';

const Pokemon = () => {

    const [data, setData] = useState([]);
    const [img, setImg] = useState([]);
    const { name } = useParams();

    useEffect(() => {
                        consultarApi();
                    }, []);
    
      const consultarApi = async () => {
    
        const url = "https://pokeapi.co/api/v2/pokemon/";
        const response = await fetch(url + name);
        
        if (response.ok) {
            const datos = await response.json();
              setImg(datos.sprites.other.home);
              setData(datos.stats)
                } else {
                <div><h3>Cargando...</h3></div>
            }
        };

            return (
                    <>            
                        <div>
                            <div className="d-flex justify-content-center p-3 m-1"> 
                                    <div><img src={img.front_default} alt="" width="250" height="250" />
                                    </div>
                                        <div>
                                            <div><h4>{name}</h4></div>
                                                <div> 
                                                    <ul>
                                                    { data.map( (dato, i) => { 
                                                                                return ( <li key={i}> <p >{dato.stat.name}: {dato.base_stat} </p></li> )
                                                                                })
                                                                            }
                                                    </ul>
                                                </div>
                                        </div> 
                            </div>
                        </div>      
                    </>
                )
            
}

export default Pokemon