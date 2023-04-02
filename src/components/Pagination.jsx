import React from "react";
import styles from './styles/Tabla.module.css'

const Pagination = ({items,pageSize,currentPage,onPageChange}) => {
    const pagesCount = Math.ceil(items/pageSize);
   
    if(pagesCount === 1) return null;
    const pages = Array.from({length:pagesCount},(_,i) => i+1);


    return (
     <div>
        <ul className={styles.paginate}>
            {pages.map((page)=>(
                <li  key={page}
                className={
                    page === currentPage ? styles.pageItemActive : styles.pageItem
                  }
                onClick={()=>onPageChange(page)}
                >
                   
                        {page}
                    
                </li>
            ))}
        </ul>
     </div>
    )
   }
   export default Pagination

   