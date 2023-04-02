import {Component, Input} from '@angular/core';
import {FormControl} from "@angular/forms";
import {Animation} from "../../../../../models/creatives-model";

@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.scss']
})
export class SelectComponent {
  @Input() control!: FormControl
  @Input() options!: any[]
  @Input() placeholder!: string
}
