import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SerwisService } from 'src/app/_services/serwis.service';

@Component({
  selector: 'app-edit-course',
  templateUrl: './edit-course.component.html',
  styleUrls: ['./edit-course.component.css']
})
export class EditCourseComponent implements OnInit {
  model:any = {};
  id:string;
  isLoaded: boolean = false;
  constructor(private serwisService: SerwisService, private route: ActivatedRoute) { }

  ngOnInit() {

    this.route.params.subscribe(params => {
      this.id = params['id'];
    });

    this.getCourse();

  }

  getCourse()
  {
    this.serwisService.getCourse(this.id).subscribe( (response: any) => {
      this.model = response.record;
      this.isLoaded = true;
      console.log(response.record);
    } );
  }

  editCourse()
  {

    fetch('https://api.ipify.org/?format=json').then(results => results.json()).then(data => this.model.ipAddress);
    let formData = new FormData();
    formData.append('createdDate',this.model.createdDate);
    formData.append('modifiedDate',this.model.modifiedDate);
    formData.append('ipAddress',this.model.ipAddress);
    formData.append('userId',this.model.userId);
     formData.append('title',this.model.title);
     formData.append('description',this.model.description);
     formData.append('id', this.model.id);

    this.serwisService.editCourse(formData).subscribe(next => {
      console.log(this.model);
    }, error => {
      console.log(error);
    });
  }
}
