import { Injectable } from '@angular/core';
import { Doctor } from './doctor.model';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class DoctorService {
  doctors: Doctor[] = [];
  public newDoctor = new Subject<Doctor>();

  constructor() { }

  saveDoctor(doctor: Doctor) {
  	this.doctors.push(doctor);
  }


  getAllDoctors() {
  	return this.doctors;
  }

  getDoctorsToPatient(doctor: Doctor) {
  	this.newDoctor.next(doctor);
  }

}
