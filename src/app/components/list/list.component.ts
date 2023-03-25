import {Component, Input} from '@angular/core';
import {ActivatedRoute, Data} from "@angular/router";
import {Observable} from "rxjs";

@Component({
  selector: 'app-creatives-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent {
  data$!: Observable<Data>

  constructor(private activatedRoute: ActivatedRoute) {
    this.data$ = this.activatedRoute.data
  }
}
