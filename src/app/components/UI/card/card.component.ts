import {Component, Input} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {ListService} from "../../../services/list.service";
import {ERoutes} from "../../../router/models";

@Component({
  selector: 'app-creative-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent {
  @Input() listItem: any
  path = this._activatedRoute.snapshot.routeConfig?.path
  isCreatives!: boolean

  constructor(
    private _activatedRoute: ActivatedRoute,
    private _listService: ListService
  ) {
    this.isCreatives = this.path === ERoutes.CREATIVES
  }

  handleDelete() {
    this.path && this._listService.deleteListItem(this.path, this.listItem)
  }
}
