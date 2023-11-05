import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateCiteComponent } from './create-cite/create-cite.component';

const routes: Routes = [
  { path: 'create', component: CreateCiteComponent}
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
