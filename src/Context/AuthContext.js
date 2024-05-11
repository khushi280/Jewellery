import React, { createContext, useState } from 'react';
import axios from 'axios';
import { useToast,Button } from '@chakra-ui/react'
import {useNavigate} from "react-router-dom"

const apiUrl = 'http://localhost:5000/users';

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const[status,setstatus] = useState(false);
  const navigate = useNavigate();

  const login = async (userData) => {
    
    try {
      const response = await axios.get(apiUrl);
      const users = response.data;
      const foundUser = users.find(
        (user) => user.email === userData.email && user.password === userData.password
      );
      if (foundUser) {

        setUser(foundUser);
        setstatus(!status);
        console.log(status);
        if(!status){
          toast({
              title: "You are Successfully Logged into भारत Jewels ",
              status: "success",
              duration: 1000,
              position: "top",
              isClosable: true
            });
            return navigate('/')//here write the next page route
          }
          setstatus(status)
        console.log('Login successful:', foundUser);
        // alert('Login successful!');
      } else {
        toast({
          title: "Invalid Email and Password ",
          status: "error",
          duration: 1000,
          position: "top",
          isClosable: true
        });
      }
    } catch (error) {
      console.error('Error logging in:', error);
      alert('Login failed. Please try again later.');
    }
  };

  const logout = () => {
    setstatus(status);
    setUser(null);
  };

  const forgotPassword = async (email) => {
    try {
      const response = await axios.get(apiUrl);
      const users = response.data;
      const foundUser = users.find((user) => user.email === email);
      if (foundUser) {
        setstatus(!status);
        console.log(status);
        if(!status){
          toast({
              title: "Your Password Verification mail is sent to you ",
              status: "success",
              duration: 1000,
              position: "top",
              isClosable: true
            });
          }
          setstatus(status);
        // console.log(foundUser.password);
        // window.alert('Your Password Verification mail is send to your mail');
      } else {
        toast({
          title: "Invalid Email and Password ",
          status: "warning",
          duration: 1000,
          position: "top",
          isClosable: true
        });
        // alert('Email not found.');
      }
    } catch (error) {
      console.error('Error processing forgot password:', error);
      alert('An error occurred. Please try again later.');
    }
  };
  const toast = useToast();

  return (
    <AuthContext.Provider value={{ user, login, logout, forgotPassword }}>
      {children}
    </AuthContext.Provider>
  );
};

export { AuthContext, AuthProvider };