import { Hotels } from "./hotels";
import { Usuario } from "./usuario";

export class ComentariosHotel{
  idComentariosHotel:number=0;
  valoracion:number=0;
  comentario:string="";
  hotels:Hotels=new Hotels();
  usuario:Usuario=new Usuario()

}
