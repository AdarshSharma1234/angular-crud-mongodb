import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './main/main.component';
import { ItemsComponent } from './items/items.component';

const routes: Routes = [
  // {path:'',component:ItemsComponent},
  { path: 'app-main', component: MainComponent },
  // other routes
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
