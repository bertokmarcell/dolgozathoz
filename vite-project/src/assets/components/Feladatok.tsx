import React, { useContext } from "react";
import Feladat from './Feladat'
import type { ALLAPOTTIPUS, todotipus } from "../../adat";
import { Hibakezeles, TodoContext } from "../../contexts/TodoContext";

function Feladatok() {
    const {lista}=Hibakezeles();;
    return (
        <div>
            {lista.map((elem, index) => {return (<Feladat elem={elem} index={index}key={index}/>);})}
        </div>
    );
}