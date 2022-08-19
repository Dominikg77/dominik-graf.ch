import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ImprintComponent } from './imprint/imprint.component';
import { LegalNoticeComponent } from './legal-notice/legal-notice.component';
import { HomeComponent } from './home/home.component';
import { MySkillsComponent } from './my-skills/my-skills.component';
import { MyWorkComponent } from './my-work/my-work.component';
import { AboutMeComponent } from './about-me/about-me.component';
import { ContactMeComponent } from './contact-me/contact-me.component';
import { MainComponent } from './main/main.component';
import { FormsModule } from '@angular/forms';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BackTopComponent } from './back-top/back-top.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ImprintComponent,
    LegalNoticeComponent,
    HomeComponent,
    MySkillsComponent,
    MyWorkComponent,
    AboutMeComponent,
    ContactMeComponent,
    MainComponent,
    BackTopComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatSnackBarModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }