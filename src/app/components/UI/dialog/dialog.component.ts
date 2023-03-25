import {Component, Inject} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {PlacementsService} from "../../../services/placements.service";
import {Observable} from "rxjs";

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss']
})
export class DialogComponent {
  props!: any
  form$!: Observable<any>

  constructor(
    public dialogRef: MatDialogRef<DialogComponent>,
    private _placementsService: PlacementsService,
    @Inject(MAT_DIALOG_DATA) props: any
  ) {
    this.props = props
    this.form$ = this._placementsService.form.asObservable()
  }

  ngOnInit() {
    this._placementsService.createForm()
  }
}
