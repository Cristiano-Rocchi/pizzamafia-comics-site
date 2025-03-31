import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Homepage from "./components/HomePage/HomePage";
import MyNavbar from "./components/navbar/Navbar";
import Comics from "./components/Comics/Comics";
import Characters from "./components/Characters/Characters";
import AllComics from "./components/AllComics/AllComics";
import Drawings from "./components/Drawings/Drawings";

function App() {
  return (
    <BrowserRouter>
      <>
        <MyNavbar />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/comics" element={<AllComics />} />
          <Route path="/comics/:id" element={<Comics />} />
          <Route path="/drawings" element={<Drawings />} />
          <Route path="/characters" element={<Characters />} />
        </Routes>
      </>
    </BrowserRouter>
  );
}

export default App;
