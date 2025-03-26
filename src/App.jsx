import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Homepage from "./components/HomePage/HomePage";
import MyNavbar from "./components/navbar/Navbar";
import Comics from "./components/Comics/Comics";
import Characters from "./components/Characters/Characters";

function App() {
  return (
    <BrowserRouter>
      <>
        <MyNavbar />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/comics/:id" element={<Comics />} />
          <Route path="/characters" element={<Characters />} />
        </Routes>
      </>
    </BrowserRouter>
  );
}

export default App;
