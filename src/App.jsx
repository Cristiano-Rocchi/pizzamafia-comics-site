import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Homepage from "./components/HomePage/HomePage";
import MyNavbar from "./components/navbar/Navbar";

function App() {
  return (
    <BrowserRouter>
      <>
        <MyNavbar />
        <Routes>
          <Route path="/" element={<Homepage />} />
        </Routes>
      </>
    </BrowserRouter>
  );
}

export default App;
