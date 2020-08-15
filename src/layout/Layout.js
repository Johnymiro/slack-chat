import React from 'react';



export default function({children}) {

   return (
      <div style={{
         display: "flex",
         flexDirection: "column",
         padding: "0 20% 0 20%"
      }}>
         {children}
      </div>
   )
}