import {Component} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {Observable} from "rxjs";
import {ListService} from "../../../services/list.service";
import {CreativeModel} from "../../../models/creatives-model";
import {ERoutes} from "../../../router/models";
import {MatDialog} from "@angular/material/dialog";
import {DialogComponent} from "../dialog/dialog.component";

@Component({
  selector: 'app-creatives-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent {
  data$!: Observable<CreativeModel[]> | null
  isCreatives!: boolean
  path!: string | undefined

  constructor(
    private _activatedRoute: ActivatedRoute,
    private _listService: ListService,
    public dialog: MatDialog
  ) {
    this.path = this._activatedRoute.snapshot.routeConfig?.path
    this.isCreatives = this.path === ERoutes.CREATIVES
    this.data$ = this._listService.getList(this.path)
  }

  openDialog(enterAnimationDuration: string, exitAnimationDuration: string): void {
    this.dialog.open(DialogComponent, {
      width: '600px',
      enterAnimationDuration,
      exitAnimationDuration,
      data: this.getDialogTitle()
    });
  }

  getDialogTitle() {
    switch (this.path) {
      case ERoutes.CAMPAIGNS:
        return {title: 'Create Campaign', type: ERoutes.CAMPAIGNS}
      case ERoutes.PLACEMENTS:
        return {
          title: 'Create Placement',
          type: ERoutes.PLACEMENTS,
          sizes: [{name: '300x600'}, {name: '1200x400'}, {name: '500x300'}]}
      default:
        return {title: 'Dialog', type: 'Any'}
    }
  }
}
