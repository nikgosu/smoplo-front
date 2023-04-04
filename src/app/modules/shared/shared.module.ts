import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatSidenavModule} from "@angular/material/sidenav";
import {MatDialogModule} from "@angular/material/dialog";
import {MatListModule} from "@angular/material/list";
import {MatSelectModule} from "@angular/material/select";
import {MatSliderModule} from "@angular/material/slider";
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatIconModule} from "@angular/material/icon";
import {MatButtonModule} from "@angular/material/button";
import {MatCardModule} from "@angular/material/card";
import {MatGridListModule} from "@angular/material/grid-list";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {NavBarComponent} from "./components/UI/nav-bar/nav-bar.component";
import {CardComponent} from "./components/UI/card/card.component";
import {CreativeEditComponent} from "./components/creative-edit/creative-edit.component";
import {LoginComponent} from "../../components/login/login.component";
import {FormInputComponent} from "./components/UI/form-input/form-input.component";
import {SliderComponent} from "./components/UI/slider/slider.component";
import {SelectComponent} from "./components/UI/select/select.component";
import {FormControlPipe} from "../../pipes/form-control.pipe";
import {SidebarComponent} from "./components/UI/sidebar/sidebar.component";
import {DialogComponent} from "./components/UI/dialog/dialog.component";
import {ReactiveFormsModule} from "@angular/forms";
import {RouterModule} from "@angular/router";
import { SideNavContainerComponent } from './components/UI/side-nav-container/side-nav-container.component';

@NgModule({
  declarations: [
    NavBarComponent,
    CardComponent,
    CreativeEditComponent,
    LoginComponent,
    FormInputComponent,
    SliderComponent,
    SelectComponent,
    FormControlPipe,
    SidebarComponent,
    DialogComponent,
    SideNavContainerComponent,
  ],
  imports: [
    CommonModule,
    MatSidenavModule,
    MatDialogModule,
    MatListModule,
    MatSelectModule,
    MatSliderModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatCardModule,
    MatGridListModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
    RouterModule
  ],
  exports: [
    NavBarComponent,
    CardComponent,
    CreativeEditComponent,
    LoginComponent,
    FormInputComponent,
    SliderComponent,
    SelectComponent,
    FormControlPipe,
    SidebarComponent,
    DialogComponent,
    SideNavContainerComponent,
    MatSidenavModule,
    MatDialogModule,
    MatListModule,
    MatSelectModule,
    MatSliderModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatCardModule,
    MatGridListModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
    RouterModule
  ]
})
export class SharedModule { }
