import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DataPageComponent } from './view_model/data-page/data-page.component';
import { HomePageComponent } from './view_model/home-page/home-page.component';
import { ProfilePageComponent } from './view_model/profile-page/profile-page.component';

const routes: Routes = [
  { path: '', component: HomePageComponent },
  { path: 'data', component: DataPageComponent },
  { path: 'profile', component: ProfilePageComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
