import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { JwtHelperService } from '@auth0/angular-jwt';
import { map } from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})
export class SerwisService {

    baseUrl = 'https://zaliczenie.btry.eu/api/';
    jwtHelper = new JwtHelperService();
    decodedToken: any;
constructor(private http: HttpClient) { }

login(model: any)
{
return this.http.post(this.baseUrl + 'auth/login', model)
.pipe(map( (response: any) => {
  const worker = response;
  if(worker)
    {
      localStorage.setItem('token', worker.message);
      this.decodedToken = this.jwtHelper.decodeToken(worker.message);
      console.log(worker.message);
      console.log(response);
    }
  } ));
}

register(model: any)
{
    return this.http.post(this.baseUrl+'auth/register', model);
}

loggedIn()
{
  const token = localStorage.getItem('token');
  return !this.jwtHelper.isTokenExpired(token);
}
logout()
{
  localStorage.removeItem('token');
  console.log('Zostałeś wylogowany');
  
//  this.signalRService.DeleteUserIdConnection(this.id.toString());
}

getCourses()
{
    return this.http.get(this.baseUrl + 'course');
}

getCourse(id:string)
{
  return this.http.get(this.baseUrl + 'course/' + id);
}

createCourse(formData:FormData)
{
    return this.http.post(this.baseUrl + 'course', formData);
}

deleteCourse(id:string)
{
    return this.http.delete(this.baseUrl + 'course/' + id );
}

editCourse(formData:FormData)
{
  return this.http.put(this.baseUrl + 'course', formData);
}

getExams(id:string)
{
    return this.http.get(this.baseUrl + 'course/' + id);
}

createExam(model:any)
{
    return this.http.post(this.baseUrl + 'exams', model);
}

changeStatus(id:any, model:any)
{
  return this.http.put(this.baseUrl + 'exams/' + id, model );
}

deleteExam(id:string)
{
  return this.http.delete(this.baseUrl + 'exams/' + id);
}

editExam(model:any)
{
  return this.http.put(this.baseUrl + 'exams', model);
}



}
