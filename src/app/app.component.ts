import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Globals } from 'src/globals';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent{
  title = 'webAnna';

  showIdiomes: boolean = false


  constructor(private router: Router, public global: Globals){}

  projectsPage(){
    this.router.navigate(["projects"])
  }

  aboutPage(){
    this.router.navigate(["about"])
  }

  selectIdioma(idioma: string){
    this.global.idioma = idioma;
    this.showIdiomes = false;
  }


}
