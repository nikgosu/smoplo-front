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
  path!: string
  isCreatives!: boolean

  constructor(
    private _activatedRoute: ActivatedRoute,
    private _listService: ListService
  ) {
  }

  ngOnInit() {
    this.path = this._activatedRoute.snapshot.routeConfig?.path ?? ''
    this.isCreatives = this.path === ERoutes.CREATIVES || this.path === ERoutes.PLACEMENT_CREATIVES
  }

  getRouterLink() {
    switch (this.path) {
      case ERoutes.CAMPAIGNS:
        return '/placements/' + this.listItem._id
      case ERoutes.CAMPAIGN_PLACEMENTS:
        return '/creatives/' + this.listItem._id
      case ERoutes.PLACEMENTS:
        return '/creatives/' + this.listItem._id
      case ERoutes.CREATIVES:
        return 'creative/' + this.listItem._id
      case ERoutes.PLACEMENT_CREATIVES:
        return '/creatives/creative/' + this.listItem._id
      default:
        return ''
    }
  }

  handleDelete() {
    this.path && this._listService.deleteListItem(this.path, this.listItem)
  }
}
