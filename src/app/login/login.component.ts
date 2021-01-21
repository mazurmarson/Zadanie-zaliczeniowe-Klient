import { Component, OnInit } from '@angular/core';
import { SerwisService } from '../_services/serwis.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  model: any = {};
  constructor(private serwisService: SerwisService) { }

  ngOnInit(): void {
  }

  login()
  {
    this.serwisService.login(this.model).subscribe(next => {
      console.log('Zalogowales sie do aplikacji');
      console.log(this.model);

    }, error => {
      console.log('Błąd logowania');
      console.log(this.model);
    }
    );
  }

}
