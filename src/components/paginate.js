export const paginate = (items, pagenumber, pageSize)=>{
    const startIndex = (pagenumber-1) * pageSize;
    return items.slice(startIndex, startIndex + pageSize);
   }