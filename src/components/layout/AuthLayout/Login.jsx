import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { login } from '../../../slices/authSlice';
import { useNavigate } from "react-router-dom";

const Login = () => {
    const [email, setEmail] = useState('admin@example.com');
    const [password, setPassword] = useState('admin');
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { loading, error } = useSelector(state => state.auth);

    const handleSubmit = (e) => {
        e.preventDefault();

        dispatch(login({ email, password }))
            .then((result) => {

                if (login.fulfilled.match(result)) {
                    localStorage.setItem('Token', JSON.stringify(result.payload));
                    navigate('/');
                } else {
                    console.error('Failed:', result.error);
                }
            })
            .catch((err) => {
                console.error('Error:', err);
            }).finally(
                console.log('success')
            );
      };

    return (
        <main className="form-signin text-center container mt-5">
            <form onSubmit={handleSubmit} className="shadow p-4 rounded">
                <img
                src="../../../../logo.png"
                className="avatar img-fluid rounded me-1"
              />   
                <h1 className="h3 mb-3 fw-normal">Login In</h1>

                <div className="form-floating mb-3">
                    <input 
                        type="email" 
                        className="form-control" 
                        id="floatingEmail" 
                        value={email} 
                        onChange={(e) => setEmail(e.target.value)} 
                        placeholder="name@example.com" 
                        required 
                    />
                    <label htmlFor="floatingEmail">Email address</label>
                </div>
                <div className="form-floating mb-3">
                    <input 
                        type="password" 
                        className="form-control" 
                        id="floatingPassword" 
                        value={password} 
                        onChange={(e) => setPassword(e.target.value)} 
                        placeholder="Password" 
                        required 
                    />
                    <label htmlFor="floatingPassword">Password</label>
                </div>

                <button 
                    className={`w-100 btn btn-lg btn-primary ${loading ? "btn-loading" : ""}`} 
                    type="submit"
                >
                    Login in
                </button>
                {error && <p className="text-danger mt-3">{error}</p>}
            </form>
        </main>
    )
}

export default Login;