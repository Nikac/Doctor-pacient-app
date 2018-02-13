import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { DoctorsComponent } from './doctors/doctors.component';
import { PatientsComponent } from './patients/patients.component';
import { FormDoctorComponent } from './doctors/form-doctor/form-doctor.component';
import { FormPatientComponent } from './patients/form-patient/form-patient.component';

import { DoctorService } from './doctors/doctor.service';
import { PatientService } from './patients/patient.service';


@NgModule({
  declarations: [
    AppComponent,
    DoctorsComponent,
    PatientsComponent,
    FormDoctorComponent,
    FormPatientComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    DoctorService,
    PatientService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
