import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {CampaignsComponent} from './components/campaigns/campaigns.component';
import {SharedModule} from "../shared/shared.module";


@NgModule({
  declarations: [
    CampaignsComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
  ]
})
export class CampaignsModule { }
