import React from "react";
import '../hojas-de-estilo/Main_content.css';
import imagen_banner from "../Imagenes/banner.jpg"

function Main_content(){
    return(
       <div className='Main_content'>

            <div className="barra_busqueda">
                <div className="buscar">
                    <h5>Explore</h5>
                </div>
            </div>


            <div className="banner">
                <img className="imagen_banner"
                   src={imagen_banner} 
                />
            </div>

            <h2>Featured Community</h2>

       </div>
    );
}

export default Main_content;