import React from "react";
import '../hojas-de-estilo/Selected.css';

function Selected(props){
    return(
       <div className='Selected'>
        {props.icono}
        <p>{props.children}</p>
       </div>
    );
}

export default Selected;