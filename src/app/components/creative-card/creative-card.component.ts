import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-creative-card',
  templateUrl: './creative-card.component.html',
  styleUrls: ['./creative-card.component.scss']
})
export class CreativeCardComponent {
  @Input() creative: any
}
