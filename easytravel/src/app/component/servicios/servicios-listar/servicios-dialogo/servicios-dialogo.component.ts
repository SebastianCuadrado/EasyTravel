import { Component,OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { ServiciosService } from 'src/app/service/servicios.service';

@Component({
  selector: 'app-servicios-dialogo',
  templateUrl: './servicios-dialogo.component.html',
  styleUrls: ['./servicios-dialogo.component.css']
})
export class ServiciosDialogoComponent implements OnInit {
  constructor(private sS: ServiciosService,
    private dialogRef: MatDialogRef<ServiciosDialogoComponent>) { }
  ngOnInit(): void {}
    confirmar(estado: boolean){
      this.sS.setConfirmDelete(estado);
      this.dialogRef.close();
    }
}
