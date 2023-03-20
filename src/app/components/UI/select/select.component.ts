import {Component, Input} from '@angular/core';
import {FormControl} from "@angular/forms";

@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.scss']
})
export class SelectComponent {
  @Input() control!: FormControl
  @Input() options!: any[]

  handleOptionSelect(option: string) {
    this.control.setValue(option)
  }
}
