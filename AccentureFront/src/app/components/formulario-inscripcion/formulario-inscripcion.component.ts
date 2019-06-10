import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { Usuario } from './../../utils/usuario';
import { GuardarUsuariosService } from './../../services/guardar-usuarios/guardar-usuarios.service';
import { ConsultarUsuariosService } from './../../services/consultar-usuarios/consultar-usuarios.service';
import {initDate} from './../../utils/date';
import {NgbModal } from '@ng-bootstrap/ng-bootstrap';
@Component({
  selector: 'app-formulario-inscripcion',
  templateUrl: './formulario-inscripcion.component.html',
  styleUrls: ['./formulario-inscripcion.component.css']
})
export class FormularioInscripcionComponent implements OnInit {
  public formGroup: FormGroup;
  public messageService: string;
  public ageOld: boolean;
  public date: any;
  public inputDisabled: boolean = true;
  public messageRegister: boolean;
  constructor(
    private formBuilder: FormBuilder,
    private _guardarUsuariosService: GuardarUsuariosService,
    private _consultarUsuariosService: ConsultarUsuariosService,
    private _initDate: initDate,
    private modalService: NgbModal
  ) { }

  ngOnInit() {
    this.buildForm();
    this.date = this._initDate.initDate('');
  }

  buildForm() {
    this.formGroup = this.formBuilder.group({
      numeroCedula: ['', Validators.required,],
      nombre: ['', Validators.required],
      apellido: ['', Validators.required],
      fechaNacimiento: [Validators.required]
    });
  }

  submitForm(content) {
    this.validateAge();
    let user: Usuario = {
      id: this.formGroup.value.numeroCedula,
      nombre: this.formGroup.value.nombre,
      apellido: this.formGroup.value.apellido,
      fechaNacimiento: this.formGroup.value.fechaNacimiento
    }
    this._guardarUsuariosService.saveUser(user).subscribe(
      response => {
        let dataResponse;
        dataResponse = response;
        if (dataResponse.status === 200) {
          this.messageService = dataResponse.mensaje;
          this.open(content);
        }
      }, error => {
        this.messageService = "Se presento un error intentelo de nuevo mas tarde";
      }
    )
    this.buildForm();
  }

  validateAge() {
    if (this.formGroup.value.fechaNacimiento !== '') {
      let date = this.formGroup.value.fechaNacimiento.split("-");
      let age = 18;
      let mydate = new Date();
      mydate.setFullYear(date[0], date[1] - 1, date[2]);
      var currdate = new Date();
      currdate.setFullYear(currdate.getFullYear() - age);
      currdate < mydate ? this.ageOld = true : this.ageOld = false;
    }
  }

  validateUserinDB(){
    this._consultarUsuariosService.buscarUsuario(this.formGroup.value.numeroCedula).subscribe(
      response => {
        let dataResponse;
        dataResponse = response;
        if(dataResponse.usuario.length > 0){
          this.inputDisabled = true;
          this.messageRegister = true;
        }else{
          this.inputDisabled = false;
          this.messageRegister = false;
        }
      }
    )
  }

  open(content) {
    this.modalService.open(content);
  }
}
