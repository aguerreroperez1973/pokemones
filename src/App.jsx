import { useContext } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";

import Home from "./views/Home";
import Pokemones from "./views/Pokemones";
import Pokemon from "./views/Pokemon";
import NotFound from "./views/NotFound";

const App = () => {

   return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/Pokemones" element={<Pokemones /> } />
        <Route path="/Pokemones/:name" element={<Pokemon /> } />
        <Route path="*" element={<NotFound /> } />
      </Routes>
    </div>
  );
};
export default App;
