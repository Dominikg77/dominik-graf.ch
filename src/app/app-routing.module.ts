import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutMeComponent } from './about-me/about-me.component';
import { ContactMeComponent } from './contact-me/contact-me.component';
import { HomeComponent } from './home/home.component';
import { ImprintComponent } from './imprint/imprint.component';
import { LegalNoticeComponent } from './legal-notice/legal-notice.component';
import { MySkillsComponent } from './my-skills/my-skills.component';
import { MyWorkComponent } from './my-work/my-work.component';

const routes: Routes = [
{path: '',component: HomeComponent},
{path: '',component: MySkillsComponent},
{path: '',component: MyWorkComponent},
{path: '',component: AboutMeComponent},
{path: '',component: ContactMeComponent},
{path: 'imprint',component: ImprintComponent},
{path: 'legalnotice',component: LegalNoticeComponent},



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
