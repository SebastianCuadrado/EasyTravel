import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-empresa-transporte',
  templateUrl: './empresa-transporte.component.html',
  styleUrls: ['./empresa-transporte.component.css']
})
export class EmpresaTransporteComponent implements OnInit{
  constructor(public route:ActivatedRoute){}
  ngOnInit(): void {
}
}
