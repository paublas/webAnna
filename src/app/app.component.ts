import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'webAnna';

  constructor(private router: Router){}

  nanaPage(){
    this.router.navigate(["nanadenada"])
  }
  
  projectsPage(){
    this.router.navigate(["projects"])
  }

  aboutPage(){
    this.router.navigate(["about"])

  }

}
