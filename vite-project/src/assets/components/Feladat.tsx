import { useContext } from 'react'
import type { ALLAPOTTIPUS, todotipus } from '../../adat'
import { Hibakezeles, TodoContext } from '../../contexts/TodoContext'
interface Feladatprops{
    elem:todotipus,
    setallapot:(index:number,allapot: ALLAPOTTIPUS)=>void,
}

function Feladat({elem,inedex}:Feladatprops) {
    const{setallapot}=Hibakezeles();;
  return (
    <div className='todo'>
        <span className='szoveg'>{elem.tennivalo} </span>
        <span className='szoveg'>{elem.allapot} </span>
        <button title='kesz' onClick={()=>setallapot(inedex,"kesz")}>V</button>
        <button title='folyamatban' onClick={()=>setallapot(inedex,"folyamatban")}>@</button>
        <button title='töröl' onClick={()=>setallapot(inedex,"töröl")}>X</button>
        <button title='alap' onClick={()=>setallapot(inedex,"letrehozva")}>ALLAPALLAPOT</button>
    </div>
  )
}

export default Feladat