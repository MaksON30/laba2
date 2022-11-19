import "./App.css";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Home, Pricing } from "./components/pages/index";

function App() {
  return (
    <>
      <Router>
        <Navbar></Navbar>
        <main>
          <Routes>
            <Route exact path="/" element={<Home />}></Route>
            <Route exact path="/price" element={<Pricing />}></Route>
          </Routes>
        </main>

        <Footer></Footer>
      </Router>
    </>
  );
}

export default App;
