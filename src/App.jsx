import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import Homepage from "./components/HomePage/HomePage";
import MyNavbar from "./components/navbar/Navbar";
import Comics from "./components/Comics/Comics";
import Characters from "./components/Characters/Characters";
import AllComics from "./components/AllComics/AllComics";
import Drawings from "./components/Drawings/Drawings";
import NotFound from "./components/NotFound/NotFound";

function AppContent() {
  const location = useLocation();
  const isComicsPage = /^\/comics\/[^/]+$/.test(location.pathname);

  return (
    <div id="root" className={isComicsPage ? "dark-root" : ""}>
      <MyNavbar />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/comics" element={<AllComics />} />
        <Route path="/comics/:id" element={<Comics />} />
        <Route path="/drawings" element={<Drawings />} />
        <Route path="/characters" element={<Characters />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  );
}

export default App;
