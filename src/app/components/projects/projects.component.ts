import { Component, OnInit } from '@angular/core';
import { Project } from 'src/app/common/interfaces';
import projects from '../../../assets/projectes.json'
import { Router } from '@angular/router';
@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})

export class ProjectsComponent implements OnInit {

  constructor(private router: Router) { }

  projects: Project[] | undefined;

  ngOnInit(): void {
    this.projects = projects.projects
  }

  goProject(proj: Project){
    this.router.navigate(["/project", {project: JSON.stringify(proj)}])
  }

}

