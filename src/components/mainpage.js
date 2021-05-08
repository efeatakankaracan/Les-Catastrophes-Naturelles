import React from 'react'
import "../App.css"
import "./data.json"
import { Link } from "react-router-dom"
import { Disasters } from "./data.json"

const Mainpage = () => {
    return(
        <div className="container">
            <div className="jumbotron text-center">
                <h1>Les Catastrophes Naturelles</h1>
                <p>Efe Atakan Karacan</p>
            </div>

           <div className="row-cols-1">
           
           {Disasters.map(disaster => (
        <div className="col border p-3 shadow p-4 mb-4" key={disaster.id}>
          <div className="disastermains"> <Link to={`/disasters/${disaster.id}`} style={{ textDecoration: 'none', color: "lime" }} className={"disastermain"}>
            <h2 id="disastername">{ disaster.name }</h2>
            <p id="disasterspoiler">{ disaster.spoiler }</p>
            <p>Cliquez pour continuer la lecture</p>
          </Link></div>
         
        </div>
      ))}
           </div>
        </div>
        )
    }
    


export default Mainpage;
