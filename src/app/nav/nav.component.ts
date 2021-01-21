import { Component, OnInit } from '@angular/core';
import { SerwisService } from '../_services/serwis.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  constructor(private serwisService: SerwisService) { }

  ngOnInit(): void {
  }

  loggedIn()
  {

   
    return this.serwisService.loggedIn();
    
  }
  logOut()
  {
    return this.serwisService.logout();
  }

}
