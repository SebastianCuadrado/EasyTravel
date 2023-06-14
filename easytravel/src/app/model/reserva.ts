import { Paquete } from "./paquete";
import { Usuario } from "./usuario";

export class Reserva{
  idReserva:number=0;
  paquete: Paquete=new Paquete();
  fechaReserva: Date = new Date(Date.now());
  usuario: Usuario=new Usuario();
}
