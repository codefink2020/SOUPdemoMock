import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './header/header.component';
import {MatToolbarModule} from "@angular/material/toolbar";
import { ProjectComponent } from './project/project.component';
import {MatTabsModule} from "@angular/material/tabs";
import { DetailsComponent } from './project/details/details.component';
import { TeammemberComponent } from './project/teammember/teammember.component';
import { SoupComponent } from './project/soup/soup.component';
import { AdminComponent } from './project/admin/admin.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ProjectComponent,
    DetailsComponent,
    TeammemberComponent,
    SoupComponent,
    AdminComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatTabsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
