import { Component } from '@angular/core';
import {CREATIVES_MOCK} from "../../../mock";

@Component({
  selector: 'app-creatives-list',
  templateUrl: './creatives-list.component.html',
  styleUrls: ['./creatives-list.component.scss']
})
export class CreativesListComponent {
  creatives = CREATIVES_MOCK
}
