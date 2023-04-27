import { Component } from '@angular/core';
import { PlacesService } from 'src/app/service/places.service';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-places-dialogo',
  templateUrl: './places-dialogo.component.html',
  styleUrls: ['./places-dialogo.component.css']
})
export class PlacesDialogoComponent {
  constructor(private pS: PlacesService,
    private dialogRef: MatDialogRef<PlacesDialogoComponent>) { }
  ngOnInit(): void {}
    confirmar(estado: boolean){
      this.pS.setConfirmDelete(estado);
      this.dialogRef.close();
    }

}
