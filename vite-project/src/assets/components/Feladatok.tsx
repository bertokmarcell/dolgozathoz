import React from "react";
import Feladat from './Feladat'
import type { ALLAPOTTIPUS, todotipus } from "../../adat";
interface Feladatokprops{
    lista:todotipus[],
    setallapot:(index:number,allapot: ALLAPOTTIPUS)=>void,
}
export function Feladatok({ lista, setallapot }: Feladatokprops) {
    return (
        <div>
            {lista.map((elem, index) => {return (<Feladat elem={elem}setallapot={setallapot}index={index}key={index}/>);})}
        </div>
    );
}