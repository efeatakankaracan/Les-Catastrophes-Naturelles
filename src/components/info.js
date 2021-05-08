
import "../App.css"
import { Disasters } from "./data.json"
import { useParams } from "react-router-dom"
import { Link } from "react-router-dom"


export const Info = () => {
    
    const { id } = useParams()
    
    return (
        
        <div className="container text-center">
            <div className="jumbotron text-center">
                
                <h1><big>{Disasters[id].name}</big></h1>
                
            </div>
            <div className="row-cols-1">
                <div className="col border p-3 shadow p-4 mb-4 text-center">
                <h2 id="disastername">{ Disasters[id].name }</h2>
                <p id="disasterspoiler">{ Disasters[id].body }</p>
                <img src={Disasters[id].url} ></img>
                
                </div>
                <Link to="/"><button type="button" className="btn btn-primary btn-lg">Page D'accueil</button></Link>
            </div>
        </div>

          
          
        
    )
    
}


