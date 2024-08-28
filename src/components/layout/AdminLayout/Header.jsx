import React, { useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { Dropdown } from 'react-bootstrap';
import { faker } from '@faker-js/faker';
import { logout} from "../../../slices/authSlice";

const Header = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate()

    const { user } = useSelector(state => state.auth);
    const token = localStorage.getItem('Token');
    const imageUrl = faker.image.url();
    const location = useLocation();
    const { pathname } = location;
    const login = user ?? JSON.parse(token);

    const handleLogout = () => {
        dispatch(logout())
        navigate('/login')
    }

    return (
        <header className="p-3 mb-2 bg-primary bg-gradient text-dark">
        <div className="container">
            <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
                <ul className="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
                    <li className="nav-item">
                        <Link 
                            to="/"  
                            className={`nav-link fs-5 px-2 ${pathname === "/" ? "active text-white" : "text-dark"}`}
                        >
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link 
                            to="/blogs" 
                            className={`nav-link fs-5 px-2 ${pathname === "/blogs" ? "active text-white" : "text-dark"}`}
                        >
                            Blogs
                        </Link>
                    </li>
                </ul>
    
                <div className="text-end">
                    {login ? (
                        <Dropdown align="end">
                            <span className="me-2 fs-5">Hello, {login.username} </span>
                            <Dropdown.Toggle 
                                variant="transparent" 
                                id="dropdown-basic" 
                                className="p-0"
                            >
                                <img 
                                    src={imageUrl} 
                                    alt="User Avatar" 
                                    style={{ width: '30px', height: '30px', borderRadius: '50%' }} 
                                /> 
                            </Dropdown.Toggle>
    
                            <Dropdown.Menu>
                                <button className="dropdown-item" onClick={handleLogout}>Logout</button>
                            </Dropdown.Menu>
                        </Dropdown>
                    ) : (
                        <Link to="/login" className="btn btn-outline-light me-2">Login</Link>
                    )}
                </div>
            </div>
        </div>
    </header>
    
    );
}

export default Header;
