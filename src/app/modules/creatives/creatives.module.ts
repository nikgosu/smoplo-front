import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreativesComponent } from './components/creatives.component';
import {SharedModule} from "../shared/shared.module";



@NgModule({
  declarations: [
    CreativesComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ]
})
export class CreativesModule { }
