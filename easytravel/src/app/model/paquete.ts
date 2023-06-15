import { DetalleHotel } from "./detallehotel";
import { Place } from "./places";
import { Travel } from "./travel";

export class Paquete {
  idPaquete: number = 0;
  precio: number = 0.00;
  place: Place = new Place();
  viaje: Travel = new Travel();
  detalle: DetalleHotel = new DetalleHotel();
  ahorro: number = 0.00;
}
