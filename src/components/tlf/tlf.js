import React from "react";
import '../tlf/tlf.css';
import { Divider } from "@mui/material";

function Tlf(){

    return(

        <div className="container-tlf">
            <h1>Teléfonos de contácto</h1>
            <h2 className="title-material-h2">¿Dónde llamar en caso de cualquier emergencia?</h2>

        <div className="list-tlf">
            <h2 className="title-tlfs-h2">Tlfs. Principales</h2>
            <p>Emergencias: <b>112</b></p>
            <p>Cruz Roja: <b>900 104 971</b></p>
            <p>DGT: <b>011</b></p>
            <p>Atención de familiares de las personas desaparecidas: <b>900 365 112</b></p>
            <p>Psicólogas y Psicólogos Sin Fronteras: <b>960 450 230</b></p>
            <hr></hr>
            <h2 className="title-tlfs-h2">Tlfs. Personas Desaparecidas</h2>
            <p>Personas afectadas en La Plana de Utiel-Requena: <b>659 289 726</b></p>
            <p>Personas afectadas en L'Horta Sud: <b>682 177 249</b></p>
            <p>Personas afectadas en La Ribera: <b>619 975 059</b></p>
            <p>Personas afectadas en La Hoya de Buñol: <b>690 027 099</b></p>
            



        </div>                


        </div>


    )


}

export default Tlf; 