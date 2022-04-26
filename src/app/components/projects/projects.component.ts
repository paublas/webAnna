import { Component, OnInit } from '@angular/core';
import { Project } from 'src/app/common/interfaces';
import projects from '../../../assets/projectes.json'
import { Router } from '@angular/router';
import { Globals } from 'src/globals';
@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})

export class ProjectsComponent implements OnInit {

  constructor(private router: Router, private global: Globals) { }

  projects: any[] | undefined;

  ngOnInit(): void {
    this.projects = projects.projects
  }

  goProject(proj: Project){
    this.router.navigate(["/project", {project: JSON.stringify(proj)}])
  }

  scrollingText_L(){
    if(this.global.idioma == 'cat') return "<3 ¡EI! T'AGRADA EL QUE VEUS? PODEM TREBALLAR PLEGATS!! <3 YENS PODEM POSAR EN CONTACTE A MOREUNISTUFF@GMAIL.COM ;) EM POTS TROBAR A INSTAGRAM @NANA.DENADA (*O*) O BÉ A TRAVÉS D'AQUEST NÚMERO +34655826439";
    return "<3 ¡HEY! ¿LIKING IT SO FAR? ¡LET'S WORK TOGETHER!! <3 YOU CAN CONTACT ME AT MOREUNISTUFF@GMAIL.COM ;) FIND ME ON INSTAGRAM @NANA.DENADA (*O*) OR REACH ME THROUGH MY PHONE +34655826439";

  }

}

