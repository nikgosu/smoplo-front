import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {CreativesListComponent} from "./components/creatives-list/creatives-list.component";
import {CreativeEditComponent} from "./components/creative-edit/creative-edit.component";
import {LoginComponent} from "./components/login/login.component";

const routes: Routes = [
  {path: '', component: CreativesListComponent},
  {path: 'creative/:id', component: CreativeEditComponent},
  {path: 'creative-new', component: CreativeEditComponent},
  {path: 'login', component: LoginComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
