import {NgModule} from '@angular/core';
import {AppComponent} from './components/app/app.component';
import {AppRoutingModule} from "./router/app-routing.module";
import {StoreModule} from "@ngrx/store";
import {appReducers} from "./store/reducers/app.reducers";
import {EffectsModule} from "@ngrx/effects";
import {CreativesEffects} from "./store/effects/creatives.effects";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatIconModule} from "@angular/material/icon";
import {MatButtonModule} from "@angular/material/button";
import {MatCardModule} from "@angular/material/card";
import {MatGridListModule} from "@angular/material/grid-list";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {ReactiveFormsModule} from "@angular/forms";
import {MatSelectModule} from "@angular/material/select";
import {MatSliderModule} from "@angular/material/slider";
import {BrowserModule} from "@angular/platform-browser";
import {MatListModule} from "@angular/material/list";
import {NavBarComponent} from "./components/UI/nav-bar/nav-bar.component";
import {ListComponent} from "./components/UI/list/list.component";
import {CardComponent} from "./components/UI/card/card.component";
import {CreativeEditComponent} from "./components/creative-edit/creative-edit.component";
import {LoginComponent} from "./components/login/login.component";
import {FormInputComponent} from "./components/UI/form-input/form-input.component";
import {SliderComponent} from "./components/UI/slider/slider.component";
import {SelectComponent} from "./components/UI/select/select.component";
import {HttpClientModule} from "@angular/common/http";
import {UserEffects} from "./store/effects/user.effects";
import { FormControlPipe } from './pipes/form-control.pipe';
import { SidebarComponent } from './components/UI/sidebar/sidebar.component';
import {MatSidenavModule} from "@angular/material/sidenav";
import { DialogComponent } from './components/UI/dialog/dialog.component';
import {MatDialogModule} from '@angular/material/dialog';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    ListComponent,
    CardComponent,
    CreativeEditComponent,
    LoginComponent,
    FormInputComponent,
    SliderComponent,
    SelectComponent,
    FormControlPipe,
    SidebarComponent,
    DialogComponent,
  ],
  imports: [
    AppRoutingModule,
    StoreModule.forRoot(appReducers, {}),
    EffectsModule.forRoot([CreativesEffects, UserEffects]),
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatCardModule,
    MatGridListModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
    MatSelectModule,
    MatSliderModule,
    BrowserModule,
    MatListModule,
    HttpClientModule,
    MatSidenavModule,
    MatDialogModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
