import { Injectable } from '@angular/core';
import { Patient } from './patient.model';
import { DoctorService } from '../doctors/doctor.service';
import { Doctor } from '../doctors/doctor.model';

@Injectable()
export class PatientService {
  patients: Patient[] = [];


  constructor(private doctorService: DoctorService) { }

  savePatient(patient: Patient) {
  	this.patients.push(patient);
  	this.patients = this.patients.sort((p1, p2) => p1.id > p2.id ? 1 : -1);
  }

  getAllPatients() {
  	return this.patients;
  }

  getAllDoctorsfromDoctorService() {
  	 return this.doctorService.getAllDoctors();
  }
  getNextId() {
    if (this.patients.length === 0) {
      return 0;
    }
    return this.patients[this.patients.length - 1].id + 1;
  }

  updatePatient(patient: Patient) {
    this.patients.forEach(p => {
      if (patient.id === p.id) {
        p = patient;
      }
    });
  }

}
