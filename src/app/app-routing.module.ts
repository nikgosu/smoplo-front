import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {CreativesListComponent} from "./components/creatives-list/creatives-list.component";
import {CreativeEditComponent} from "./components/creative-edit/creative-edit.component";
import {LoginComponent} from "./components/login/login.component";
import {CreativeResolver} from "./resolvers/creative.resolver";
import {AuthGuard} from "./guards/auth.guard";

const routes: Routes = [
  {path: '', component: CreativesListComponent, canActivate: [AuthGuard]},
  {path: 'creative/:id', component: CreativeEditComponent, resolve: { isCreativeFetched: CreativeResolver }, canActivate: [AuthGuard]},
  {path: 'creative-new', component: CreativeEditComponent, canActivate: [AuthGuard]},
  {path: 'login', component: LoginComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
