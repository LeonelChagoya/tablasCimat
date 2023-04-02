import React, { Component } from 'react';
import { createRoot } from 'react-dom/client';
import TablaGenero from './TablaGenero';




export default class App extends Component {
  render() {
    return (
     <main>
      <TablaGenero/>        
     </main>
    )
  }
}

createRoot(document.getElementById('root')).render(<App/>);