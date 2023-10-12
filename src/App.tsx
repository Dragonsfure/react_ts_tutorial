import React from 'react';
import logo from './logo.svg';
import Navbar from './Navbar';
import Home from './Home';

function App() {
  	const title : string= "Welcome to test blog";
    const likes: number = 50 ; 
  	const link: string = "http://www.google.com";



  return (
    <div className="App">
      <Navbar/>
      
     <div className='content'>
      <Home/>
     </div>
    </div>
  );
}

export default App;
