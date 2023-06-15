import { Intereses } from "./intereses"
import { Paquete } from "./paquete"

export  class Notificacion{
  idNotificacion:number=0
  paquete:Paquete = new Paquete()
  intereses:Intereses = new Intereses()
  mensaje:string=""

}
