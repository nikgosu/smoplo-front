import {Component} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {Observable} from "rxjs";
import {ListService} from "../../../services/list.service";
import {CreativeModel} from "../../../models/creatives-model";

@Component({
  selector: 'app-creatives-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent {
  data$!: Observable<CreativeModel[]> | null

  constructor(
    private _activatedRoute: ActivatedRoute,
    private _listService: ListService
  ) {
    const path = this._activatedRoute.snapshot.routeConfig?.path
    this.data$ = this._listService.getList(path)
  }
}
