import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { PatientService } from '../patient.service';

@Component({
  selector: 'form-patient',
  templateUrl: './form-patient.component.html',
  styleUrls: ['./form-patient.component.css']
})
export class FormPatientComponent implements OnInit {
  @ViewChild('f') form: NgForm;

  constructor(private patientService: PatientService) { }

  ngOnInit() {
  }

  onSubmit(form) {
    console.log(form);
    console.log(this.patientService.getNextId());
    this.form['id'] = this.patientService.getNextId();
  	this.patientService.savePatient(form);
  	this.form.reset();
  }

}
