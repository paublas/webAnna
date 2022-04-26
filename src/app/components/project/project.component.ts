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

  public async getJSON(): Promise<any>{
    return this.http.get('./../../assets/projectes acabats/'+this.project.id.substring(1)+'/images.json').toPromise()

  }

  async ngOnInit() {
    const res = this.route.snapshot.paramMap.get('project') //store this variable if you want use further
    if(res!= null) this.project = JSON.parse(res)

    await this.getJSON().then(data => {
      this.images = data.images;
      switch(this.global.idioma){
        case 'eng': { this.text = data.texteng; break}
        case 'cat': { this.text = data.textcat; break;}
        case 'esp': { this.text = data.textesp; break;}
        default: {this.text = data.texteng}
      }
      this.height = data.height

     });
     console.log(this.images)
  }


}

export interface image{
  url: string,
  coords: string,
  margin: string,
  size: string,
  height: string
}
