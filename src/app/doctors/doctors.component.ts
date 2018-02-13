import { Component, OnInit, ViewChild } from '@angular/core';
import { Doctor } from './doctor.model';
import { DoctorService } from './doctor.service';

@Component({
  selector: 'doctors',
  templateUrl: './doctors.component.html',
  styleUrls: ['./doctors.component.css']
})
export class DoctorsComponent implements OnInit { 
   doctors: Doctor[] = [];

  constructor(private doctorService: DoctorService) { }

  ngOnInit() {
  	this.doctors = this.doctorService.getAllDoctors();
  }

 

}
