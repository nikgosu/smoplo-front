import {NgModule} from '@angular/core';
import {AppComponent} from './components/app/app.component';
import {AppRoutingModule} from "./router/app-routing.module";
import {StoreModule} from "@ngrx/store";
import {appReducers} from "./store/reducers/app.reducers";
import {EffectsModule} from "@ngrx/effects";
import {CreativesEffects} from "./store/effects/creatives.effects";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {BrowserModule} from "@angular/platform-browser";
import {HttpClientModule} from "@angular/common/http";
import {UserEffects} from "./store/effects/user.effects";
import {MatSidenavModule} from "@angular/material/sidenav";
import {CampaignsEffects} from "./store/effects/campaigns.effects";
import {PlacementsEffects} from "./store/effects/placements.effects";
import {CampaignsService} from "./services/campaigns.service";
import {CreativesService} from "./services/creatives.service";
import {PlacementsService} from "./services/placements.service";
import {HttpAPIService} from "./services/http-api.service";
import {UserService} from "./services/user.service";
import {ListService} from "./services/list.service";
import {CampaignsModule} from "./modules/campaigns/campaigns.module";
import {PlacementsModule} from "./modules/placements/placements.module";
import {CreativesModule} from "./modules/creatives/creatives.module";
import {SharedModule} from "./modules/shared/shared.module";

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    AppRoutingModule,
    StoreModule.forRoot(appReducers, {}),
    EffectsModule.forRoot([CreativesEffects, UserEffects, CampaignsEffects, PlacementsEffects]),
    BrowserAnimationsModule,
    BrowserModule,
    HttpClientModule,
    CampaignsModule,
    PlacementsModule,
    CreativesModule,
    SharedModule,
  ],
  providers: [
    CampaignsService,
    PlacementsService,
    CreativesService,
    HttpAPIService,
    UserService,
    ListService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
