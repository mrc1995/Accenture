import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { ConsultarUsuariosService } from './../../services/consultar-usuarios/consultar-usuarios.service';
import { Router } from '@angular/router';
import {NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-formulario-credito',
  templateUrl: './formulario-credito.component.html',
  styleUrls: ['./formulario-credito.component.css']
})
export class FormularioCreditoComponent implements OnInit {
  public formGroup: FormGroup;
  isRegister: boolean;
  constructor(
    private formBuilder: FormBuilder,
    private _consultarUsuariosService: ConsultarUsuariosService,
    private router: Router,
    private modalService: NgbModal
    ) { }

  ngOnInit() {
    this.buildForm();
  }

  buildForm(){
    this.formGroup = this.formBuilder.group({
      numeroCedula: ['',Validators.required]
    })
  }

  submitForm(content){
    this._consultarUsuariosService.buscarUsuario(this.formGroup.value.numeroCedula).subscribe(
      response =>{
        var dataResponse;
        dataResponse = response;
        if(dataResponse.status === 200 && dataResponse.usuario.length > 0){
          this.router.navigate(['/solicitar-credito']);
        }else{
          this.isRegister = true;
          this.open(content);
        }
      }
    )
  }

  goRegister(){
    this.router.navigate(['/inscripcion']);
    // this.modalService.close('Save click');
  }

  open(content) {
    this.modalService.open(content);
  }

}
