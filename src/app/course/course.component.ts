import { Component, OnInit } from '@angular/core';
import { SerwisService } from '../_services/serwis.service';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent implements OnInit {

  constructor(private serwisService: SerwisService) { }
  courses: any = {};

  ngOnInit(): void {
    this.loadCourses();
  }

  loadCourses()
  {
    this.serwisService.getCourses().subscribe( ( response: any) => {
        this.courses = response;
        console.log(this.courses);
    }, error => {
      console.log('Nie udało sie pobrać kursów');
    } );
  }

  deleteCourse(id:string)
  {
    this.serwisService.deleteCourse(id).subscribe( (response: any) => {
      console.log(response);
    }, error => {
      console.log('Nie udało się usunąć przedmiotu');
    } );
  }
    

  

}
