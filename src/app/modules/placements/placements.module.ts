import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlacementsComponent } from './components/placements/placements.component';
import {SharedModule} from "../shared/shared.module";



@NgModule({
  declarations: [
    PlacementsComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ]
})
export class PlacementsModule { }
