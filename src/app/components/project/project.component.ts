import { Component, Input, OnInit } from '@angular/core';
import { Project } from 'src/app/common/interfaces';
import { ActivatedRoute } from '@angular/router';
import { HttpClient} from '@angular/common/http'
import { Globals } from 'src/globals';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss']
})
export class ProjectComponent implements OnInit {

  constructor(private route: ActivatedRoute, private http: HttpClient, public global: Globals) { }

  project!: Project;



  images: any;
  text: string | undefined;
  height: string | undefined;
  with: string | undefined;
  date: string | undefined;

  datos: any;

  public async getJSON(): Promise<any>{
    return this.http.get('./../../assets/projectes acabats/'+this.project.id.substring(1)+'/images.json').toPromise()

  }

  async ngOnInit() {
    const res = this.route.snapshot.paramMap.get('project') //store this variable if you want use further
    if(res!= null) this.project = JSON.parse(res)

    await this.getJSON().then(data => {
      this.datos = data
      this.images = data.images;
      this.text = data.texteng
      this.height = data.height

     });
  }

  with_L(){
    if(this.global.idioma == 'cat' ) return this.project.with[1].cat
    else if(this.global.idioma == 'eng' ) return this.project.with[0].eng
    return this.project.with[0].eng
  }

  date_L(){
    if(this.global.idioma == 'cat' ) return this.project.date[1].cat
    else if(this.global.idioma == 'eng' ) return this.project.date[0].eng
    return this.project.date[0].eng
  }

  text_L(){
    if(this.global.idioma == 'eng' ) return this.datos.texteng; 
    else if(this.global.idioma == 'cat' ) return this.datos.textcat;
    else return this.datos.texteng
  }
  

}

export interface image{
  url: string,
  coords: string,
  margin: string,
  size: string,
  height: string
}
