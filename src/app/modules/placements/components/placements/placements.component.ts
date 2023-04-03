import { Component, TemplateRef, ViewChild } from '@angular/core';
import { select, Store } from '@ngrx/store'
import { AppState } from '../../../../store/state'
import { MatDialog } from '@angular/material/dialog'
import { FormBuilder } from '@angular/forms'
import { selectCurrentUser } from '../../../../store/selectors/user.selector'
import { selectCampaignsList, selectSelectedCampaign } from '../../../../store/selectors/campaigns.selector'
import { selectPlacementsList } from '../../../../store/selectors/placements.selector'
import { filter } from 'rxjs/internal/operators/filter'
import { ActivatedRoute, ParamMap } from '@angular/router'
import { GetCampaign } from '../../../../store/actions/campaigns.actions'
import { CreatePlacement, GetPlacements, GetPlacementSuccess } from '../../../../store/actions/placements.actions'
import { UserService } from '../../../../services/user.service'
import { ComponentType } from '@angular/cdk/overlay'

@Component({
  selector: 'app-placements',
  templateUrl: './placements.component.html',
  styleUrls: ['./placements.component.scss']
})
export class PlacementsComponent {
  form = this._formBuilder.group<any>({
    name: '',
    size: '',
    userId: this._userService.user._id,
    campaignId: '',
    creatives: 0
  })
  user$ = this._store.pipe(select(selectCurrentUser))
  campaign$ = this._store.pipe(select(selectSelectedCampaign))
  campaigns$ = this._store.pipe(select(selectCampaignsList))
  placements$ = this._store.pipe(select(selectPlacementsList))
  routerLink = '/creatives/'

  id!: string
  sizes = [{name: '300x600', _id: 1}, {name: '1200x400', _id: 2}, {name: '500x300', _id: 3}]

  @ViewChild('dialogContent') dialogContent!: ComponentType<unknown> | TemplateRef<unknown>

  constructor(
    private _store: Store<AppState>,
    public dialog: MatDialog,
    private _formBuilder: FormBuilder,
    private _activatedRoute: ActivatedRoute,
    private _userService: UserService
  ) {
  }

  ngOnInit() {
    this.getPlacements()
    this._store.dispatch(new GetPlacementSuccess(null))
  }

  getPlacements() {
    this._activatedRoute.paramMap.pipe().subscribe((params: ParamMap) => {

      this.id = params.get('id') ?? '';

      if (this.id) {
        this._store.dispatch(new GetCampaign(this.id))
        this.campaign$.pipe(filter(campaign => campaign)).subscribe(campaign => {
          this._store.dispatch(new GetPlacements({ campaignId: campaign._id }))
          this.form.get('campaignId')?.setValue(campaign._id)
        })
      } else {
        this._store.dispatch(new GetPlacements({ userId: this._userService.user._id }))
      }
    });
  }

  openDialog(enterAnimationDuration: string, exitAnimationDuration: string): void {
    this.dialog.open(this.dialogContent, {
      width: '600px',
      enterAnimationDuration,
      exitAnimationDuration,
      data: {
        contentRef: this.dialogContent
      }
    });
  }

  handlePlacementDelete(placement: any) {

  }

  handleSave() {
    this._store.dispatch(new CreatePlacement(this.form.value))
  }
}
