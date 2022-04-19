import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutComponent } from './components/about/about.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { NanadenadaComponent } from './components/nanadenada/nanadenada.component';
import { ProjectComponent } from './components/project/project.component';
import {HttpClientModule}  from '@angular/common/http'
import { ClipboardModule } from "@angular/cdk/clipboard";

  @NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    ProjectsComponent,
    NanadenadaComponent,
    ProjectComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ClipboardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
