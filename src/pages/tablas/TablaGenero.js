import React, { useEffect, useState } from 'react'
import Loading from '../../components/Loading.jsx';
import Pagination from '../../components/Pagination.jsx';
import TablasServices from '../../services/TablasServices';
import { paginate } from '../../components/paginate.js';

export default function TablaGenero() {
    const [datos, setDatos] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [currentPage,setCurrentPage] = useState(1);
    const pageSize = 10;
    const onPageChange=(page)=>{
      setCurrentPage(page);
    }
    useEffect(() => {
        TablasServices.getTablaGeneros()
            .then((res) => res.json())
            .then((res => {
                setDatos(res)
                setIsLoading(false);
            }))
    },[])
    if (isLoading) {
        return (
         <Loading/>
        );
      };

      const paginateData = paginate(datos, currentPage, pageSize);
    return (
        <section >
        <table >
          <thead >
            <tr>
              <th scope="col">Dia</th>
              <th scope="col">Genero</th>
              <th scope="col">Numero de bicicletas retiradas</th>          
            </tr>
          </thead>
          <tbody>
            {
              paginateData.map((dato,index) =>
                <tr key={index}>
                  <td>{dato.dia_mes}</td>
                  <td>{dato.Genero_Usuario}</td>
                  <td>{dato.total_bicicletas}</td>
                </tr>
                )
            }
          </tbody>
        </table>
        <Pagination
        items={datos.length}
        currentPage={currentPage}
        pageSize= {pageSize}
        onPageChange={onPageChange}
        />   
      </section>
  )
    
}

