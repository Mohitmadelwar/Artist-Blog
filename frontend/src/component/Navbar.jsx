import React from "react";
import { useNavigate } from "react-router-dom";
import "../component/css/Navbar.css";
import './NewBlog'
const Navbar = () => {
  const navigate = useNavigate();


const handleForm = () => {
navigate('/NewBlog')
}
  
  
  return (
    <div className="navbar-container">
      <nav className="navbar navbar-expand-lg bg-black">
        <div className="container-fluid">
          <span style={{ color: "#D1762D", fontSize: "40px"  }}>Top Indian</span>
          <div className="collapse navbar-collapse">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <span className="vertical-bar ms-3 mt-1"></span>

              <a
                className="nav-link active ms-3"
                aria-current="page"
                href="#"
                style={{ color: "#FCB28D", fontSize: "20px" }}
              >
          
              </a>
            </ul>
            <form className="d-flex">
              <button
                className="btn btn-outline-secondary custom-margin-right"
                type="button"
              onClick={handleForm}
              >
                Submit New Post
              </button>
            </form>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
