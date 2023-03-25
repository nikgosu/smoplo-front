import {Component, Input} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {ListService} from "../../../services/list.service";

@Component({
  selector: 'app-creative-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent {
  @Input() listItem: any
  path = this._activatedRoute.snapshot.routeConfig?.path

  constructor(
    private _activatedRoute: ActivatedRoute,
    private _listService: ListService
  ) {
  }

  handleDelete() {
    this.path && this._listService.deleteListItem(this.path, this.listItem)
  }
}
