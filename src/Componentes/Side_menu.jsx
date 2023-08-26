import React from "react";
import '../hojas-de-estilo/Side_menu.css';
import Selected  from "./selected";


function Side_menu(){
    return(
       <div className='Side_menu'>

         <div className='side_bar'>
         </div>

         <div className='categorias'>
            <div className="explore">
              <h3> Explore</h3>
            </div>

        <div className="componentes_selected">
          <Selected icono={``}>Home</Selected>
          <Selected>Music</Selected>
          <Selected>Gaming</Selected>
          <Selected>Education</Selected>
          <Selected>Sciencie & Tech</Selected>
          <Selected>Entertainment</Selected>
          <Selected>Student Hubs</Selected>
        </div>    

           

         </div>

       </div>
    );
}

export default Side_menu;