import { Component } from '@angular/core';
import { PlacesDialogoComponent } from 'src/app/component/places/places-listar/places-dialogo/places-dialogo.component';
import { PaqueteService } from 'src/app/service/paquete.service';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-paquete-dialogo',
  templateUrl: './paquete-dialogo.component.html',
  styleUrls: ['./paquete-dialogo.component.css']
})
export class PaqueteDialogoComponent {
  constructor(private pS: PaqueteService,
    private dialogRef: MatDialogRef<PlacesDialogoComponent>) { }
  ngOnInit(): void {}
    confirmar(estado: boolean){
      this.pS.setConfirmDelete(estado);
      this.dialogRef.close();
    }
}
