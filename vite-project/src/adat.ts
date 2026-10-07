export type ALLAPOTTIPUS = "folyamatban"|"törölve"|"inaktiv"|"kesz"|"alap"|"töröl"|"letrehozva"
export interface todotipus  {
    id:number,
    tennivalo:string,
    allapot:ALLAPOTTIPUS
}
export const TODOLISTA: todotipus[]=[
    {
    id:40,
    tennivalo:"dunno",
    allapot:"folyamatban"
    },//propsok listat,setallapotfugveny,
    //feladatprops lista 1 eleme
    //allapotok contextben hasznalasa
    {
    id:2,
    tennivalo:"number 2",
    allapot:"törölve"
    },
    {
    id:3,
    tennivalo:"number 3",
    allapot:"inaktiv"
    }
]