import {Routes} from "@angular/router";
import {ListComponent} from "../../components/list/list.component";
import {ListResolver} from "../../resolvers/list.resolver";
import {AuthGuard} from "../../guards/auth.guard";
import {CreativeEditComponent} from "../../components/creative-edit/creative-edit.component";
import {CreativeResolver} from "../../resolvers/creative.resolver";
import {LoginComponent} from "../../components/login/login.component";
import {ERoutes} from "../models";

export const ROUTES: Routes = [
  {path: ERoutes.CREATIVES, component: ListComponent, resolve: { list: ListResolver}, canActivate: [AuthGuard]},
  {path: ERoutes.CREATIVE, component: CreativeEditComponent, resolve: { isCreativeFetched: CreativeResolver }, canActivate: [AuthGuard]},
  {path: ERoutes.CREATIVE_NEW, component: CreativeEditComponent, canActivate: [AuthGuard]},
  {path: ERoutes.LOGIN, component: LoginComponent},
];
