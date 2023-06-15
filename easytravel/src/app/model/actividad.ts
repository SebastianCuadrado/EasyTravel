import { Paquete } from "./paquete";

export class Actividad {
  idActividad: number = 0;
  nombre: String = "";
  categoria: String = "";
  descripcion: String = "";
  duracion: number = 0;
  paquete: Paquete = new Paquete();
}
