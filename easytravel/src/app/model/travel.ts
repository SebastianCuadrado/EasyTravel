import { Empresa_Transporte } from "./Empresa_Transporte"

export class Travel{
  idViaje:number=0;
  empresaTransporte: Empresa_Transporte = new Empresa_Transporte();
  medioTransporte: string = "";
  fechaIda: Date = new Date(Date.now());
  fechaVuelta: Date = new Date(Date.now());
  ruta: string = "";
  duracionPromedio: number = 0;
}
