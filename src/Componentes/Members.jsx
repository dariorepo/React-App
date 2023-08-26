import React from "react";
import '../hojas-de-estilo/Members.css';

function Members(props){
    return(
       <div className='members_contenedor'>

       <div className="contenedor_imagen_members">
          <img className="fotomember" src={props.foto} alt="Foto user" />
       </div>
       
        <p>{props.children}</p>
       </div>
    );
}

export default Members;