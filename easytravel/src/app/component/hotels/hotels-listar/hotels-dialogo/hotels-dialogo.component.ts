import { Component,OnInit } from '@angular/core';
import { HotelsService } from 'src/app/service/hotels.service';
import { MatDialogRef } from '@angular/material/dialog';
@Component({
  selector: 'app-hotels-dialogo',
  templateUrl: './hotels-dialogo.component.html',
  styleUrls: ['./hotels-dialogo.component.css']
})
export class HotelsDialogoComponent implements OnInit {
  constructor(private hS: HotelsService,
    private dialogRef: MatDialogRef<HotelsDialogoComponent>) { }
  ngOnInit(): void {}
    confirmar(estado: boolean){
      this.hS.setConfirmDelete(estado);
      this.dialogRef.close();
    }
}
