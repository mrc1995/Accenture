import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import {NgbModal } from '@ng-bootstrap/ng-bootstrap';
import {initDate} from './../../utils/date';
import {CurrencyPipe} from '@angular/common';

@Component({
  selector: 'app-solicitar-credito',
  templateUrl: './solicitar-credito.component.html',
  styleUrls: ['./solicitar-credito.component.css']
})
export class SolicitarCreditoComponent implements OnInit {
  public formGroup: FormGroup;
  salaryValid: boolean;
  valueCredit: number;
  messageCredit :string = '';
  date: any;
  value: boolean;

  constructor(
    private formBuilder: FormBuilder, 
    private modalService: NgbModal, 
    private _initDate: initDate,
    private currencyPipe: CurrencyPipe
  ) { }

  ngOnInit() {
    this.buildForm();
    this.date = this._initDate.initDate('dia');
  }

  buildForm(){
    this.formGroup = this.formBuilder.group({
      nombreEmpresa: ['', Validators.required],
      nitEmpresa: ['', Validators.required],
      salarioActual: ['', Validators.required],
      fechaIngreso: ['', Validators.required],
    })
  }

  submitForm(content){
    this.valueAprobate();
    if(this.validateTimeWorked() && this.valueCredit > 0){
      this.messageCredit = 'Se aprobo un credito por el valor de '+ this.currencyPipe.transform(this.valueCredit, 'USD');
    }else if(!this.validateTimeWorked() && this.valueCredit > 0){
      this.messageCredit = 'Usted no lleva mas de año y medio en la empresa por lo tanto no puede acceder a un credito'
    }else if(this.validateTimeWorked() && this.valueCredit === 0){
      this.messageCredit = 'Usted lleva mas de año y medio en la empresa pero su salario no cubre los valores establecidos por nuestra entidad para acceder a un credito'
    }else{
      this.messageCredit = 'Usted no lleva mas de un año y medio en la empresa y su salario no cumple con el tope establecido para acceder a un credito'
    }
    this.buildForm();
    this.open(content);
  }

  validateTimeWorked() {
    if(this.formGroup.value.fechaIngreso !== ''){
      let date = this.formGroup.value.fechaIngreso.split("-");
      let time = 18;
      let mydate = new Date();
      var currdate = new Date();
      mydate.setFullYear(date[0], date[1] - 1, date[2]);
      currdate.setMonth(currdate.getMonth() - time);
      if(currdate > mydate){
        return true;
      }else{
        return false;
      }
    }
  }

  valueAprobate(){
    let salary = this.formGroup.value.salarioActual;
    if(salary >= 800000 && salary <= 1000000){
      this.valueCredit = 5000000;
    }else if(salary >= 1000000 && salary <= 4000000){
      this.valueCredit = 20000000;
    }else if(salary >= 4000000){
      this.valueCredit = 50000000;
    }else{
      this.valueCredit = 0;
    }
  }

  open(content) {
    this.modalService.open(content);
  }

  valueCorrect(){
    let value = this.formGroup.value.salarioActual;
    value > 100000000 ? this.value = true : this.value = false;
  }

}
