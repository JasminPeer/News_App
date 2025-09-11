
import { useState } from 'react';
import './App.css';
import NavBar from './components/NavBar';
import News from './components/News';


function App() {

  const[categories,setCategories]= useState('general');


  return (
    <>
   <NavBar setCategories={setCategories}/>
   <News categories={categories}/>

    
    </>
  );
}

export default App;
