import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  	const title : string= "Welcome to test blog";
    const likes: number = 50 ; 
  	const link: string = "http://www.google.com";



  return (
    <div className="App">
     <div className='content'>
      <h1>{ title }</h1>
      <p>Liked {likes} times </p>


      <p>{10}</p>
      <p>{"hello, ninjas"}</p>
      <p>{[1,2,3,4,5]}</p>
      <p>{Math.random() * 10}</p>

      <a href={link}> Google Sites</a>
     </div>
    </div>
  );
}

export default App;
