import { Component, TemplateRef, ViewChild } from '@angular/core';
import { ComponentType } from '@angular/cdk/overlay'
import { select, Store } from '@ngrx/store'
import { AppState } from '../../../store/state'
import { MatDialog } from '@angular/material/dialog'
import { FormBuilder } from '@angular/forms'
import { UserService } from '../../../services/user.service'
import { selectCurrentUser } from '../../../store/selectors/user.selector'
import { selectCampaignsList, selectSelectedCampaign } from '../../../store/selectors/campaigns.selector'
import { selectPlacementsList, selectSelectedPlacement } from '../../../store/selectors/placements.selector'
import { CreateCampaign, GetCampaign, GetCampaigns } from '../../../store/actions/campaigns.actions'
import { selectCreativesList } from '../../../store/selectors/creatives.selector'
import { first } from 'rxjs/internal/operators/first'
import { ActivatedRoute, ParamMap } from '@angular/router'
import { filter } from 'rxjs/internal/operators/filter'
import { GetPlacement, GetPlacements } from '../../../store/actions/placements.actions'
import { GetCreatives } from '../../../store/actions/creatives.actions'

@Component({
  selector: 'app-creatives',
  templateUrl: './creatives.component.html',
  styleUrls: ['./creatives.component.scss']
})
export class CreativesComponent {

  form = this._formBuilder.group<any>({
    name: '',
    animation: 'from top',
    height: 100,
    horizontalPos: 0,
    imageSize: 100,
    verticalPos: 0,
    width: 100,
    imageSrc: 'img',
    userId: '',
    campaignId: '',
    placementId: '',
  })
  routerLink = '/placements/'
  id!: string

  user$ = this._store.pipe(select(selectCurrentUser))
  campaign$ = this._store.pipe(select(selectSelectedCampaign))
  campaigns$ = this._store.pipe(select(selectCampaignsList))
  placement$ = this._store.pipe(select(selectSelectedPlacement))
  placements$ = this._store.pipe(select(selectPlacementsList))
  creatives$ = this._store.pipe(select(selectCreativesList))


  @ViewChild('dialogContent') dialogContent!: ComponentType<unknown> | TemplateRef<unknown>

  constructor(
    private _store: Store<AppState>,
    public dialog: MatDialog,
    private _formBuilder: FormBuilder,
    private _userService: UserService,
    private _activatedRoute: ActivatedRoute,
  ) {
  }

  ngOnInit() {
    this.user$.pipe(first()).subscribe(user => {
      this._store.dispatch(new GetCampaigns(this._userService.user._id))
      this._store.dispatch(new GetPlacements({ userId: this._userService.user._id }))
      this.form.controls['userId'].setValue(user._id)
    })
    this.getPlacements()
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

  getPlacements() {
    this._activatedRoute.paramMap.pipe().subscribe((params: ParamMap) => {

      this.id = params.get('id') ?? '';

      if (this.id) {
        this._store.dispatch(new GetPlacement(this.id))
        this.campaign$.pipe(filter(campaign => campaign)).subscribe(campaign => {
          this.form.get('campaignId')?.setValue(campaign._id)
        })
        this.placement$.pipe(filter(placement => placement)).subscribe(placement => {
          this._store.dispatch(new GetCreatives({ placementId: placement._id }))
          this.form.get('placementId')?.setValue(placement._id)
        })
      } else {
        this._store.dispatch(new GetCreatives({ userId: this._userService.user._id }))
      }
    });
  }

  handleCampaignDelete(campaign: any) {

  }

  handleSave() {
    this._store.dispatch(new CreateCampaign(this.form.value))
  }

}
