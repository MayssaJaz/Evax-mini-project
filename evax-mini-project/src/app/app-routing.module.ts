import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DataPageComponent } from './pages/data-page/data-page.component';
import { HomePageComponent } from './pages/home-page/home-page.component';

const routes: Routes = [
  { path: '', component: HomePageComponent },
  { path: 'data', component: DataPageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
