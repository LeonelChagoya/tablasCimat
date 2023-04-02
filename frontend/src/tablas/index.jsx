import React, { Component } from 'react';
import { createRoot } from 'react-dom/client';




export default class App extends Component {
  render() {
    return (
     <main>
        hola hugo edit
        
     </main>
    )
  }
}

createRoot(document.getElementById('root')).render(<App/>);