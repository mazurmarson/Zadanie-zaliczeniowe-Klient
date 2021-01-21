import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SerwisService } from '../_services/serwis.service';

@Component({
  selector: 'app-exams',
  templateUrl: './exams.component.html',
  styleUrls: ['./exams.component.css']
})
export class ExamsComponent implements OnInit {

  id:any;
  model:any;
  exams:any=[];
  constructor(private serwisService: SerwisService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.id = params['id'];
    });

    this.getExams();
  }

  getExams()
  {
    this.serwisService.getExams(this.id).subscribe( ( response: any) => {
      this.model = response;
      this.exams = response.record.exams;
      console.log(response);
      console.log(response.record.exams);
    },error => {
      console.log(error);
    } );
  }

  changeStatus(exam:any)
  {
    this.serwisService.changeStatus(exam.id, exam).subscribe( next => {
      console.log(this.model);
    }, error => {
      console.log(error);
    });
    this.getExams();

    
  }

  deleteExam(id:string)
  {
    this.serwisService.deleteExam(id).subscribe( (response: any) => {
      console.log(response);
    }, error => {
      console.log('Nie udało się usunąć egzaminu');
    } );

    this.getExams();
  }

  refresh()
  {
    this.getExams();
  }

}
