import {Routes} from "@angular/router";
import {ListComponent} from "../../components/UI/list/list.component";
import {AuthGuard} from "../../guards/auth.guard";
import {CreativeEditComponent} from "../../components/creative-edit/creative-edit.component";
import {ListItemResolver} from "../../resolvers/list-item.resolver";
import {LoginComponent} from "../../components/login/login.component";
import {ERoutes} from "../models";

const creativesRoutes = [
  {path: ERoutes.CREATIVES, component: ListComponent, canActivate: [AuthGuard]},
  {
    path: ERoutes.CREATIVE,
    component: CreativeEditComponent,
    resolve: {creative: ListItemResolver},
    canActivate: [AuthGuard]
  },
  {path: ERoutes.CREATIVE_NEW, component: CreativeEditComponent, canActivate: [AuthGuard]},
]

const placementsRoutes = [
  {path: ERoutes.PLACEMENTS, component: ListComponent, canActivate: [AuthGuard]},
  {path: ERoutes.CAMPAIGN_PLACEMENTS, component: ListComponent, canActivate: [AuthGuard]},
  {
    path: ERoutes.PLACEMENT,
    component: CreativeEditComponent,
    resolve: {isCreativeFetched: ListItemResolver},
    canActivate: [AuthGuard]
  }
]

const campaignsRoutes = [
  {path: ERoutes.CAMPAIGNS, component: ListComponent, canActivate: [AuthGuard]},
  {
    path: ERoutes.CAMPAIGN,
    component: CreativeEditComponent,
    resolve: {isCreativeFetched: ListItemResolver},
    canActivate: [AuthGuard]
  }
]

export const ROUTES: Routes = [
  { path: '', redirectTo: ERoutes.CAMPAIGNS, pathMatch: 'full' },
  ...creativesRoutes,
  ...placementsRoutes,
  ...campaignsRoutes,
  {path: ERoutes.LOGIN, component: LoginComponent},
];


