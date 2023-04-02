import { Component, TemplateRef, ViewChild } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { AppState } from '../../../../store/state';
import { selectCurrentUser } from '../../../../store/selectors/user.selector';
import { first } from 'rxjs';
import { selectCampaignsList } from '../../../../store/selectors/campaigns.selector';
import { CreateCampaign, GetCampaigns } from '../../../../store/actions/campaigns.actions';
import { AbstractControl, FormBuilder, FormControl } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { ComponentType } from '@angular/cdk/overlay'

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
  user$ = this._store.pipe(select(selectCurrentUser))
  campaigns$ = this._store.pipe(select(selectCampaignsList))

  @ViewChild('dialogContent') dialogContent!: ComponentType<unknown> | TemplateRef<unknown>

  constructor(
    private _store: Store<AppState>,
    public dialog: MatDialog,
    private _formBuilder: FormBuilder
  ) {
  }

  ngOnInit() {
    this.user$.pipe(first()).subscribe(user => {
      this._store.dispatch(new GetCampaigns(user._id))
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

  handleSave() {
    this._store.dispatch(new CreateCampaign(this.form.value))
  }

  public asFormControl = (formControl: AbstractControl | null): FormControl =>
    formControl as FormControl;
}
