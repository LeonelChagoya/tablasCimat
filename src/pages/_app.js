/*
_app.js es un estado global, puede ser llamado de cualquier componente
 _app.jses un componente React de nivel superior que envuelve todas las páginas de su aplicación. Puede usar este componente para mantener el estado cuando navega entre páginas o para agregar estilos globales
*/
import './styles.css'

// This default export is required in a new `pages/_app.js` file.
export default function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}