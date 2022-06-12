import "./App.css";
import './utils/Color.css'
import "./utils/font.css";
import "./utils/gayatri.css"
import "./utils/simran.css"
import "./utils/vikas.css"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import CustomNavbar from './components/layouts/CustomNavbar';
import Footer from './components/layouts/Footer';
import Contact from "./pages/Contact";


function App() { 
  return (
    <div>
      <Router>
        <CustomNavbar />
        <div
          className="fluid-container Background-dark-blue main-page"
        >
          <Routes>
            <Route exact path="/" element={<HomePage />} />
            <Route exact path="/about" element={<AboutPage />} />
            <Route exact path="/contact" element={<Contact />} />
          </Routes>
        </div>
        <Footer />
      </Router>
    </div>
  );
}

export default App;