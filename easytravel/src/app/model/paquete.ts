import { Hotels } from "./hotels";
import { Place } from "./places";
import { Travel } from "./travel";

export class Paquete {
  idPaquete: number = 0;
  precio: number = 0.00;
  place: Place = new Place();
  viaje: Travel = new Travel();
  ahorro: number = 0.00;
  tipoHabitacion:string=""
  cantidadNoches:number=0
  hotel:Hotels =new Hotels()
  checkin:Date= new Date(Date.now())
  checkout:Date= new Date(Date.now())
}
