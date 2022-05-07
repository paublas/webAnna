import { Component, OnInit } from '@angular/core';
import { Globals } from 'src/globals';

@Component({
  selector: 'app-cv',
  templateUrl: './cv.component.html',
  styleUrls: ['./cv.component.scss']
})
export class CvComponent implements OnInit {

  constructor(public global: Globals) { }

  public imgs2 = ['', '.1', '.2', '.3'];
  public imgs3 = ['', '.1'];
  public imgs4 = ['', '.1', '.2'];
  public imgs5 = ['', '.1', '.2'];
  public imgs6 = ['', '.1', '.2', '.3'];
  public imgs7 = ['', '.1', '.2', '.3', '.4', '.5', '.6', '.7'];

  index: number = 0;

  index2: string = ''
  index3: string = ''
  index4: string = ''
  index5: string = ''
  index6: string = ''
  index7: string = ''


  ngOnInit(): void {
    this.timeout()
  }

  
  seconds = 2;
  
  timeout(){
    setTimeout(() => {
      this.index++;
      this.index2 = this.imgs2[(this.index%this.imgs2.length)]
      this.index3 = this.imgs3[(this.index%this.imgs3.length)]
      this.index4 = this.imgs4[(this.index%this.imgs4.length)]
      this.index5 = this.imgs5[(this.index%this.imgs5.length)]
      this.index6 = this.imgs6[(this.index%this.imgs6.length)]
      this.index7 = this.imgs7[(this.index%this.imgs7.length)]

      console.log(this.index)
      this.timeout();
    }, this.seconds * 1000);
    
  }



}

