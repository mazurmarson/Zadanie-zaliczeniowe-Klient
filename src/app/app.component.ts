import { Component, OnInit } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';
import { SerwisService } from './_services/serwis.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  jwtHeleper = new JwtHelperService();

  constructor(private serwisService: SerwisService)
  {

  }

  ngOnInit(): void {
    const token = localStorage.getItem('token');
    if(token)
    {
      this.serwisService.decodedToken = this.jwtHeleper.decodeToken(token);
    }
  }

}
