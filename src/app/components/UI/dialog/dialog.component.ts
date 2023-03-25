import {Component, Inject} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {PlacementsService} from "../../../services/placements.service";
import {Observable} from "rxjs";
import {ActivatedRoute} from "@angular/router";
import {ERoutes} from "../../../router/models";
import {CampaignsService} from "../../../services/campaigns.service";

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss']
})
export class DialogComponent {
  props!: any
  form$!: Observable<any>
  routes = ERoutes

  constructor(
    public dialogRef: MatDialogRef<DialogComponent>,
    private _placementsService: PlacementsService,
    private _campaignsService: CampaignsService,
    private _activatedRoute: ActivatedRoute,
    @Inject(MAT_DIALOG_DATA) props: any
  ) {
    this.props = props

  }

  ngOnInit() {
    this.createForm()
  }
  createForm() {
    switch (this.props.type) {
      case ERoutes.CAMPAIGNS:
        this._campaignsService.createForm()
        this.form$ = this._campaignsService.form.asObservable()
        return
      case ERoutes.PLACEMENTS:
        this._placementsService.createForm()
        this.form$ = this._placementsService.form.asObservable()
        return
      default:
        return
    }
  }
  handleSave() {
    switch (this.props.type) {
      case ERoutes.CAMPAIGNS:
        this._campaignsService.createCampaign()
        return
      case ERoutes.PLACEMENTS:
        this._placementsService.createForm()
        this.form$ = this._placementsService.form.asObservable()
        return
      default:
        return
    }
  }
}
