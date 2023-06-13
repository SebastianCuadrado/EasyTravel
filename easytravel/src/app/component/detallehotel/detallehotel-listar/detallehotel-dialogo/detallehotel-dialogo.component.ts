import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { DetallehotelService } from 'src/app/service/detallehotel.service';

@Component({
  selector: 'app-detallehotel-dialogo',
  templateUrl: './detallehotel-dialogo.component.html',
  styleUrls: ['./detallehotel-dialogo.component.css']
})
export class DetallehotelDialogoComponent implements OnInit {
  constructor(private dhS: DetallehotelService,
    private dialogRef: MatDialogRef<DetallehotelDialogoComponent>) { }
  ngOnInit(): void {}
    confirmar(estado: boolean){
      this.dhS.setConfirmDelete(estado);
      this.dialogRef.close();
    }
}
