import { Component } from '@angular/core';
import { EmpresaTransporteService } from 'src/app/service/empresa-transporte.service';
import { MatDialogRef } from '@angular/material/dialog';
@Component({
  selector: 'app-empresa-transporte-dialogo',
  templateUrl: './empresa-transporte-dialogo.component.html',
  styleUrls: ['./empresa-transporte-dialogo.component.css']
})
export class EmpresaTransporteDialogoComponent {
  constructor(private tS: EmpresaTransporteService,
    private dialogRef: MatDialogRef<EmpresaTransporteDialogoComponent>) { }
  ngOnInit(): void {}
    confirmar(estado: boolean){
      this.tS.setConfirmDelete(estado);
      this.dialogRef.close();
    }
}
