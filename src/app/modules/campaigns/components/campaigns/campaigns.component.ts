import { Component, TemplateRef, ViewChild } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { AppState } from '../../../../store/state';
import { selectCurrentUser } from '../../../../store/selectors/user.selector';
import { first } from 'rxjs';
import { selectCampaignsList } from '../../../../store/selectors/campaigns.selector';
import { CreateCampaign, GetCampaign, GetCampaigns } from '../../../../store/actions/campaigns.actions';
import { AbstractControl, FormBuilder, FormControl } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { ComponentType } from '@angular/cdk/overlay'
import { UserService } from '../../../../services/user.service'

@Component({
  selector: 'app-campaigns',
  templateUrl: './campaigns.component.html',
  styleUrls: ['./campaigns.component.scss']
})
export class CampaignsComponent {
  form = this._formBuilder.group<any>({
    name: '',
    userId: '',
    placements: 0
  })
  routerLink = '/placements/'
  user$ = this._store.pipe(select(selectCurrentUser))
  campaigns$ = this._store.pipe(select(selectCampaignsList))

  @ViewChild('dialogContent') dialogContent!: ComponentType<unknown> | TemplateRef<unknown>

  constructor(
    private _store: Store<AppState>,
    public dialog: MatDialog,
    private _formBuilder: FormBuilder,
    private _userService: UserService
  ) {
  }

  ngOnInit() {
    this.user$.pipe(first()).subscribe(user => {
      this._store.dispatch(new GetCampaigns(this._userService.user._id))
      this.form.controls['userId'].setValue(user._id)
    })
  }

  createForm(userId: string): void {
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

  handleCampaignDelete(campaign: any) {

  }

  handleSave() {
    this._store.dispatch(new CreateCampaign(this.form.value))
  }
}
