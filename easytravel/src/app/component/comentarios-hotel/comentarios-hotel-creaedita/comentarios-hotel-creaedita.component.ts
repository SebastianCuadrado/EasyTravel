import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { Comentarios_Hotel } from 'src/app/model/comentarios_hotel';
import { ComentariosHotelService } from 'src/app/service/comentarios-hotel.service';

@Component({
  selector: 'app-comentarios-hotel-creaedita',
  templateUrl: './comentarios-hotel-creaedita.component.html',
  styleUrls: ['./comentarios-hotel-creaedita.component.css']
})
export class ComentariosHotelCreaeditaComponent implements OnInit {
  form:FormGroup=new FormGroup({});
  comentarios_hotel:Comentarios_Hotel=new Comentarios_Hotel();
  mensaje:string="";
  ngOnInit(): void {
    this.form=new FormGroup({
      idComentarioHotel: new FormControl(),
      valoracion: new FormControl(),
      comentario: new FormControl(),
    })
  }
  constructor(private chS:ComentariosHotelService, private router:Router){ }
  aceptar():void{
    this.comentarios_hotel.idComentarioHotel=this.form.value['idComentarioHotel'];
    this.comentarios_hotel.valoracion=this.form.value['valoracion'];
    this.comentarios_hotel.comentario=this.form.value['comentario'];
    if (this.form.value['valoracion'].length>0 &&
      this.form.value['comentario'].length>0){
        this.chS.insert(this.comentarios_hotel).subscribe(data=>{
          this.chS.list().subscribe(data=>{
            this.chS.setList(data)
          })
        })
        this.router.navigate(['comentarios-hotel']);
    } else {
      this.mensaje="Complete todos los datos para ingresar un nuevo comentario.";
    }
  }
}
