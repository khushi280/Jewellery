import { Link } from "react-router-dom";
import "./Pass.css"
import React, { useState } from 'react';
// import { AuthContext } from '../Context/AuthContext';



    export const ForgotPasswordForm = ({ onResetPassword }) => {
        // const { forgotPassword } = useContext(AuthContext);

        const [email, setEmail] = useState('');
      
        const handleEmailChange = (e) => {
          setEmail(e.target.value);
        };
      
        const handleSubmit = (e) => {
          e.preventDefault();
          onResetPassword(email);
          setEmail('');
        };
      
    return (
        <form onSubmit={handleSubmit}>
        <div className="passem1">
        <input
          type="email"
          name="email"
          placeholder="Enter your email"
          value={email}
          onChange={handleEmailChange}
          required
        />
        <button className="submit-btn" type="submit">Reset Password</button>
        </div>
      </form>
    )
}
