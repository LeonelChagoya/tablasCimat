import React, { Component } from 'react';
import { createRoot } from 'react-dom/client';
import Nav from './Nav';
import TablaGenero from './TablaGenero';
import TablaRangoEdad from './TablaRangoEdad';
import { BrowserRouter as Router,Routes, Route} from 'react-router-dom';




export default class App extends Component {
  render() {
    return (
     <Router>
     <Nav/>
      <Routes>
       <Route path='/tablas/genero' element={<TablaGenero/>}/>   
       <Route path='/tablas/rangoedad' element={<TablaRangoEdad/>}/>        
      </Routes>
     </Router>
    )
  }
}

createRoot(document.getElementById('root')).render(<App/>);