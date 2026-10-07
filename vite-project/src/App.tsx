import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'
import { TODOLISTA, type todotipus, type ALLAPOTTIPUS } from './adat'
import { Feladatok } from './assets/components/feladatok'


function App() {
  const [Lista, setLista] = useState<todotipus[]>(TODOLISTA)
  function setallapot(index:number,allapot: ALLAPOTTIPUS){
        //3 lepes az allapotkezeleshez lol
        const ujlista:todotipus[]=[...Lista]
        ujlista[index].allapot=allapot
        setLista(ujlista)
  }

  return (
    <>
    <article>
      <Feladatok lista={Lista} setallapot={setallapot}/>
    </article>
    </>
  )
}

export default App
