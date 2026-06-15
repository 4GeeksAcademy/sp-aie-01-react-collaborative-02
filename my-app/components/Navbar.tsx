import Link from "next/link";
import React from "react";


export default function Navbar () {

    return(

        <h1>
            <Link href="/Pokedex"> Pokedex </Link>
            <Link href="/Moves"> Moves </Link>
            <Link href="/Types"> Types </Link>
            <Link href="/Contact"> Contact </Link>
        </h1>

    )



}