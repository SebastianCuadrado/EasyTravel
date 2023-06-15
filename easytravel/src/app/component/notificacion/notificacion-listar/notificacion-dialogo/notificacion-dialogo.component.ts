import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { NotificacionService } from 'src/app/service/notificacion.service';

@Component({
  selector: 'app-notificacion-dialogo',
  templateUrl: './notificacion-dialogo.component.html',
  styleUrls: ['./notificacion-dialogo.component.css']
})
export class NotificacionDialogoComponent implements OnInit {
  constructor(private nS: NotificacionService,
    private dialogRef: MatDialogRef<NotificacionDialogoComponent>) { }
  ngOnInit(): void {}
    confirmar(estado: boolean){
      this.nS.setConfirmDelete(estado);
      this.dialogRef.close();
    }
}
