"use client"
import React, { useEffect, useState } from "react";

export default function Types() {
    const [types, setTypes] = useState([]);
    const getTypes = async () => {
        const response = await fetch("https://pokeapi.co/api/v2/type/")
        if (response.ok) {
            console.log("datos obtenidos");
        }
        const data = await response.json();
        setTypes(data.results)
        console.log(types)

    }
    useEffect(() => {
        getTypes()
    }, [])

    // ICONS https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/types/generation-viii/sword-shield/small/${id}.png

    return (
        <div>
            {types.slice(0, 16).map((item, index) =>
                <div>
                    <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/types/generation-viii/sword-shield/small/${index+1}.png`}></img>
                    <h1>{item.name}</h1>
                </div>
            )}
        </div>


    )

}