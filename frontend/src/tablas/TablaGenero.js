import React, { useEffect, useState } from 'react'
import Loading from '../components/Loading.jsx';
import TablasServices from '../services/TablasServices'

export default function TablaGenero() {
    const [datos, setDatos] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        TablasServices.getTablaGeneros()
            .then((res) => res.json())
            .then((res => {
                setDatos(res)
                setIsLoading(false);
            }))
    })
    if (isLoading) {
        return (
         <Loading/>
        );
      }
    

    return (
        <section>
        <table class="table">
          <thead class="thead-dark">
            <tr>
              <th scope="col">Dia</th>
              <th scope="col">Genero</th>
              <th scope="col">Numero de bicicletas retiradas</th>          
            </tr>
          </thead>
          <tbody>
            {
              datos.map(dato =>
                <tr key={""}>
                  <td>{dato.dia_mes}</td>
                  <td>{dato.Genero_Usuario}</td>
                  <td>{dato.total_bicicletas}</td>
                </tr>
                )
            }
          </tbody>
        </table>
      </section>
  )
    
}
