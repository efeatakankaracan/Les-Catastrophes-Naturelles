import React from 'react'
import "../App.css"


const Mainpage = () => {
    return(
        <div className="container">
            <div className="jumbotron text-center">
                <h1>Les Catastrophes Naturelles</h1>
                <p>Efe Atakan Karacan</p>
            </div>

            <div className="row-cols-1">
                <div className="col border p-3 shadow p-4 mb-4" id="seisme">
                    
                    <span><a href="/séisme" className="seisme" ><h1>Séisme</h1>
                    <p>Un séisme ou tremblement de terre est une secousse du sol résultant de la libération brusque d'énergie accumulée par les contraintes exercées sur les roches.</p></a></span>
                    
                </div>
                <div className="col border p-3 shadow p-4 mb-4" id="eruption">
                    
                    <span><a href="/eruption" className="eruption" ><h1>Éruption Volcanique</h1>
                    <p>Une éruption volcanique est un phénomène géologique caractérisé par l'émission, par un volcan, de laves et/ou de téphras accompagnés de gaz volcaniques.</p></a></span>
                    
                </div>
                <div className="col border p-3 shadow p-4 mb-4" id="eruption">
                    
                    <span><a href="/tsunami" className="eruption" ><h1>Tsunami</h1>
                    <p>Les tsunamis sont de grosses vagues ou des séries de vagues générées par le déplacement rapide de grands volumes d'eau en raison d'événements sismiques. </p></a></span>
                    
                </div>
                <div className="col border p-3 shadow p-4 mb-4" id="eruption">
                    
                    <span><a href="/glissement" className="eruption" ><h1>Glissement de terrain</h1>
                    <p>Un glissement de terrain est un phénomène d'origine sismique, géologique et géophysique où une masse de terre descend sur une pente.</p></a></span>
                    
                </div>
                <div className="col border p-3 shadow p-4 mb-4" id="eruption">
                    
                    <span><a href="/inondation" className="eruption" ><h1>Inondation</h1>
                    <p>Une inondation est une submersion temporaire, naturelle ou artificielle, d'un espace par de l'eau liquide.</p></a></span>
                    
                </div>
                <div className="col border p-3 shadow p-4 mb-4" id="eruption">
                    
                    <span><a href="/tempete" className="eruption" ><h1>Tempête</h1>
                    <p>Une tempête est un phénomène météorologique violent à large échelle dite synoptique, avec un diamètre compris en général entre 200 et 1 000 km, caractérisé par des vents rapides et des précipitations intenses.</p></a></span>
                    
                </div>
            </div>
        </div>
        )
    }
    


export default Mainpage;
