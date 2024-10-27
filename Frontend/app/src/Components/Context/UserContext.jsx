import React, { useState } from 'react'
export const  UserContext =React.createContext();
export default function Main({children}) {
    const [isPdfUpload,setIsPdfUpload]=useState(false);
    const [PdfData,SetPdfData]=useState('');
  return (
    <UserContext.Provider value={{isPdfUpload,setIsPdfUpload,PdfData,SetPdfData}}>
      {children}
    </UserContext.Provider>
  )
}
