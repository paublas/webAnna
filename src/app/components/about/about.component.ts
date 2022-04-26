import { Component, Inject, OnInit } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { Globals } from 'src/globals';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  constructor(@Inject(DOCUMENT) private document: Document, public global: Globals) { }

  hideSharedLinkCopyMessage:boolean = false;


  ngOnInit(): void {
    console.log(this.global.idioma)
  }

  navigate(url: string){
    this.document.location.href = url
  }

  FadeOutLink() {

    this.hideSharedLinkCopyMessage = true;
    setTimeout( () => {
          this.hideSharedLinkCopyMessage = false;
        }, 5000);
   }

}
