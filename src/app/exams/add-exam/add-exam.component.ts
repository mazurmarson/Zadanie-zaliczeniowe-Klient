import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SerwisService } from 'src/app/_services/serwis.service';

@Component({
  selector: 'app-add-exam',
  templateUrl: './add-exam.component.html',
  styleUrls: ['./add-exam.component.css']
})
export class AddExamComponent implements OnInit {

  id:string;
  model:any= {};
  constructor(private serwisService: SerwisService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.model.courseId = params['id'];
    });
  }

  createExam()
  {
    
    this.serwisService.createExam(this.model).subscribe( next => {
      console.log(this.model);
    }, error => {
      console.log(error);
      console.log(this.model);
    });
  }

  

}
