import './app.css';
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import { Navbar, Footer } from "./Components";
import { Home, About, Team, Clubs } from "./Pages"; 
const App = () => {
    return(
        <>
          <Router>
            <Navbar />
             <Routes>
                <Route path="/" element={<Home />}></Route>
                <Route path="/about" element={<About />}></Route>
                <Route path="/team" element={<Team />}></Route>
                <Route path="/clubs" element={<Clubs />}></Route>
             </Routes>
             <Footer />
          </Router>
        </>
    );
};
export default App; 