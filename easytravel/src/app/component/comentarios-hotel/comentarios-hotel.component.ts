import { Component,OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router'
@Component({
  selector: 'app-comentarios-hotel',
  templateUrl: './comentarios-hotel.component.html',
  styleUrls: ['./comentarios-hotel.component.css']
})
export class ComentariosHotelComponent implements OnInit {
  constructor(public route:ActivatedRoute){}
  ngOnInit(): void {

  }
}
