import "./Login.css"
import {ForgotPasswordForm} from "../Components/ForgotPasswordForm"

import { Link } from "react-router-dom"
import React, { useContext, useState } from 'react';
import { AuthContext } from '../Context/AuthContext';

export const LoginForm = () =>{
    const { login, forgotPassword } = useContext(AuthContext);
    const [formData, setFormData] = useState({
      email: '',
      password: ''
    });
    const [showForgotPasswordForm, setShowForgotPasswordForm] = useState(false);
  
    const handleChange = (e) => {
      const { name, value } = e.target;
      setFormData((prevData) => ({ ...prevData, [name]: value }));
    };
  
    const handleLogin = (e) => {
      e.preventDefault();
      login(formData);
      setFormData({
        email: '',
        password: ''
      });
    };
  
    const handleForgotPassword = () => {
      setShowForgotPasswordForm(true);
    };
  
    const handleResetPassword = (email) => {
      forgotPassword(email);
      setShowForgotPasswordForm(false);
    };
    return (
        <div>
          {showForgotPasswordForm ? (
            <ForgotPasswordForm onResetPassword = {handleResetPassword} />
          ) : ( 
            <div className="main">
                <form>
                <div className="head">
                <img src="https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcSB4W__VZ3lSwjeUPXg6FiT_IoQUES_VQi4pv3V1gXrMvapKYms" alt="Fingerprint" style={{width:"50px"}} />   
                <h1>Login to भारत Jewels</h1>
                <br />
                <p>Login to unlock best prices and become an insider for our exclusive launches & offers. 
                    <br />Complete your profile and get ₹250 worth of xCLusive Points.</p>
                </div>

                    <div className="passem">
            
                    <input
                        type="email"
                        name="email"
                        placeholder="Email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                    />
                    <input
                        id="password"
                        type="password"
                        name="password"
                        placeholder="Password"
                        value={formData.password}
                        onChange={handleChange}
                        required
                    />
                    
                    </div>

                    <div className="jarugu">
                    <button className="submit-btn-1" onClick={handleLogin}>
                        CONTINUE TO LOGIN
                    </button>
                    </div>
                    <button type="button" onClick={handleForgotPassword}>Forgot Password</button>
                    <br />
                    <br />
                    <p>New to भारत Jewels? <Link className="style" to='/signup'>Create an Account</Link></p>

                    <br />
                    <br />
                    <br />
                    <p>You can also Login with</p>
                    <div className="choice" >
                        <img src="https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQ22anEy_Mqjn2MKrNI75Io_JUkIis4t8n5s8nPMh2gj0HiOyCV" />
                        <img src="https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcTJWrYWHEvXHPvlbjPIxCtzIdB0LC4M5bbXVN2QnsHnyl0tADJM" />
                    </div>
                </form>
                
            </div>
            )}
        </div>
        
    )
    
}
