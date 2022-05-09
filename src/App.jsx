import React from 'react';
import styled, { createGlobalStyle } from "styled-components";
import { FaYoutube, FaTwitter, FaInstagram, FaFacebook } from 'react-icons/fa'
import Navbar from './Navbar';

function App() {
  return (
    <>
      <Navbar />
      <GlobalStyle />
      <Main1>
        <h1>Best Hamburgers Ever</h1>
        <button>Order Now</button>
      </Main1>
      <Main2>
        <Card>
          <img src="https://images.unsplash.com/photo-1550317138-10000687a72b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=920&q=80" alt="" />
          <h1>Hamburger1</h1>
          <p>One of the best Hambergurs in the world!</p>
        </Card>
        <Card>
          <img src="https://images.unsplash.com/photo-1572802419224-296b0aeee0d9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=815&q=80" alt="" />
          <h1>Hamburger2</h1>
          <p>One of the best Hambergurs in the world!</p>
        </Card>
        <Card>
          <img src="https://images.unsplash.com/photo-1553979459-d2229ba7433b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=768&q=80" alt="" />
          <h1>Hamburger3</h1>
          <p>One of the best Hambergurs in the world!</p>
        </Card>
        <Card>
          <img src="https://images.unsplash.com/photo-1547584370-2cc98b8b8dc8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=871&q=80" alt="" />
          <h1>Hamburger4</h1>
          <p>One of the best Hambergurs in the world!</p>
        </Card>
        <Card>
          <img src="https://images.unsplash.com/photo-1584178639036-613ba57e5e39?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80" alt="" />
          <h1>Hamburger5</h1>
          <p>One of the best Hambergurs in the world!</p>
        </Card>
        <Card>
          <img src="https://images.unsplash.com/photo-1568901346375-23c9450c58cd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=699&q=80" alt="" />
          <h1>Hamburger6</h1>
          <p>One of the best Hambergurs in the world!</p>
        </Card>
      </Main2>
      <Main3>
        <h3>Hamburger Of the Day</h3>
        <h1>Big-Mac</h1>
      </Main3>
      <Footer>
        <h1>Contact Us</h1>
        <Socials>
          <FaYoutube />
          <FaTwitter />
          <FaInstagram />
          <FaFacebook />
        </Socials>
      </Footer>
    </>
  );
}

const GlobalStyle = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing:border-box;
    font-family: 'Truculenta', sans-serif;
    overflow-x: hidden;
  }
  body{
    overflow-x: hidden;
    display:flex;
    flex-direction:column;
    width:100vw;
  }
`;

const Main1 = styled.div`
  height: 100vh;
  width:  100vw;
  background: url('https://images.unsplash.com/photo-1561758033-d89a9ad46330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80');
  background-size:cover;
  background-position: center;
  background-repeat: no-repeat;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding: 20px 10%;
  button{
    padding:10px;
    font-size:20px;
    background-color: #ffc400;  
    border: 1px solid #333;
    color:#333;
    font-weight:bolder;
    margin-top:10px;
    transition: all 0.2s ease-out;
    &:hover{
      transform: translate(5px, -5px);
    }
  }
  h1{
    color: snow;
    //box-shadow: 10px 5px #ffc400;
    display: inline-block;
    font-size: 80px;
    transition: all 0.2s ease-in-out;
    cursor:pointer;
    &:hover{
      transform: translate(5px, -5px);
    }
  }

`;

const Main2 = styled.div`
  min-height: 100vh;
  width:  100vw;
  padding: 50px 30px;
  background:linear-gradient(to bottom, #333,#222);
  display:grid;
  grid-gap: 20px;
  grid-template-columns: repeat(1,400px);
  @media (min-width:800px){
    grid-template-columns: repeat(2,400px);
  }
  @media (min-width:1300px){
    grid-template-columns: repeat(3,400px);
  }
  justify-content: center;
`;

const Card = styled.div`
  background-color:whitesmoke;
  color:#333;
  display:flex;
  flex-direction: column;
  align-items:center;
  justify-content: center;
  padding-bottom:20px;
  border-radius:25px;
  img{
    width:100%;
    height: 80vh;
    object-fit: cover;
  }
`;


const Main3 = styled.div`
  background-image: url("https://images.unsplash.com/photo-1549611016-3a70d82b5040?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=830&q=80");
  background-size:cover;
  background-position: center;
  background-repeat: no-repeat;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  color:snow;
  font-size:2rem;
  text-shadow: -1px 0 #ff7504,0 1px #ff7504,1px 0 #ff7504, 0 -1px #ff7504;
  width:100vw;
  height:40vh;
`;

const Footer = styled.div`
  display:grid;
  grid-template-columns: repeat(1,1fr);
  @media (min-width:768px){
    grid-template-columns: repeat(2,1fr);
  }
  align-items: center;
  justify-content: center;
  width: 100vw;
  padding:10px;
  background-color: #000024;
  color:whitesmoke;
  text-align: center;
`;

const Socials = styled.div`
  font-size:30px;
  width:90vw;
  @media (min-width:768px){
    width:60vw;
  }
  display:flex;
  align-items: center;
  justify-content: space-around;
  margin:20px 0;
`;



export default App;
