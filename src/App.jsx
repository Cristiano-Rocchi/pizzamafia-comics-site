import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Route, Router, Routes } from "react-router-dom";
import Homepage from "./components/HomePage/HomePage";

function App() {
  return (
    <BrowserRouter>
      <>
        <Routes>
          <Route path="/" element={<Homepage />} />
        </Routes>
      </>
    </BrowserRouter>
  );
}

export default App;
