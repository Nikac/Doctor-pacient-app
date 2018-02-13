import { Component, OnInit } from '@angular/core';
import { Patient } from './patient.model';
import { PatientService } from './patient.service';
import { Doctor } from '../doctors/doctor.model';
import { DoctorService } from '../doctors/doctor.service';

@Component({
  selector: 'patients',
  templateUrl: './patients.component.html',
  styleUrls: ['./patients.component.css']
})
export class PatientsComponent implements OnInit {
  patients: Patient[];
  doctors: Doctor[];
  choosenDoctor: string;


  constructor(private patientService: PatientService,
  			  private doctorService: DoctorService) { }

  ngOnInit() {
  	this.patients = this.patientService.getAllPatients();
  	this.doctors = this.patientService.getAllDoctorsfromDoctorService();
  }

  onClick(patient, f) {
  	patient.doctor = f;
    this.patientService.updatePatient(f);
    this.patients = this.patientService.getAllPatients();
    if (patient.doctor  === '(izaberite lekara)') {
      patient.doctor = null;
      return true;
    } else {
      return false;
    }
  }

}
