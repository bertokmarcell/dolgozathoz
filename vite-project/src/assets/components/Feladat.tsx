import type { ALLAPOTTIPUS, todotipus } from '../../adat'
interface Feladatprops{
    elem:todotipus,
    setallapot:(index:number,allapot: ALLAPOTTIPUS)=>void,
}

function Feladat({elem, setallapot:inedex}:Feladatprops) {
  return (
    <div className='todo'>
        <span className='szoveg'>{elem.tennivalo} </span>
        <span className='szoveg'>{elem.allapot} </span>
        <button title='kesz' onClick={()=>setallapot(inedex,"kesz")}>V</button>
        <button title='folyamatban' onClick={()=>setallapot(inedex,"Folyamatban")}>@</button>
        <button title='töröl' onClick={()=>setallapot(inedex,"töröl")}>X</button>
        <button title='alap' onClick={()=>setallapot(inedex,"letrehozva")}>ALLAPALLAPOT</button>
    </div>
  )
}

export default Feladat