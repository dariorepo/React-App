import React from "react";
import imagen_user from "../Imagenes/user_sophie.jpg";

import '../hojas-de-estilo/Inspector.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAddressCard, faBell,faComment,faGear  } from '@fortawesome/free-solid-svg-icons'; 
import Members from "./Members";
import member_01 from "../Imagenes/member_01.png";

function Inspector(){
    return(
       <div className='Inspector'>

       <div className="contenedor_iconos" >
            <div className="iconoss">
                <FontAwesomeIcon icon={faAddressCard} />
                <FontAwesomeIcon icon={faBell} />
                <FontAwesomeIcon icon={faComment} />
                <FontAwesomeIcon icon={faGear} />

            </div>
       </div>

       <div className="contenedor_user">
            <div className="contenedor_fotoUser">
                <img className="img_user"
                    src={imagen_user}
                    alt="foto user"
                />
            </div>

            <h2>Sophie Fortune</h2>
            <k3>@sofiefortune</k3>
       </div>

       <h3>New Members</h3>

       <div className="contentenedor_members">
            <div className="members">

               <div className="frame">
                 <Members foto={member_01}>Aneee Couture</Members>
                 <Members foto={member_01}>Mirian Soleil</Members>
                 <Members foto={member_01}>Mariel Laval</Members>
                 <Members foto={member_01}>Mark Morian</Members>
               </div>

            </div>
       </div>

       </div>
    );
}

export default Inspector;