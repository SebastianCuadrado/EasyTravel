import { Hotels } from "./hotels"
export  class DetalleHotel{
  idDetalle:number=0
  tipoHabitacion:string=""
  cantidadNoches:number=0
  hotel:Hotels =new Hotels()
  checkin:Date= new Date(Date.now())
  checkout:Date= new Date(Date.now())
  }
