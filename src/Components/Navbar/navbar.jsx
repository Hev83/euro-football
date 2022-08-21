import { NavLink } from "react-router-dom";
import "./navbar.css";

const Navbar = () => { 
  return(
    <>
     <nav className={ 
        Navbar
        ? "navbar navbar-expand fixed-top active"
        : "navbar navbar-expand fixed-top"
     }
    >
        <NavLink to="/" className="navbar-brand">
            <span>Lion</span>esses
        </NavLink>
    <div>
       <ul className="navbar-nav">
          <li className="nav-item"><NavLink to="/" 
          className="nav-link">
           Home    
        </NavLink></li>   
        <li className="nav-item"><NavLink to="/about"
           className="nav-link">
           About    
        </NavLink></li>   
        <li className="nav-item"><NavLink to="/team" 
           className="nav-link">
           Team   
        </NavLink></li>   
        <li className="nav-item"><NavLink to="/clubs" 
           className="nav-link">
           Clubs   
        </NavLink></li>    
       </ul>
     </div>
    </nav>
    </>
   );
};
export default Navbar;