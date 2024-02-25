import Tienda from './Pages/Tienda';
import NavBar from './components/NavBar/NavBar'
import Mujer from "./Pages/Mujer";
import Nino from "./Pages/Nino";
import Hombre from "./Pages/Hombre";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <NavBar />
        <Routes>
          <Route path="/" element={<Tienda />}></Route>
          <Route path="/mujer" element={<Mujer />}></Route>
          <Route path="/nino" element={<Nino />}></Route>
          <Route path="/hombre" element={<Hombre />}></Route>
      </Routes>
    </>
  );
}

export default App;
