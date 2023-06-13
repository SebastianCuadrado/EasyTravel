import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detallehotel',
  templateUrl: './detallehotel.component.html',
  styleUrls: ['./detallehotel.component.css']
})
export class DetallehotelComponent implements OnInit {

  constructor(public route:ActivatedRoute){}
  ngOnInit(): void {}
}
