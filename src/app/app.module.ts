import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutComponent } from './components/about/about.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { ProjectComponent } from './components/project/project.component';
import {HttpClientModule}  from '@angular/common/http'
import { ClipboardModule } from "@angular/cdk/clipboard";
import { CommonModule } from '@angular/common';
import {MatIconModule} from '@angular/material/icon'
import { Globals } from 'src/globals';
import { CvComponent } from './components/cv/cv.component';

  @NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    ProjectsComponent,
    ProjectComponent,
    CvComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ClipboardModule,
    CommonModule,
    MatIconModule
  ],
  providers: [Globals],
  bootstrap: [AppComponent]
})
export class AppModule { }
