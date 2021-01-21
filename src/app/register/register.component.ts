import { Component, OnInit } from '@angular/core';
import { SerwisService } from '../_services/serwis.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  model: any = {};
  constructor(private serwisService: SerwisService) { }

  ngOnInit(): void {
  }

  register()
  {
    this.serwisService.register(this.model).subscribe( () => {
      console.log('Rejestracja udana');
    }, error => {
      console.log(error);
    });
  }

}
