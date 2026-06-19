import React from "react";
import { useEffect, useState } from "react";

export default function Pokedex(){
    const [ pokedex, setPokedex] = useState([])

    	const getPokedex = async () => {
		const response = await fetch('https://pokeapi.co/api/v2/generation/1')
		if (!response.ok) {
			console.log('falso', response.status)
			return
		}
		const data = await response.json()
		setPokedex(data.pokemon_species)

        	useEffect(() => {
		    getPokedex()

	}, [])



	}




    return(

            {pokedex.map((item, index) =>  
            
            <div>    
                <img src={></img>
                    <h1>{item.name}</h1>
            </div>)}
    )
    
}

