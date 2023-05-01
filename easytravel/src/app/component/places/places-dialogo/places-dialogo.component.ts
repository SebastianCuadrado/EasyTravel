import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { PlacesService } from 'src/app/service/places.service';

@Component({
  selector: 'app-places-dialogo',
  templateUrl: './places-dialogo.component.html',
  styleUrls: ['./places-dialogo.component.css']
})
export class PlacesDialogoComponent implements OnInit {
  constructor(private pS: PlacesService,
    private dialogRef: MatDialogRef<PlacesDialogoComponent>) { }
  ngOnInit(): void {}
    confirmar(estado: boolean){
      this.pS.setConfirmDelete(estado);
      this.dialogRef.close();
    }
}
