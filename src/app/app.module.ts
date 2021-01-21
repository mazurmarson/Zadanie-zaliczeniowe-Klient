import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { NavComponent } from './nav/nav.component';
import { appRoutes } from './routes';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SerwisService } from './_services/serwis.service';
import { HttpClientModule } from '@angular/common/http';
import { JwtModule } from '@auth0/angular-jwt';
import { CourseComponent } from './course/course.component';
import { AddCourseComponent } from './course/add-course/add-course.component';
import { ExamsComponent } from './exams/exams.component';
import { EditCourseComponent } from './course/edit-course/edit-course.component';
import { AddExamComponent } from './exams/add-exam/add-exam.component';


export function tokenGetter()
{
  return localStorage.getItem('token');
}

@NgModule({
  declarations: [	
    AppComponent,
    NavComponent,
    LoginComponent,
    RegisterComponent,
    CourseComponent,
    AddCourseComponent,
      ExamsComponent,
      EditCourseComponent,
      AddCourseComponent,
      AddExamComponent
      
   ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    JwtModule.forRoot({
      config: {
         tokenGetter,
         allowedDomains: ['zaliczenie.btry.eu']
         
      }
       
   }),
    RouterModule.forRoot(appRoutes)
  ],

  providers: [
    SerwisService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
