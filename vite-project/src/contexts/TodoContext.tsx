//itt fogjuk kezelni az allpotot
//letrehozunk egy kontextet + providert
//kotext az a környezet amn a provider adatait hasznaljuk
//1 kontext es a provider letrehozasa
//2 provider hasznalt statek es fuggvenyek megadasa a value ertekben
//3 szulokomponen elelese a providerben
//4 felhasznaljuk a komponensben a  providerban megadadott valueket
import { Children, createContext, useState, type ReactNode } from "react";
import { TODOLISTA, type ALLAPOTTIPUS, type todotipus } from "../adat";
interface FeladatokContextValue{
    lista:todotipus[],
    setallapot:(index:number,allapot: ALLAPOTTIPUS)=>void,
}

export const TodoContext=createContext<FeladatokContextValue | undefined>(undefined)
interface TodoProviderprops{
    children:ReactNode
}
export function TodoProvider({children}:TodoProviderprops){
    const [Lista, setLista] = useState<todotipus[]>(TODOLISTA)
      function setallapot(index:number,allapot: ALLAPOTTIPUS){
            //3 lepes az allapotkezeleshez lol
            const ujlista:todotipus[]=[...Lista]
            ujlista[index].allapot=allapot
            setLista(ujlista)
      }
    return(<TodoContext.Provider value={{lista,setallapot}}>{children}</TodoContext.Provider>)
}
import { useContext } from "react";
export function Hibakezeles(){
    const context=useContext(TodoContext)
    if(context==undefined){
        throw new Error("dont worky");
        
    }
    return context
}