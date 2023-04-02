import React from 'react'
import { Link } from 'react-router-dom'
import styles from '../../components/styles/Nav.module.css'
export default function Navbar() {
  return (
    <nav >
    
        <ul className={styles.nav}>
        <h1>Tablas:</h1>
            <li>
                <Link to="/tablas/genero" >Genero</Link>
            </li>
            <li>
                <Link to="/tablas/rangoedad">Rango por Edad</Link>
            </li>
        </ul>
  
    </nav>
  )
}
