import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Doctor } from '../doctor.model';
import { DoctorService } from '../doctor.service';

@Component({
  selector: 'form-doctor',
  templateUrl: './form-doctor.component.html',
  styleUrls: ['./form-doctor.component.css']
})
export class FormDoctorComponent implements OnInit {
  @ViewChild('f') form: NgForm;
 

  constructor(private doctorService: DoctorService) { }

  ngOnInit() {
  }

   onSubmit(form) {
  	this.doctorService.saveDoctor(form);
    this.doctorService.getDoctorsToPatient(form);
  	this.form.reset();
  }

}
