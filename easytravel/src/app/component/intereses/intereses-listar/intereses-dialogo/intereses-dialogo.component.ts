import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { InteresesService } from 'src/app/service/intereses.service';

@Component({
  selector: 'app-intereses-dialogo',
  templateUrl: './intereses-dialogo.component.html',
  styleUrls: ['./intereses-dialogo.component.css']
})
export class InteresesDialogoComponent implements OnInit {
  constructor(private iS: InteresesService,
    private dialogRef: MatDialogRef<InteresesDialogoComponent>) { }
  ngOnInit(): void {}
    confirmar(estado: boolean){
      this.iS.setConfirmDelete(estado);
      this.dialogRef.close();
    }
}
