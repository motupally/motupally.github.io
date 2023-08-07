import React from 'react';
import Button from "./Components/Button";
import ReactDOM from 'react-dom';

const redPanda = {
  src: 'https://upload.wikimedia.org/wikipedia/commons/b/b2/Endangered_Red_Panda.jpg',
  alt: 'Red Panda',
  width:  '500px'
};
<Button />

function Main() {
  
    
    return (
      <div>
      

        <h1>Cute Red Panda</h1>
        <img 
          src={redPanda.src}
          alt={redPanda.alt}
          width={redPanda.width} />
          
     
          
      </div>
      
    );
    
    export default Main;