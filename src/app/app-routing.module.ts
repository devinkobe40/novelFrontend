import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { CircleComponent } from './circle/circle.component';
import { MessageComponent } from './message/message.component';
import { WorksComponent } from './works/works.component';
import { NovelInformationComponent } from './novel-information/novel-information.component';
import { HomepageComponent } from './homepage/homepage.component';
import { ProfileComponent } from './profile/profile.component';
import { LibraryComponent } from './library/library.component';

const routes: Routes = [
  {path:'', redirectTo:'/homepage', pathMatch:'full'},
  {path:'library', component:LibraryComponent},
  {path:'homepage', component:HomepageComponent},
  {path: 'profile', component:ProfileComponent,
   children: [
     {path: 'about', component: AboutComponent},
     {path: 'circle', component: CircleComponent},
     {path: 'messages', component: MessageComponent},
     {path: 'works', component: WorksComponent},
   ]
 },
  {path: 'novel', component: NovelInformationComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
