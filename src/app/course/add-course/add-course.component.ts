import { Component, OnInit } from '@angular/core';
import { SerwisService } from 'src/app/_services/serwis.service';

@Component({
  selector: 'app-add-course',
  templateUrl: './add-course.component.html',
  styleUrls: ['./add-course.component.css']
})
export class AddCourseComponent implements OnInit {

  constructor(private serwisSerice: SerwisService) { }
  model:any = {};

  ngOnInit() {
  }

  createCourse()
  {

    fetch('https://api.ipify.org/?format=json').then(results => results.json()).then(data => this.model.ipAddress);

    let formData = new FormData();
    formData.append('createdDate',this.model.createdDate);
    formData.append('modifiedDate',this.model.modifiedDate);
    formData.append('ipAddress',this.model.ipAddress);
    formData.append('userId',this.model.userId);
    formData.append('title',this.model.title);
    formData.append('description',this.model.description);

    this.serwisSerice.createCourse(formData).subscribe(next => {
      console.log(formData);
    }, error => {
      console.log(error);
    });

  }

  

}
