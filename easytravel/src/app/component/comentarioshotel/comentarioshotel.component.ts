import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-comentarioshotel',
  templateUrl: './comentarioshotel.component.html',
  styleUrls: ['./comentarioshotel.component.css']
})
export class ComentarioshotelComponent implements OnInit{
ngOnInit(): void {

}
constructor(public route: ActivatedRoute) {}
}
